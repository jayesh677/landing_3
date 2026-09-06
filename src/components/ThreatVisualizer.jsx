import React from 'react';

export default function ThreatVisualizer({ activeStep }) {
  // Step 0: DETECT (Threat enters from the RIGHT side, moving leftward)
  // Step 1: UNDERSTAND / INVESTIGATE (Attack chain mapped as threat travels left toward core)
  // Step 2: RESPOND (Countermeasures deploy from left defense hub to intercept threat)
  // Step 3: CONTAIN (Threat is neutralized & quarantined at the left perimeter)

  return (
    <div className="w-full flex items-center justify-center select-none">
      <div className="relative w-full max-w-[500px] h-[460px] flex items-center justify-center">
        {/* Ambient Glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-700"
          style={{
            background:
              activeStep === 3
                ? 'radial-gradient(circle at 45% 50%, rgba(0, 229, 160, 0.1) 0%, transparent 70%)'
                : 'radial-gradient(circle at 45% 50%, rgba(0, 200, 255, 0.1) 0%, transparent 70%)',
          }}
        />

        <svg
          viewBox="0 0 500 440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full max-h-[440px] drop-shadow-[0_0_40px_rgba(0,200,255,0.06)]"
        >
          <defs>
            <radialGradient id="visCoreGlow" cx="50%" cy="50%" r="50%">
              <stop
                offset="0%"
                stopColor={activeStep === 3 ? '#00e5a0' : '#00c8ff'}
                stopOpacity={activeStep === 2 ? 0.35 : 0.2}
              />
              <stop offset="100%" stopColor="#00c8ff" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="threatGlowRight" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ff3b5c" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#ff3b5c" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="containmentGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00e5a0" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#00e5a0" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Central Defense Zone Ellipse on Left-Center */}
          <ellipse cx="220" cy="220" rx="190" ry="170" fill="url(#visCoreGlow)" />

          {/* Defense Concentric Grid Rings */}
          <circle cx="220" cy="220" r="170" stroke="#00c8ff" strokeOpacity="0.06" strokeWidth="1" fill="none" />
          <circle cx="220" cy="220" r="125" stroke="#00c8ff" strokeOpacity="0.1" strokeWidth="1" fill="none" />
          <circle cx="220" cy="220" r="75" stroke="#00c8ff" strokeOpacity="0.14" strokeWidth="1" fill="none" />

          {/* Radial Defense Coordinate Lines */}
          <line x1="50" y1="220" x2="390" y2="220" stroke="#00c8ff" strokeOpacity="0.06" strokeWidth="1" />
          <line x1="220" y1="50" x2="220" y2="390" stroke="#00c8ff" strokeOpacity="0.06" strokeWidth="1" />
          <line x1="100" y1="100" x2="340" y2="340" stroke="#00c8ff" strokeOpacity="0.04" strokeWidth="1" />
          <line x1="100" y1="340" x2="340" y2="100" stroke="#00c8ff" strokeOpacity="0.04" strokeWidth="1" />

          {/* Network Nodes with Interconnects */}
          <g>
            {/* Left Defense Node */}
            <circle cx="100" cy="160" r="5" fill="#00c8ff" className="node-dot" />
            <line x1="100" y1="160" x2="220" y2="220" stroke="#00c8ff" strokeOpacity="0.15" strokeWidth="1" />
            <text x="75" y="150" fill="#00c8ff" fillOpacity="0.5" fontSize="8" fontFamily="JetBrains Mono, monospace">NODE_01</text>

            {/* Bottom Defense Node */}
            <circle cx="140" cy="320" r="5" fill="#00c8ff" className="node-dot" style={{ animationDelay: '-1s' }} />
            <line x1="140" y1="320" x2="220" y2="220" stroke="#00c8ff" strokeOpacity="0.15" strokeWidth="1" />

            {/* Top Node */}
            <circle cx="270" cy="90" r="5" fill="#00c8ff" className="node-dot" style={{ animationDelay: '-2s' }} />
            <line x1="270" y1="90" x2="220" y2="220" stroke="#00c8ff" strokeOpacity="0.15" strokeWidth="1" />

            {/* Inbound Perimeter Node (Right) */}
            <circle cx="360" cy="270" r="5" fill="#00c8ff" className="node-dot" style={{ animationDelay: '-1.5s' }} />
            <line x1="360" y1="270" x2="220" y2="220" stroke="#00c8ff" strokeOpacity="0.15" strokeWidth="1" />
            <text x="365" y="285" fill="#00c8ff" fillOpacity="0.5" fontSize="8" fontFamily="JetBrains Mono, monospace">NODE_07</text>
          </g>

          {/* ============================================================ */}
          {/* DIRECTIONAL MOTION: RIGHT -> LEFT ANIMATION STATES           */}
          {/* ============================================================ */}

          {/* PHASE 01: Threat enters from the far RIGHT moving LEFT - NO SHIELD */}
          {activeStep === 0 && (
            <g className="animate-fade-up">
              {/* Threat Origin (Right: x:420, y:120) */}
              <circle cx="420" cy="120" r="18" fill="url(#threatGlowRight)" />
              <circle cx="420" cy="120" r="8" fill="none" stroke="#ff3b5c" strokeWidth="1.8" className="ring-anim" />
              <circle cx="420" cy="120" r="4" fill="#ff3b5c" />

              {/* Trajectory vector pointing LEFTWARD */}
              <path
                d="M420 120 Q340 140 280 180"
                stroke="#ff3b5c"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5 3"
                className="threat-path"
              />

              {/* Directional Inbound Arrowhead moving LEFT */}
              <polygon points="280,180 292,172 290,185" fill="#ff3b5c" />

              {/* Tactical Status Tag */}
              <text x="420" y="95" fill="#ff3b5c" fontSize="9" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontWeight="bold" letterSpacing="1.5">
                INBOUND_THREAT [RIGHT]
              </text>
              <text x="220" y="320" fill="#00c8ff" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="2" fillOpacity="0.7">
                DEFENSE_GRID: SCANNING_EAST_PERIMETER
              </text>
            </g>
          )}

          {/* PHASE 02: Threat travels LEFT towards center, attack chain mapped - NO SHIELD */}
          {activeStep === 1 && (
            <g className="animate-fade-up">
              {/* Threat mid-flight at x:330, y:170 moving LEFT */}
              <circle cx="330" cy="170" r="16" fill="url(#threatGlowRight)" />
              <circle cx="330" cy="170" r="6" fill="#ff3b5c" />

              {/* Multi-hop attack chain traced from RIGHT to LEFT */}
              <path
                d="M430 110 L330 170 L220 220"
                stroke="#ff3b5c"
                strokeWidth="2.2"
                fill="none"
                strokeDasharray="6 3"
                className="threat-path"
              />

              {/* Direction indicator pulse */}
              <circle cx="330" cy="170" r="22" stroke="#ff3b5c" strokeWidth="1" fill="none" className="ring-anim" />

              <text x="330" y="145" fill="#ff3b5c" fontSize="9" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontWeight="bold" letterSpacing="1">
                ATTACK_PATH_IDENTIFIED ← [TRAVELING_LEFT]
              </text>
              <text x="220" y="320" fill="#00c8ff" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="2" fillOpacity="0.8">
                AUTONOMOUS_STORYLINE: MAPPED
              </text>
            </g>
          )}

          {/* PHASE 03: Security countermeasures deploy from LEFT to intercept threat - NO SHIELD */}
          {activeStep === 2 && (
            <g className="animate-fade-up">
              {/* Defense Barrier Expanding from Center-Left towards Right */}
              <circle
                cx="220"
                cy="220"
                r="65"
                stroke="#00c8ff"
                strokeWidth="2"
                fill="rgba(0, 200, 255, 0.12)"
                className="ring-anim"
              />

              {/* Intercepted Threat at x:275, y:200 */}
              <circle cx="275" cy="200" r="14" stroke="#ff3b5c" strokeWidth="1.5" fill="none" className="ring-anim" />
              <circle cx="275" cy="200" r="5" fill="#ff3b5c" />

              {/* Countermeasure laser lock */}
              <line x1="220" y1="220" x2="275" y2="200" stroke="#00c8ff" strokeWidth="2.5" strokeLinecap="round" />

              <text x="275" y="175" fill="#00c8ff" fontSize="9" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontWeight="bold" letterSpacing="1">
                INTERCEPTION_ACTIVE ←
              </text>
              <text x="220" y="320" fill="#00c8ff" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="2">
                AUTOMATED_ISOLATION_ENFORCED
              </text>
            </g>
          )}

          {/* PHASE 04: Threat completely isolated & neutralized on the LEFT - SHIELD ENTRANCE PAYOFF */}
          {activeStep === 3 && (
            <g className="animate-fade-up">
              {/* Secure Emerald Green Quarantine Ring on Left Defense Hub */}
              <circle cx="220" cy="220" r="68" fill="url(#containmentGlow)" />
              <circle cx="220" cy="220" r="68" stroke="#00e5a0" strokeWidth="2.2" fill="rgba(0, 229, 160, 0.06)" />

              {/* Protective Central Defense Shield - Appears ONLY in Stage 04 */}
              <g style={{ filter: 'drop-shadow(0 0 16px rgba(0,229,160,0.6))' }}>
                <path
                  d="M220 185 L252 198 L252 235 Q252 260 220 272 Q188 260 188 235 L188 198 Z"
                  fill="#040b14"
                  stroke="#00e5a0"
                  strokeWidth="2"
                  strokeOpacity="1"
                />
                <path
                  d="M210 226 L217 234 L232 218"
                  stroke="#00e5a0"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>

              {/* Neutralized Threat inside quarantine */}
              <circle cx="220" cy="220" r="10" stroke="#00e5a0" strokeWidth="1.5" fill="none" className="ring-anim" />

              <text x="220" y="145" fill="#00e5a0" fontSize="10" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontWeight="bold" letterSpacing="1.5">
                THREAT_CONTAINED // ZERO_IMPACT
              </text>
              <text x="220" y="320" fill="#00e5a0" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="2">
                PERIMETER_SECURED // 100% BLOCKED
              </text>
            </g>
          )}

          {/* Laser Scanline */}
          <line
            x1="50"
            y1="0"
            x2="450"
            y2="0"
            stroke={activeStep === 3 ? '#00e5a0' : '#00c8ff'}
            strokeWidth="1.2"
            strokeOpacity="0.3"
            className="scan-line"
          />
        </svg>
      </div>
    </div>
  );
}
