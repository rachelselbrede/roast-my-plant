// A cute cartoon plant in a pot. `mood` changes the face.
// mood: 'idle' | 'thinking' | 'smug'
export default function Mascot({ mood = 'idle', className = '' }) {
  return (
    <svg
      viewBox="0 0 160 200"
      className={className}
      role="img"
      aria-label="Cartoon plant mascot"
    >
      {/* Leaves */}
      <g className={mood === 'thinking' ? 'animate-wiggle' : ''}>
        <path d="M80 95 C55 90 30 65 38 30 C62 38 80 60 80 95 Z" fill="#6aa84f" />
        <path d="M80 95 C105 90 130 65 122 30 C98 38 80 60 80 95 Z" fill="#81c262" />
        <path d="M80 95 C72 70 70 40 80 10 C90 40 88 70 80 95 Z" fill="#4f8a3c" />
        <path d="M80 92 L80 30" stroke="#3d6e2e" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Pot */}
      <path d="M36 110 H124 L112 190 H48 Z" fill="#e07a5f" />
      <rect x="28" y="96" width="104" height="22" rx="8" fill="#c8664d" />

      {/* Face */}
      {mood === 'thinking' ? (
        <>
          {/* Eyes looking up */}
          <circle cx="62" cy="140" r="7" fill="#fff" />
          <circle cx="98" cy="140" r="7" fill="#fff" />
          <circle cx="64" cy="137" r="3.5" fill="#2f3a2c" />
          <circle cx="100" cy="137" r="3.5" fill="#2f3a2c" />
          <path d="M72 164 H88" stroke="#2f3a2c" strokeWidth="3" strokeLinecap="round" />
        </>
      ) : mood === 'smug' ? (
        <>
          {/* Half-lidded smug eyes */}
          <path d="M54 140 Q62 134 70 140" stroke="#2f3a2c" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M90 140 Q98 134 106 140" stroke="#2f3a2c" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M66 158 Q84 172 98 156" stroke="#2f3a2c" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          {/* Raised eyebrow */}
          <path d="M90 128 L106 124" stroke="#2f3a2c" strokeWidth="3" strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx="62" cy="140" r="5" fill="#2f3a2c" />
          <circle cx="98" cy="140" r="5" fill="#2f3a2c" />
          <path d="M68 156 Q80 168 92 156" stroke="#2f3a2c" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        </>
      )}

      {/* Blush */}
      <ellipse cx="50" cy="154" rx="7" ry="4" fill="#f4a3a3" opacity="0.7" />
      <ellipse cx="110" cy="154" rx="7" ry="4" fill="#f4a3a3" opacity="0.7" />
    </svg>
  )
}
