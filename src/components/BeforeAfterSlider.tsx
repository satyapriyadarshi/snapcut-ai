import { useCallback, useRef, useState } from "react";

type Props = {
  before: string;
  after: string;
  alt: string;
};

export function BeforeAfterSlider({ before, after, alt }: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, next)));
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-square w-full touch-none overflow-hidden rounded-2xl border border-border bg-card select-none"
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        move(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && move(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      <div className="checkerboard absolute inset-0">
        <img
          src={after}
          alt={`${alt} with the background removed`}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt={`${alt} before editing`}
          loading="lazy"
          className="h-full w-full object-cover"
          style={{ width: ref.current?.clientWidth ?? undefined }}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08)]"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute top-1/2 left-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-primary shadow-lg">
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
            <path d="M8 5 3 12l5 7v-4h3v-6H8V5Zm8 0v4h-3v6h3v4l5-7-5-7Z" />
          </svg>
        </span>
      </div>
      <span className="pointer-events-none absolute top-3 left-3 rounded-full bg-foreground/75 px-3 py-1 text-xs font-medium text-background">
        Before
      </span>
      <span className="pointer-events-none absolute top-3 right-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
        After
      </span>
      <label className="sr-only" htmlFor={`slider-${alt}`}>
        Comparison position for {alt}
      </label>
      <input
        id={`slider-${alt}`}
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute bottom-3 left-1/2 w-2/3 -translate-x-1/2 accent-primary opacity-0 focus-visible:opacity-100"
      />
    </div>
  );
}
