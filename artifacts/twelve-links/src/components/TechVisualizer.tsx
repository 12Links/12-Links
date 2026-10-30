import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  Terminal, 
  Activity, 
  Radio, 
  Cpu, 
  RefreshCw, 
  Zap, 
  Play, 
  Pause,
  Compass,
  Database
} from "lucide-react";

type Mode = "neural" | "matrix" | "radar";

export default function TechVisualizer() {
  const [mode, setMode] = useState<Mode>("neural");
  const [isRunning, setIsRunning] = useState(true);
  const [fps, setFps] = useState(60);
  const [activeNodesCount, setActiveNodesCount] = useState(42);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, isHovering: false });
  const shockwavesRef = useRef<{ x: number; y: number; radius: number; maxRadius: number; alpha: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    let frameCount = 0;
    let fpsTimer = performance.now();

    // High DPI Canvas Scaling
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // ── MODE 1: NEURAL MESH SIMULATION STATE ──
    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseColor: string;
      phase: number;
    }[] = [];

    const nodeCount = 38;
    setActiveNodesCount(nodeCount);

    const rect = canvas.getBoundingClientRect();
    const w = rect.width || 480;
    const h = rect.height || 360;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.9,
        vy: (Math.random() - 0.5) * 0.9,
        radius: Math.random() * 2 + 2,
        baseColor: i % 4 === 0 ? "#10B981" : i % 3 === 0 ? "#06B6D4" : "#6EE7B7",
        phase: Math.random() * Math.PI * 2
      });
    }

    // Light Packets traveling along edges
    const packets: {
      fromIndex: number;
      toIndex: number;
      progress: number;
      speed: number;
    }[] = [];

    // ── MODE 2: MATRIX STREAM STATE ──
    const fontSize = 13;
    const columns = Math.floor(w / fontSize);
    const drops: number[] = [];
    const characters = "0110100101LINKSAFRICAPYTORTENSORFASTAPI1234567890ABCDEF";
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -50);
    }

    // ── MODE 3: RADAR SWEEP STATE ──
    let radarAngle = 0;
    const radarTargets = [
      { x: w * 0.55, y: h * 0.42, label: "PTA HUB // UNIV", lastPing: 0 },
      { x: w * 0.48, y: h * 0.62, label: "JHB CORE // ROSEBANK", lastPing: 0 },
      { x: w * 0.72, y: h * 0.32, label: "EDGE // AWS CPT", lastPing: 0 },
      { x: w * 0.30, y: h * 0.48, label: "SENSOR // GATEWAY", lastPing: 0 },
      { x: w * 0.62, y: h * 0.75, label: "API POD // PROD", lastPing: 0 }
    ];

    // ── MAIN RENDER LOOP ──
    const render = (currentTime: number) => {
      // FPS measurement
      frameCount++;
      if (currentTime - fpsTimer >= 1000) {
        setFps(Math.round((frameCount * 1000) / (currentTime - fpsTimer)));
        frameCount = 0;
        fpsTimer = currentTime;
      }

      const rectNow = canvas.getBoundingClientRect();
      const width = rectNow.width;
      const height = rectNow.height;

      // Clear Canvas
      ctx.clearRect(0, 0, width, height);

      // Subtle Background Grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 1;
      const gridSize = 24;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Render Active Mode
      if (mode === "neural") {
        renderNeural(width, height, currentTime);
      } else if (mode === "matrix") {
        renderMatrix(width, height);
      } else if (mode === "radar") {
        renderRadar(width, height);
      }

      // Render Shockwaves from Clicks
      renderShockwaves();

      if (isRunning) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    // ── 1. RENDER NEURAL MESH ──
    const renderNeural = (width: number, height: number, time: number) => {
      const mouse = mouseRef.current;
      const maxDistance = 90;

      // Update and connect nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (isRunning) {
          node.x += node.vx;
          node.y += node.vy;

          // Bounce off boundaries
          if (node.x <= 10 || node.x >= width - 10) node.vx *= -1;
          if (node.y <= 10 || node.y >= height - 10) node.vy *= -1;

          // Mouse attraction / gentle push
          if (mouse.isHovering) {
            const dx = mouse.x - node.x;
            const dy = mouse.y - node.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120 && dist > 1) {
              node.x += (dx / dist) * 0.45;
              node.y += (dy / dist) * 0.45;
            }
          }
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = 1 - dist / maxDistance;
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha * 0.35})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();

            // Randomly create data packets
            if (isRunning && Math.random() < 0.0015 && packets.length < 12) {
              packets.push({
                fromIndex: i,
                toIndex: j,
                progress: 0,
                speed: 0.012 + Math.random() * 0.015
              });
            }
          }
        }

        // Draw node body & pulse glow
        const pulse = Math.sin(time * 0.003 + node.phase) * 0.5 + 0.5;
        const currentRadius = node.radius + pulse * 1.5;

        // Outer glow
        const grad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, currentRadius * 3);
        grad.addColorStop(0, node.baseColor);
        grad.addColorStop(1, "rgba(16, 185, 129, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Node center
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 0.7, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw light packets traveling
      for (let p = packets.length - 1; p >= 0; p--) {
        const packet = packets[p];
        if (isRunning) {
          packet.progress += packet.speed;
        }

        const fromNode = nodes[packet.fromIndex];
        const toNode = nodes[packet.toIndex];

        if (!fromNode || !toNode || packet.progress >= 1) {
          packets.splice(p, 1);
          continue;
        }

        const px = fromNode.x + (toNode.x - fromNode.x) * packet.progress;
        const py = fromNode.y + (toNode.y - fromNode.y) * packet.progress;

        ctx.fillStyle = "#34D399";
        ctx.shadowColor = "#10B981";
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Connection to mouse pointer
      if (mouse.isHovering) {
        ctx.strokeStyle = "rgba(6, 182, 212, 0.5)";
        ctx.setLineDash([3, 3]);
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(n.x, n.y);
            ctx.stroke();
          }
        }
        ctx.setLineDash([]);

        // Interactive cursor halo
        ctx.strokeStyle = "rgba(16, 185, 129, 0.8)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 14, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    // ── 2. RENDER MATRIX DATA STREAM ──
    const renderMatrix = (width: number, height: number) => {
      ctx.fillStyle = "rgba(15, 17, 23, 0.16)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Head is bright white/emerald
        ctx.fillStyle = "#6EE7B7";
        ctx.fillText(text, x, y);

        // Trailing character
        const tailText = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillStyle = "rgba(16, 185, 129, 0.35)";
        ctx.fillText(tailText, x, y - fontSize);

        if (isRunning) {
          if (y > height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }

      // Dynamic Audio Equalizer Waveform at the Bottom
      const barCount = 28;
      const barWidth = Math.floor(width / (barCount * 1.5));
      const startX = (width - barCount * barWidth * 1.5) / 2;

      for (let b = 0; b < barCount; b++) {
        const freqHeight = Math.sin(performance.now() * 0.005 + b * 0.4) * 22 + 26;
        const bx = startX + b * barWidth * 1.5;
        const by = height - 16 - freqHeight;

        const grad = ctx.createLinearGradient(bx, by, bx, height - 16);
        grad.addColorStop(0, "#10B981");
        grad.addColorStop(1, "rgba(16, 185, 129, 0.05)");

        ctx.fillStyle = grad;
        ctx.fillRect(bx, by, barWidth, freqHeight);
      }
    };

    // ── 3. RENDER RADAR SWEEP ──
    const renderRadar = (width: number, height: number) => {
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.42;

      // Concentric circles
      ctx.strokeStyle = "rgba(16, 185, 129, 0.2)";
      ctx.lineWidth = 1;
      for (let r = 1; r <= 3; r++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, (radius / 3) * r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Crosshairs & degree ticks
      ctx.beginPath();
      ctx.moveTo(centerX - radius, centerY);
      ctx.lineTo(centerX + radius, centerY);
      ctx.moveTo(centerX, centerY - radius);
      ctx.lineTo(centerX, centerY + radius);
      ctx.stroke();

      // Sweeping Beam
      if (isRunning) {
        radarAngle = (radarAngle + 0.035) % (Math.PI * 2);
      }

      // Beam arc trail
      const sweepGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      sweepGradient.addColorStop(0, "rgba(16, 185, 129, 0.35)");
      sweepGradient.addColorStop(1, "rgba(16, 185, 129, 0.02)");

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, radarAngle - 0.5, radarAngle);
      ctx.closePath();
      ctx.fillStyle = sweepGradient;
      ctx.fill();

      // Main beam leading line
      ctx.strokeStyle = "#34D399";
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(
        centerX + Math.cos(radarAngle) * radius,
        centerY + Math.sin(radarAngle) * radius
      );
      ctx.stroke();
      ctx.restore();

      // Targets on Radar
      radarTargets.forEach((target) => {
        // Compute angle to target
        const dx = target.x - centerX;
        const dy = target.y - centerY;
        let angleToTarget = Math.atan2(dy, dx);
        if (angleToTarget < 0) angleToTarget += Math.PI * 2;

        const angleDiff = Math.abs(radarAngle - angleToTarget);
        if (angleDiff < 0.1) {
          target.lastPing = performance.now();
        }

        const timeSincePing = performance.now() - target.lastPing;
        const intensity = Math.max(0, 1 - timeSincePing / 1800);

        // Target blip
        ctx.fillStyle = intensity > 0.1 ? "#34D399" : "rgba(16, 185, 129, 0.4)";
        ctx.beginPath();
        ctx.arc(target.x, target.y, 4, 0, Math.PI * 2);
        ctx.fill();

        if (intensity > 0.1) {
          ctx.strokeStyle = `rgba(52, 211, 153, ${intensity})`;
          ctx.beginPath();
          ctx.arc(target.x, target.y, 12 * (1 - intensity * 0.5), 0, Math.PI * 2);
          ctx.stroke();

          // Label
          ctx.fillStyle = `rgba(255, 255, 255, ${intensity})`;
          ctx.font = "10px monospace";
          ctx.fillText(target.label, target.x + 8, target.y - 4);
        }
      });
    };

    // ── SHOCKWAVES ──
    const renderShockwaves = () => {
      for (let s = shockwavesRef.current.length - 1; s >= 0; s--) {
        const shock = shockwavesRef.current[s];
        shock.radius += 2.5;
        shock.alpha = 1 - shock.radius / shock.maxRadius;

        if (shock.radius >= shock.maxRadius) {
          shockwavesRef.current.splice(s, 1);
          continue;
        }

        ctx.strokeStyle = `rgba(52, 211, 153, ${shock.alpha * 0.6})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(shock.x, shock.y, shock.radius, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [mode, isRunning]);

  // Handle Mouse Events for Interactivity
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isHovering: true
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: -1000, y: -1000, isHovering: false };
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    shockwavesRef.current.push({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      radius: 5,
      maxRadius: 80,
      alpha: 1
    });
  };

  return (
    <div className="rounded-xl border border-white/15 bg-[#141721] overflow-hidden shadow-2xl relative select-none">
      
      {/* ── Console Header ── */}
      <div className="px-4 py-3 bg-[#181B26] border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-xs text-gray-300 font-mono ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            12links-core // engine.v2
          </span>
        </div>

        {/* Live Status Pill */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-950/70 border border-emerald-800/50 px-2 py-0.5 rounded font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {fps} FPS • LIVE
          </span>
        </div>
      </div>

      {/* ── Interactive Mode Switcher Tabs ── */}
      <div className="px-4 py-2 bg-[#10131B] border-b border-white/10 flex items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setMode("neural")}
            className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors flex items-center gap-1 cursor-pointer ${
              mode === "neural"
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Cpu className="w-3 h-3" />
            Neural Mesh
          </button>
          
          <button
            type="button"
            onClick={() => setMode("matrix")}
            className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors flex items-center gap-1 cursor-pointer ${
              mode === "matrix"
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Database className="w-3 h-3" />
            Quantum Stream
          </button>

          <button
            type="button"
            onClick={() => setMode("radar")}
            className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors flex items-center gap-1 cursor-pointer ${
              mode === "radar"
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Compass className="w-3 h-3" />
            Gauteng Radar
          </button>
        </div>

        {/* Play/Pause state toggle */}
        <button
          type="button"
          onClick={() => setIsRunning(!isRunning)}
          className="text-gray-400 hover:text-emerald-400 transition-colors p-1 rounded hover:bg-white/5 cursor-pointer"
          title={isRunning ? "Pause animation" : "Resume animation"}
          aria-label={isRunning ? "Pause animation" : "Resume animation"}
        >
          {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* ── Interactive Canvas Container ── */}
      <div className="relative w-full h-[320px] bg-[#0E1017] overflow-hidden cursor-crosshair">
        
        {/* Subtle Scanline Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)] z-10"
        />

        {/* Dynamic HUD Overlays */}
        <div className="absolute top-3 left-3 z-20 pointer-events-none font-mono text-[10px] text-gray-500 flex flex-col gap-0.5">
          <span className="text-gray-400 flex items-center gap-1">
            <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
            TELEMETRY: ONLINE
          </span>
          <span>LAT: -25.7479° S / LON: 28.2293° E</span>
        </div>

        <div className="absolute top-3 right-3 z-20 pointer-events-none font-mono text-[10px] text-gray-500 text-right">
          <span className="text-emerald-400/80">LATENCY: 0.8ms</span>
          <span className="block text-gray-500">BUFFER: 100% OK</span>
        </div>

        {/* Canvas Element */}
        <canvas
          ref={canvasRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleCanvasClick}
          className="w-full h-full block"
        />

        {/* Interactive Hint */}
        <div className="absolute bottom-2.5 right-3 z-20 pointer-events-none font-mono text-[9px] text-gray-500 bg-black/40 px-2 py-0.5 rounded border border-white/5">
          Click canvas to pulse • Hover to interact
        </div>
      </div>

      {/* ── Console Telemetry Footer ── */}
      <div className="px-4 py-3 bg-[#141721] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-gray-300">
            <Zap className="w-3 h-3 text-emerald-400" />
            <span>Stack: TypeScript + WebGL Canvas</span>
          </span>
        </div>
        <span className="text-emerald-400">
          Gauteng Hub // Pretoria & Joburg
        </span>
      </div>

    </div>
  );
}
