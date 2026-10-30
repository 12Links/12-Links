import { useEffect, useRef } from "react";

export default function DigitalRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    const resize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    };

    window.addEventListener("resize", resize);

    const chars = "01101001011100101011010100110110100110012LINKS<>{}[]$#_+-=*/";
    const fontSize = 13;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));

    let lastDraw = 0;
    const fpsInterval = 1000 / 24; // 24 FPS for subtle, smooth, battery-friendly ambient effect

    const draw = (timestamp: number) => {
      animationId = requestAnimationFrame(draw);

      const elapsed = timestamp - lastDraw;
      if (elapsed < fpsInterval) return;
      lastDraw = timestamp - (elapsed % fpsInterval);

      ctx.fillStyle = "rgba(10, 10, 15, 0.1)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#00FF88";
      ctx.font = `${fontSize}px 'Space Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Subtle gradient effect for leading characters
        if (drops[i] % 10 === 0) {
          ctx.fillStyle = "#FFFFFF";
        } else {
          ctx.fillStyle = "rgba(0, 255, 136, 0.75)";
        }

        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.985) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.14] mix-blend-screen z-0"
      aria-hidden="true"
    />
  );
}
