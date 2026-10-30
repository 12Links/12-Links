import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function star(cx: number, cy: number, R: number, r: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 5; i++) {
    const a1 = ((i * 72) - 90) * (Math.PI / 180);
    const a2 = ((i * 72 + 36) - 90) * (Math.PI / 180);
    pts.push(`${cx + R * Math.cos(a1)},${cy + R * Math.sin(a1)}`);
    pts.push(`${cx + r * Math.cos(a2)},${cy + r * Math.sin(a2)}`);
  }
  return pts.join(" ");
}

function FlagSVG({ code }: { code: string }) {
  const v = "0 0 120 80";
  switch (code) {
    case "za":
      return (
        <svg viewBox={v} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-label="South Africa">
          <rect width="120" height="80" fill="#DE3831" />
          <rect y="53" width="120" height="27" fill="#0032A0" />
          <rect y="26" width="120" height="28" fill="#007A4D" />
          <rect y="23.5" width="120" height="3.5" fill="#fff" />
          <rect y="53" width="120" height="3.5" fill="#fff" />
          <rect y="27" width="120" height="2" fill="#FFB612" />
          <rect y="51" width="120" height="2" fill="#FFB612" />
          <polygon points="0,0 48,40 0,80" fill="#000" />
          <polygon points="0,0 44,40 0,80" fill="#FFB612" />
          <polygon points="0,4 40,40 0,76" fill="#fff" />
          <polygon points="0,9 35,40 0,71" fill="#007A4D" />
        </svg>
      );
    case "ng":
      return (
        <svg viewBox={v} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-label="Nigeria">
          <rect width="40" height="80" fill="#008751" />
          <rect x="40" width="40" height="80" fill="#fff" />
          <rect x="80" width="40" height="80" fill="#008751" />
        </svg>
      );
    case "gh":
      return (
        <svg viewBox={v} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-label="Ghana">
          <rect width="120" height="27" fill="#CF0921" />
          <rect y="27" width="120" height="26" fill="#FCD116" />
          <rect y="53" width="120" height="27" fill="#006B3F" />
          <polygon points={star(60, 40, 11, 4.5)} fill="#000" />
        </svg>
      );
    case "ke":
      return (
        <svg viewBox={v} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-label="Kenya">
          <rect width="120" height="27" fill="#BB0000" />
          <rect y="27" width="120" height="26" fill="#006600" />
          <rect y="53" width="120" height="27" fill="#BB0000" />
          <rect y="25" width="120" height="4" fill="#fff" />
          <rect y="51" width="120" height="4" fill="#fff" />
          <rect y="27" width="120" height="26" fill="#000" />
          <rect y="31" width="120" height="18" fill="#BB0000" />
          <ellipse cx="60" cy="40" rx="9" ry="14" fill="#BB0000" stroke="#fff" strokeWidth="2" />
          <rect x="57" y="31" width="6" height="18" fill="white" />
          <line x1="57" y1="36" x2="63" y2="36" stroke="#000" strokeWidth="1.5" />
          <line x1="57" y1="40" x2="63" y2="40" stroke="#000" strokeWidth="1.5" />
          <line x1="57" y1="44" x2="63" y2="44" stroke="#000" strokeWidth="1.5" />
          <ellipse cx="60" cy="40" rx="9" ry="14" fill="none" stroke="#fff" strokeWidth="1.5" />
        </svg>
      );
    case "rw":
      return (
        <svg viewBox={v} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-label="Rwanda">
          <rect width="120" height="80" fill="#20603D" />
          <rect width="120" height="50" fill="#FAD201" />
          <rect width="120" height="33" fill="#20A0D0" />
          <circle cx="95" cy="18" r="8" fill="#FAD201" />
          <circle cx="95" cy="18" r="5.5" fill="#20A0D0" />
          {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => {
            const a = (i * 30) * Math.PI / 180;
            return <line key={i} x1={95 + 5.5 * Math.cos(a)} y1={18 + 5.5 * Math.sin(a)} x2={95 + 8 * Math.cos(a)} y2={18 + 8 * Math.sin(a)} stroke="#FAD201" strokeWidth="1.2" />;
          })}
        </svg>
      );
    case "eg":
      return (
        <svg viewBox={v} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-label="Egypt">
          <rect width="120" height="27" fill="#CE1126" />
          <rect y="27" width="120" height="26" fill="#fff" />
          <rect y="53" width="120" height="27" fill="#000" />
          <rect x="48" y="33" width="24" height="14" fill="#C8A84B" opacity="0.9" />
          <polygon points="60,33 54,47 66,47" fill="#C8A84B" opacity="0.6" />
        </svg>
      );
    case "et":
      return (
        <svg viewBox={v} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-label="Ethiopia">
          <rect width="120" height="27" fill="#078930" />
          <rect y="27" width="120" height="26" fill="#FCDD09" />
          <rect y="53" width="120" height="27" fill="#DA121A" />
          <circle cx="60" cy="40" r="14" fill="#0F47AF" />
          <polygon points={star(60, 40, 11, 4.5)} fill="#FCDD09" />
        </svg>
      );
    case "sn":
      return (
        <svg viewBox={v} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-label="Senegal">
          <rect width="40" height="80" fill="#00853F" />
          <rect x="40" width="40" height="80" fill="#FDEF42" />
          <rect x="80" width="40" height="80" fill="#E31B23" />
          <polygon points={star(60, 40, 11, 4.5)} fill="#00853F" />
        </svg>
      );
    case "tz":
      return (
        <svg viewBox={v} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-label="Tanzania">
          <polygon points="0,0 120,0 120,22 0,80" fill="#1EB53A" />
          <polygon points="0,58 120,22 120,80 0,80" fill="#00A3DD" />
          <polygon points="0,0 120,0 120,32 0,80" fill="#000" />
          <polygon points="0,0 120,0 120,24 0,73" fill="#FCD116" />
          <polygon points="0,7 120,0 120,32 0,80" fill="#FCD116" />
          <polygon points="0,0 120,0 120,24 0,73" fill="#000" />
          <polygon points="0,0 115,0 120,0 120,30 0,77" fill="#FCD116" />
          <polygon points="7,0 120,0 120,27 0,73 0,80 7,80" fill="#000" />
        </svg>
      );
    case "ug":
      return (
        <svg viewBox={v} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-label="Uganda">
          {["#000","#FCDC04","#DE3108","#000","#FCDC04","#DE3108"].map((c, i) => (
            <rect key={i} y={i * (80/6)} width="120" height={80/6 + 0.5} fill={c} />
          ))}
          <circle cx="60" cy="40" r="16" fill="#fff" />
          <ellipse cx="60" cy="37" rx="6" ry="9" fill="#808080" />
          <circle cx="60" cy="31" r="5" fill="#808080" />
          <rect x="57" y="46" width="6" height="5" fill="#808080" />
        </svg>
      );
    case "ma":
      return (
        <svg viewBox={v} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-label="Morocco">
          <rect width="120" height="80" fill="#C1272D" />
          <polygon points={star(60, 40, 13, 5.5)} fill="none" stroke="#006233" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
    case "ci":
      return (
        <svg viewBox={v} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-label="Côte d'Ivoire">
          <rect width="40" height="80" fill="#F77F00" />
          <rect x="40" width="40" height="80" fill="#fff" />
          <rect x="80" width="40" height="80" fill="#009A00" />
        </svg>
      );
    default:
      return <svg viewBox={v} width="100%" height="100%"><rect width="120" height="80" fill="#333"/></svg>;
  }
}

const FLAGS = [
  { x: 310, y: 230, size: 76, delay: 0,    code: "za", name: "South Africa", isSA: true, hub: "Pretoria & JHB Primary Hub" },
  { x: 175, y: 70,  size: 54, delay: 0.1,  code: "gh", name: "Ghana", hub: "Accra Tech Node" },
  { x: 310, y: 55,  size: 54, delay: 0.25, code: "ng", name: "Nigeria", hub: "Lagos Tech Ecosystem" },
  { x: 485, y: 65,  size: 54, delay: 0.15, code: "ke", name: "Kenya", hub: "Nairobi Silicon Savannah" },
  { x: 530, y: 195, size: 54, delay: 0.35, code: "et", name: "Ethiopia", hub: "Addis Ababa AI Center" },
  { x: 510, y: 320, size: 54, delay: 0.5,  code: "rw", name: "Rwanda", hub: "Kigali Innovation Hub" },
  { x: 415, y: 410, size: 54, delay: 0.6,  code: "tz", name: "Tanzania", hub: "Dar es Salaam Node" },
  { x: 230, y: 390, size: 54, delay: 0.7,  code: "ug", name: "Uganda", hub: "Kampala Innovation Lab" },
  { x:  85, y: 300, size: 54, delay: 0.45, code: "sn", name: "Senegal", hub: "Dakar Digital Gateway" },
  { x:  65, y: 165, size: 54, delay: 0.2,  code: "ci", name: "Côte d'Ivoire", hub: "Abidjan Tech Node" },
  { x: 380, y: 125, size: 54, delay: 0.3,  code: "eg", name: "Egypt", hub: "Cairo Smart Center" },
  { x: 170, y: 225, size: 54, delay: 0.55, code: "ma", name: "Morocco", hub: "Casablanca Nearshore" },
];

const CONNECTIONS: [number, number, string][] = [
  [0,1,"#00FF88"],[0,2,"#00FF88"],[0,3,"#00FF88"],
  [0,4,"#00FF88"],[0,5,"#00FF88"],[0,6,"#00FF88"],
  [0,7,"#00FF88"],[0,8,"#00FF88"],[0,9,"#00FF88"],
  [0,10,"#00FF88"],[0,11,"#00FF88"],
  [1,2,"#818cf8"],[1,9,"#818cf8"],[1,11,"#818cf8"],
  [2,3,"#818cf8"],[2,10,"#818cf8"],[2,11,"#818cf8"],
  [3,4,"#818cf8"],[3,10,"#818cf8"],
  [4,5,"#818cf8"],[4,10,"#818cf8"],
  [5,6,"#818cf8"],
  [6,7,"#818cf8"],
  [7,8,"#818cf8"],[7,6,"#818cf8"],
  [8,9,"#818cf8"],[8,11,"#818cf8"],
  [9,11,"#818cf8"],
  [10,3,"#a78bfa"],[10,4,"#a78bfa"],
  [1,3,"#6366f1"],[1,4,"#6366f1"],
  [2,5,"#6366f1"],[9,7,"#6366f1"],
  [8,6,"#6366f1"],[11,5,"#6366f1"],
];

const W = 590;
const H = 470;

export default function AfricanFlags() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="relative select-none w-full max-w-[590px] aspect-[590/470] mx-auto">
      {/* Ambient background glows */}
      <div
        className="absolute rounded-full blur-[90px] opacity-25 pointer-events-none"
        style={{
          width: "65%",
          height: "65%",
          left: "52%",
          top: "48%",
          background: "radial-gradient(circle, #7c3aed 0%, #1e40af 55%, transparent 100%)",
          transform: "translate(-50%,-50%)",
        }}
      />
      <div
        className="absolute rounded-full blur-[60px] opacity-20 pointer-events-none"
        style={{
          width: "40%",
          height: "40%",
          left: "53%",
          top: "49%",
          background: "radial-gradient(circle, #00FF88 0%, transparent 100%)",
          transform: "translate(-50%,-50%)",
        }}
      />

      {/* Connection Lines SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${W} ${H}`}
        style={{ overflow: "visible" }}
      >
        <defs>
          <filter id="glow-line" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {CONNECTIONS.map(([a, b, color], i) => {
          const fa = FLAGS[a];
          const fb = FLAGS[b];
          const isSALine = a === 0 || b === 0;
          const isHighlighted = hoveredIdx === a || hoveredIdx === b;
          return (
            <motion.line
              key={i}
              x1={fa.x}
              y1={fa.y}
              x2={fb.x}
              y2={fb.y}
              stroke={isHighlighted ? "#00FF88" : color}
              strokeWidth={isHighlighted ? 2 : isSALine ? 1.2 : 0.75}
              filter="url(#glow-line)"
              initial={{ opacity: 0.1 }}
              animate={{
                opacity: isHighlighted ? 0.9 : [0.15, isSALine ? 0.7 : 0.35, 0.15],
              }}
              transition={{
                duration: 2.5 + (i % 5) * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.08,
              }}
            />
          );
        })}

        {/* Pulse particles along primary hubs */}
        {CONNECTIONS.filter(([a, b]) => a === 0 || b === 0).slice(0, 10).map(([a, b], i) => {
          const fa = FLAGS[a];
          const fb = FLAGS[b];
          return (
            <motion.circle
              key={`p-${i}`}
              cx={0}
              cy={0}
              r="2.5"
              fill="#00FF88"
              filter="url(#glow-line)"
              animate={{
                opacity: [0, 1, 0],
                x: [fa.x, fb.x],
                y: [fa.y, fb.y],
              }}
              transition={{
                duration: 2.2 + i * 0.3,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.4,
              }}
            />
          );
        })}
      </svg>

      {/* Flag Node Elements positioned proportionally */}
      {FLAGS.map((flag, i) => {
        const isHovered = hoveredIdx === i;
        const leftPercent = (flag.x / W) * 100;
        const topPercent = (flag.y / H) * 100;
        const sizeRem = flag.isSA ? "clamp(3.5rem, 8vw, 4.8rem)" : "clamp(2.5rem, 6vw, 3.4rem)";

        return (
          <div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 group"
            style={{
              left: `${leftPercent}%`,
              top: `${topPercent}%`,
              zIndex: flag.isSA ? 20 : isHovered ? 30 : 10,
            }}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={() => setHoveredIdx(isHovered ? null : i)}
          >
            <motion.div
              style={{
                width: sizeRem,
                height: sizeRem,
              }}
              animate={{
                y: [0, flag.isSA ? -4 : -7, 0],
                scale: isHovered ? 1.15 : 1,
              }}
              transition={{
                y: {
                  duration: flag.isSA ? 3.8 : 3 + flag.delay * 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: flag.delay,
                },
                scale: { duration: 0.2 },
              }}
              className="relative flex items-center justify-center"
            >
              {/* Outer Glow Halo */}
              <div
                className="absolute inset-0 rounded-full transition-all duration-300"
                style={{
                  boxShadow: flag.isSA
                    ? isHovered
                      ? "0 0 35px 12px rgba(0,255,136,0.8)"
                      : "0 0 26px 8px rgba(0,255,136,0.55), 0 0 50px 10px rgba(0,255,136,0.25)"
                    : isHovered
                    ? "0 0 25px 8px rgba(0,255,136,0.7)"
                    : "0 0 14px 3px rgba(129,140,248,0.45)",
                }}
              />

              {/* Node Border Ring */}
              <div
                className={`absolute inset-[-3px] rounded-full transition-colors ${
                  flag.isSA || isHovered ? "border-2 border-[#00FF88]" : "border border-white/20"
                }`}
                style={{
                  background:
                    "radial-gradient(circle at 35% 35%, rgba(60,60,100,0.7) 0%, rgba(8,8,18,0.97) 100%)",
                }}
              />

              {/* Inner Flag SVG */}
              <div
                className="absolute inset-[3px] rounded-full overflow-hidden shadow-inner"
              >
                <FlagSVG code={flag.code} />
              </div>
            </motion.div>

            {/* South Africa Permanent Tag or Tooltip */}
            {flag.isSA && !isHovered && (
              <div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold tracking-[0.2em] whitespace-nowrap uppercase text-[#00FF88] px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-[#00FF88]/30 pointer-events-none"
                style={{ textShadow: "0 0 8px #00FF88" }}
              >
                Primary Hub
              </div>
            )}

            {/* Interactive Tooltip Card */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 rounded-lg bg-[#0F111A]/95 border border-[#00FF88]/50 shadow-xl shadow-black/80 whitespace-nowrap pointer-events-none z-50 text-center"
                >
                  <p className="text-white font-bold text-xs flex items-center justify-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-ping" />
                    {flag.name}
                  </p>
                  <p className="text-[10px] text-gray-400 font-mono">{flag.hub}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
