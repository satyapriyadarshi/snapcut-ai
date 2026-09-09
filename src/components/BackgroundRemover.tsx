import { useCallback, useEffect, useRef, useState } from "react";
import { Download, ImageUp, Loader2, RotateCcw, ShieldCheck, Sparkles, Upload } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ACCEPTED_LABEL,
  ACCEPTED_TYPES,
  FriendlyError,
  MAX_FILE_LABEL,
  removeImageBackground,
  validateImageFile,
} from "@/lib/bg-removal";
import { addToHistory } from "@/lib/history";

type Stage = "idle" | "processing" | "done";

export function BackgroundRemover({ compact = false }: { compact?: boolean }) {
  const [stage, setStage] = useState<Stage>("idle");
  const [progress, setProgress] = useState(0);
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState("image");
  const [dragging, setDragging] = useState(false);
  const lastFile = useRef<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      if (originalUrl) URL.revokeObjectURL(originalUrl);
      if (resultUrl) URL.revokeObjectURL(resultUrl);
    };
  }, [originalUrl, resultUrl]);

  const process = useCallback(async (file: File) => {
    const invalid = validateImageFile(file);
    if (invalid) {
      toast.error(invalid);
      return;
    }
    lastFile.current = file;
    setFileName(file.name.replace(/\.[^.]+$/, "") || "image");
    setOriginalUrl(URL.createObjectURL(file));
    setResultUrl(null);
    setProgress(4);
    setStage("processing");
    try {
      const blob = await removeImageBackground(file, setProgress);
      setResultUrl(URL.createObjectURL(blob));
      setStage("done");
      void addToHistory(blob, file.name);
      toast.success("Background removed");
    } catch (err) {
      setStage("idle");
      toast.error(
        err instanceof FriendlyError
          ? err.message
          : "We couldn't process this image. Please try again.",
      );
    }
  }, []);

  function reset() {
    setStage("idle");
    setOriginalUrl(null);
    setResultUrl(null);
    setProgress(0);
    lastFile.current = null;
  }

  function download() {
    if (!resultUrl) return;
    const a = document.createElement("a");
    a.href = resultUrl;
    a.download = `${fileName}-snapcut.png`;
    a.click();
  }

  return (
    <div className="rounded-3xl border border-border bg-card p-4 shadow-[var(--shadow-card)] sm:p-6">
      {stage === "idle" && (
        <div
          role="button"
          tabIndex={0}
          aria-label="Upload an image to remove its background"
          onClick={() => inputRef.current?.click()}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              inputRef.current?.click();
            }
          }}
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragging(false);
            const file = e.dataTransfer.files?.[0];
            if (file) void process(file);
          }}
          className={`group flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 text-center transition-all duration-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none ${
            compact ? "py-10" : "py-14"
          } ${
            dragging
              ? "border-primary bg-primary/5 scale-[1.01]"
              : "border-border hover:border-primary/60 hover:bg-primary/[0.03]"
          }`}
        >
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 group-hover:scale-105">
            <ImageUp className="h-7 w-7" aria-hidden="true" />
          </span>
          <p className="mt-5 text-lg font-semibold">Drop your image here</p>
          <p className="mt-1 text-sm text-muted-foreground">or click to upload</p>
          <p className="mt-4 text-xs text-muted-foreground">
            Supported formats: {ACCEPTED_LABEL} · up to {MAX_FILE_LABEL}
          </p>
          <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            Secure Processing • Privacy First
          </p>
          <input
            ref={inputRef}
            type="file"
            accept={ACCEPTED_TYPES.join(",")}
            className="sr-only"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) void process(file);
              e.target.value = "";
            }}
          />
        </div>
      )}

      {stage === "processing" && (
        <div className="flex flex-col items-center justify-center rounded-2xl bg-muted/50 px-6 py-16 text-center">
          <div className="relative">
            {originalUrl && (
              <img
                src={originalUrl}
                alt=""
                className="h-28 w-28 rounded-2xl object-cover opacity-60"
              />
            )}
            <Loader2
              className="absolute inset-0 m-auto h-10 w-10 animate-spin text-primary"
              aria-hidden="true"
            />
          </div>
          <p className="mt-6 flex items-center gap-2 text-base font-semibold">
            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
            AI is removing the background…
          </p>
          <Progress value={progress} className="mt-4 h-2 w-full max-w-xs" />
          <p className="mt-2 text-xs text-muted-foreground" aria-live="polite">
            {progress}% complete
          </p>
        </div>
      )}

      {stage === "done" && originalUrl && resultUrl && (
        <div className="animate-in fade-in duration-500">
          <div className="grid gap-4 sm:grid-cols-2">
            <figure>
              <figcaption className="mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                Before
              </figcaption>
              <img
                src={originalUrl}
                alt="Your original image"
                className="aspect-square w-full rounded-2xl border border-border object-contain"
              />
            </figure>
            <figure>
              <figcaption className="mb-2 text-xs font-medium tracking-wide text-primary uppercase">
                After
              </figcaption>
              <div className="checkerboard rounded-2xl border border-border">
                <img
                  src={resultUrl}
                  alt="Your image with the background removed"
                  className="aspect-square w-full object-contain"
                />
              </div>
            </figure>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button onClick={download} size="lg" className="flex-1 sm:flex-none">
              <Download aria-hidden="true" /> Download PNG
            </Button>
            <Button variant="outline" size="lg" onClick={reset}>
              <Upload aria-hidden="true" /> Try Another Image
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => lastFile.current && void process(lastFile.current)}
            >
              <RotateCcw aria-hidden="true" /> Remove Background Again
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
