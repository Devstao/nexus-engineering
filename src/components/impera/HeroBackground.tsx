import { useEffect, useRef } from "react";

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0, h = 0, dpr = 1;

    const particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      particles.length = 0;
      const count = Math.min(80, Math.floor((w * h) / 18000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          r: Math.random() * 1.4 + 0.3,
          a: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 14000) {
            const a = (1 - d2 / 14000) * 0.12;
            ctx.strokeStyle = `rgba(212, 175, 95, ${a})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.fillStyle = `rgba(232, 200, 130, ${p.a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    const onResize = () => {
      resize();
      init();
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* base radial */}
      <div className="absolute inset-0 radial-gold opacity-70" />
      {/* grid */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      {/* floating gradients */}
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,oklch(0.82_0.13_85/20%)_0%,transparent_70%)] animate-float-slow" />
      <div className="absolute -bottom-40 -right-40 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,oklch(0.62_0.13_70/15%)_0%,transparent_70%)] animate-float-slower" />
      {/* particles */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#050505_85%)]" />
      {/* horizontal gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px gold-line" />
    </div>
  );
}
