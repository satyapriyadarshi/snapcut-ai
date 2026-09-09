/**
 * Background removal service layer.
 *
 * The rest of the app only talks to `removeImageBackground()`. Swapping the AI
 * provider (n8n workflow, remote API, Cloudinary pipeline) means changing this
 * file only — never the UI.
 *
 * Remote mode: set VITE_BG_REMOVAL_ENDPOINT to a backend URL that accepts a
 * multipart POST with an `image` field and responds with a transparent PNG.
 * API keys stay on that backend and are never shipped to the browser.
 * Local mode (default): runs an on-device AI model in the browser.
 */

export const ACCEPTED_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
export const ACCEPTED_LABEL = "JPG, JPEG, PNG, WEBP";
export const MAX_FILE_BYTES = 12 * 1024 * 1024;
export const MAX_FILE_LABEL = "12 MB";

/** Errors safe to show to a normal user. Never surfaces API/internal details. */
export class FriendlyError extends Error {}

export function validateImageFile(file: File): string | null {
  if (!ACCEPTED_TYPES.includes(file.type.toLowerCase())) {
    return "This file format isn't supported. Please upload JPG, PNG or WEBP.";
  }
  if (file.size > MAX_FILE_BYTES) {
    return "This image is too large. Please upload a smaller file.";
  }
  return null;
}

export function extractImageFromClipboard(
  data: DataTransfer | ClipboardData | null,
): File | null {
  if (!data) return null;
  const items = "items" in data ? data.items : undefined;
  if (items) {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.kind === "file") {
        const file = item.getAsFile();
        if (file && ACCEPTED_TYPES.includes(file.type.toLowerCase())) return file;
      }
    }
  }
  const files = "files" in data ? data.files : undefined;
  if (files && files.length > 0) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file && ACCEPTED_TYPES.includes(file.type.toLowerCase())) return file;
    }
  }
  return null;
}

export type ProgressHandler = (percent: number) => void;

const endpoint = import.meta.env["VITE_BG_REMOVAL_ENDPOINT"] as string | undefined;

export const removalMode: "remote" | "on-device" = endpoint ? "remote" : "on-device";

async function removeViaEndpoint(file: File, onProgress?: ProgressHandler): Promise<Blob> {
  onProgress?.(15);
  const body = new FormData();
  body.append("image", file);
  let res: Response;
  try {
    res = await fetch(endpoint as string, { method: "POST", body });
  } catch {
    throw new FriendlyError("Something went wrong. Please check your connection and try again.");
  }
  onProgress?.(85);
  if (!res.ok) {
    throw new FriendlyError("We couldn't process this image. Please try again.");
  }
  const blob = await res.blob();
  onProgress?.(100);
  return blob;
}

async function removeOnDevice(file: File, onProgress?: ProgressHandler): Promise<Blob> {
  try {
    const { removeBackground } = await import("@imgly/background-removal");
    return await removeBackground(file, {
      output: { format: "image/png" },
      progress: (_key: string, current: number, total: number) => {
        if (total > 0) onProgress?.(Math.min(99, Math.round((current / total) * 100)));
      },
    });
  } catch (err) {
    if (err instanceof FriendlyError) throw err;
    console.error("background removal failed", err);
    throw new FriendlyError("We couldn't process this image. Please try again.");
  }
}

export async function removeImageBackground(
  file: File,
  onProgress?: ProgressHandler,
): Promise<Blob> {
  const invalid = validateImageFile(file);
  if (invalid) throw new FriendlyError(invalid);
  onProgress?.(5);
  const result =
    removalMode === "remote"
      ? await removeViaEndpoint(file, onProgress)
      : await removeOnDevice(file, onProgress);
  onProgress?.(100);
  return result;
}
