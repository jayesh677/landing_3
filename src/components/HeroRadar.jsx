import React, { useState } from 'react';

export default function HeroRadar() {
  const [hoveredNode, setHoveredNode] = useState(null);

  return (
    <div className="relative w-full h-full select-none flex items-center justify-center">
      {/* Background Ambient Glow */}
      <div 
        className="absolute inset-[-10%] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0, 200, 255, 0.08) 0%, transparent 70%)'
        }}
      />

      <svg
        viewBox="0 0 560 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[560px] 2xl:max-w-[640px] 3xl:max-w-[760px] 4k:max-w-[920px] h-auto drop-shadow-[0_0_50px_rgba(0,200,255,0.05)]"
      >
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00c8ff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#00c8ff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00c8ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00c8ff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="threatGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff3b5c" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ff3b5c" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#103058" stopOpacity="0.88" />
            <stop offset="50%" stopColor="#0c2240" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#061528" stopOpacity="0.96" />
          </linearGradient>
          <linearGradient id="shieldBorder" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#67e8f9" stopOpacity="1" />
            <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.7" />
          </linearGradient>
          <radialGradient id="shieldInnerGlow" cx="50%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00c8ff" stopOpacity="0.05" />
          </radialGradient>
          <filter id="blur4">
            <feGaussianBlur stdDeviation="4" />
          </filter>
          <filter id="blur8">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        {/* Central Ambient Ellipse */}
        <ellipse cx="280" cy="260" rx="220" ry="200" fill="url(#coreGlow)" />

        {/* Radial Grid Lines (Radar Angles) */}
        <line x1="480" y1="260" x2="280" y2="260" stroke="#00c8ff" strokeOpacity="0.06" strokeWidth="1" />
        <line x1="380" y1="433.2" x2="280" y2="260" stroke="#00c8ff" strokeOpacity="0.06" strokeWidth="1" />
        <line x1="180" y1="433.2" x2="280" y2="260" stroke="#00c8ff" strokeOpacity="0.06" strokeWidth="1" />
        <line x1="80" y1="260" x2="280" y2="260" stroke="#00c8ff" strokeOpacity="0.06" strokeWidth="1" />
        <line x1="180" y1="86.8" x2="280" y2="260" stroke="#00c8ff" strokeOpacity="0.06" strokeWidth="1" />
        <line x1="380" y1="86.8" x2="280" y2="260" stroke="#00c8ff" strokeOpacity="0.06" strokeWidth="1" />

        {/* Concentric Static Circles */}
        <circle cx="280" cy="260" r="80" stroke="#00c8ff" strokeOpacity="0.08" strokeWidth="1" fill="none" />
        <circle cx="280" cy="260" r="140" stroke="#00c8ff" strokeOpacity="0.06" strokeWidth="1" fill="none" />
        <circle cx="280" cy="260" r="200" stroke="#00c8ff" strokeOpacity="0.04" strokeWidth="1" fill="none" />

        {/* Expanding Pulse Sonar Rings */}
        <circle cx="280" cy="260" r="90" stroke="#00c8ff" strokeOpacity="0.3" strokeWidth="1.5" fill="none" className="ring-anim" />
        <circle cx="280" cy="260" r="90" stroke="#00c8ff" strokeOpacity="0.2" strokeWidth="1" fill="none" className="ring-anim" style={{ animationDelay: '-0.83s' }} />
        <circle cx="280" cy="260" r="90" stroke="#00c8ff" strokeOpacity="0.15" strokeWidth="1" fill="none" className="ring-anim" style={{ animationDelay: '-1.67s' }} />

        {/* Animated Threat Attack Trajectories (Red Curves) */}
        <path d="M60 80 Q180 160 280 260" stroke="#ff3b5c" strokeOpacity="0.65" strokeWidth="1.5" fill="none" className="threat-path" />
        <path d="M500 100 Q380 180 280 260" stroke="#ff3b5c" strokeOpacity="0.65" strokeWidth="1.5" fill="none" className="threat-path" style={{ animationDelay: '-1s' }} />
        <path d="M420 460 Q340 360 280 260" stroke="#ff3b5c" strokeOpacity="0.65" strokeWidth="1.5" fill="none" className="threat-path" style={{ animationDelay: '-2s' }} />

        {/* Defense Center Shield Icon (Lighter Glass Aesthetic) */}
        <path
          d="M280 195 L320 210 L320 255 Q320 285 280 300 Q240 285 240 255 L240 210 Z"
          fill="url(#shieldGrad)"
          stroke="url(#shieldBorder)"
          strokeWidth="1.6"
          className="filter drop-shadow-[0_0_16px_rgba(56,189,248,0.25)]"
        />
        <path
          d="M280 205 L313 218 L313 255 Q313 279 280 292 Q247 279 247 255 L247 218 Z"
          fill="url(#shieldInnerGlow)"
          stroke="#67e8f9"
          strokeWidth="0.8"
          strokeOpacity="0.55"
        />
        <text
          x="280"
          y="252"
          textAnchor="middle"
          dominantBaseline="central"
          fill="#e0f2fe"
          fontSize="11"
          fontWeight="800"
          fontFamily="JetBrains Mono, monospace"
          letterSpacing="0.04em"
          className="select-none filter drop-shadow-[0_0_10px_rgba(103,232,249,0.7)]"
        >
          EDR/XDR
        </text>

        {/* Network Connection Lines */}
        <line x1="120" y1="140" x2="280" y2="260" stroke="#00c8ff" strokeOpacity="0.1" strokeWidth="1" />
        <line x1="440" y1="130" x2="280" y2="260" stroke="#00c8ff" strokeOpacity="0.1" strokeWidth="1" />
        <line x1="160" y1="380" x2="280" y2="260" stroke="#00c8ff" strokeOpacity="0.1" strokeWidth="1" />
        <line x1="430" y1="390" x2="280" y2="260" stroke="#00c8ff" strokeOpacity="0.1" strokeWidth="1" />
        <line x1="80" y1="260" x2="280" y2="260" stroke="#00c8ff" strokeOpacity="0.1" strokeWidth="1" />
        <line x1="490" y1="260" x2="280" y2="260" stroke="#00c8ff" strokeOpacity="0.1" strokeWidth="1" />
        <line x1="280" y1="60" x2="280" y2="260" stroke="#00c8ff" strokeOpacity="0.1" strokeWidth="1" />
        <line x1="280" y1="460" x2="280" y2="260" stroke="#00c8ff" strokeOpacity="0.1" strokeWidth="1" />
        <line x1="120" y1="140" x2="80" y2="260" stroke="#00c8ff" strokeOpacity="0.08" strokeWidth="1" />
        <line x1="440" y1="130" x2="490" y2="260" stroke="#00c8ff" strokeOpacity="0.08" strokeWidth="1" />
        <line x1="160" y1="380" x2="80" y2="260" stroke="#00c8ff" strokeOpacity="0.08" strokeWidth="1" />
        <line x1="430" y1="390" x2="490" y2="260" stroke="#00c8ff" strokeOpacity="0.08" strokeWidth="1" />

        {/* Network Floating Nodes (Glow + Solid Center) */}
        <g className="node-dot cursor-pointer" style={{ animationDelay: '0s' }} onMouseEnter={() => setHoveredNode('NODE_04')} onMouseLeave={() => setHoveredNode(null)}>
          <circle cx="120" cy="140" r="14" fill="url(#nodeGlow)" />
          <circle cx="120" cy="140" r="5" fill="#00c8ff" />
        </g>
        <g className="node-dot cursor-pointer" style={{ animationDelay: '-0.6s' }} onMouseEnter={() => setHoveredNode('NODE_07')} onMouseLeave={() => setHoveredNode(null)}>
          <circle cx="440" cy="130" r="12" fill="url(#nodeGlow)" />
          <circle cx="440" cy="130" r="4" fill="#00c8ff" />
        </g>
        <g className="node-dot" style={{ animationDelay: '-1.2s' }}>
          <circle cx="160" cy="380" r="14" fill="url(#nodeGlow)" />
          <circle cx="160" cy="380" r="5" fill="#00c8ff" />
        </g>
        <g className="node-dot" style={{ animationDelay: '-1.8s' }}>
          <circle cx="430" cy="390" r="12" fill="url(#nodeGlow)" />
          <circle cx="430" cy="390" r="4" fill="#00c8ff" />
        </g>
        <g className="node-dot" style={{ animationDelay: '-2.4s' }}>
          <circle cx="80" cy="260" r="10" fill="url(#nodeGlow)" />
          <circle cx="80" cy="260" r="3" fill="#00c8ff" />
        </g>
        <g className="node-dot" style={{ animationDelay: '-3.0s' }}>
          <circle cx="490" cy="260" r="10" fill="url(#nodeGlow)" />
          <circle cx="490" cy="260" r="3" fill="#00c8ff" />
        </g>
        <g className="node-dot" style={{ animationDelay: '-3.6s' }}>
          <circle cx="280" cy="60" r="12" fill="url(#nodeGlow)" />
          <circle cx="280" cy="60" r="4" fill="#00c8ff" />
        </g>
        <g className="node-dot" style={{ animationDelay: '-4.2s' }}>
          <circle cx="280" cy="460" r="12" fill="url(#nodeGlow)" />
          <circle cx="280" cy="460" r="4" fill="#00c8ff" />
        </g>

        {/* Threat Nodes (3 Active Threats Surrounding Shield) */}
        {/* Threat 01 - Top Left */}
        <g>
          <circle cx="60" cy="80" r="18" fill="url(#threatGlow)" />
          <circle cx="60" cy="80" r="10" fill="none" stroke="#ff3b5c" strokeWidth="1.5" strokeOpacity="0.85" />
          <circle cx="60" cy="80" r="4" fill="#ff3b5c" className="animate-pulse-dot" />
        </g>

        {/* Threat 02 - Top Right */}
        <g>
          <circle cx="500" cy="100" r="18" fill="url(#threatGlow)" />
          <circle cx="500" cy="100" r="10" fill="none" stroke="#ff3b5c" strokeWidth="1.5" strokeOpacity="0.85" />
          <circle cx="500" cy="100" r="4" fill="#ff3b5c" className="animate-pulse-dot" style={{ animationDelay: '-0.7s' }} />
        </g>

        {/* Threat 03 - Bottom Right */}
        <g>
          <circle cx="420" cy="460" r="18" fill="url(#threatGlow)" />
          <circle cx="420" cy="460" r="10" fill="none" stroke="#ff3b5c" strokeWidth="1.5" strokeOpacity="0.85" />
          <circle cx="420" cy="460" r="4" fill="#ff3b5c" className="animate-pulse-dot" style={{ animationDelay: '-1.4s' }} />
        </g>

        {/* Monospace Tactical Labels */}
        <text x="100" y="135" fill="#00c8ff" fillOpacity="0.7" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="2">
          NODE_04
        </text>
        <text x="440" y="150" fill="#00c8ff" fillOpacity="0.7" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="2">
          NODE_07
        </text>
        <text x="25" y="65" fill="#ff3b5c" fillOpacity="0.9" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="2" fontWeight="700">
          THREAT_01
        </text>
        <text x="460" y="85" fill="#ff3b5c" fillOpacity="0.9" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="2" fontWeight="700">
          THREAT_02
        </text>
        <text x="375" y="485" fill="#ff3b5c" fillOpacity="0.9" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="2" fontWeight="700">
          THREAT_03
        </text>

        {/* Continuous Laser Radar Scanline */}
        <line
          x1="0"
          y1="0"
          x2="560"
          y2="0"
          stroke="#00c8ff"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          className="scan-line"
        />
      </svg>
    </div>
  );
}
