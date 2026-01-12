import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) {
      setEnabled(false);
      return;
    }

    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div
        className="absolute h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          left: pos.x,
          top: pos.y,
          background: `
            radial-gradient(520px 520px at center, rgba(16,185,129,.16), transparent 62%),
            radial-gradient(520px 520px at center, rgba(139,92,246,.12), transparent 62%)
          `,
        }}
      />
    </div>
  );
}
