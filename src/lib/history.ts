/** Local, browser-only record of recently processed images (no server storage). */

export type HistoryItem = {
  id: string;
  name: string;
  date: string;
  dataUrl: string;
};

const KEY = "snapcut.history";
const MAX_ITEMS = 6;

export function readHistory(): HistoryItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as HistoryItem[]) : [];
  } catch {
    return [];
  }
}

function write(items: HistoryItem[]) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(items));
  } catch {
    /* storage full — history is a convenience only */
  }
}

export async function addToHistory(blob: Blob, name: string): Promise<HistoryItem[]> {
  const dataUrl = await shrinkToDataUrl(blob, 480);
  const item: HistoryItem = {
    id: `${Date.now()}`,
    name,
    date: new Date().toISOString(),
    dataUrl,
  };
  const items = [item, ...readHistory()].slice(0, MAX_ITEMS);
  write(items);
  return items;
}

export function removeFromHistory(id: string): HistoryItem[] {
  const items = readHistory().filter((i) => i.id !== id);
  write(items);
  return items;
}

function shrinkToDataUrl(blob: Blob, max: number): Promise<string> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, max / Math.max(img.width, img.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(img.width * scale));
      canvas.height = Math.max(1, Math.round(img.height * scale));
      const ctx = canvas.getContext("2d");
      if (!ctx) return reject(new Error("no canvas"));
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL("image/png"));
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("bad image"));
    };
    img.src = url;
  });
}
