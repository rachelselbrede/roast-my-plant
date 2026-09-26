import { burnLabels } from '../roasts.js'

const MAX_BURN = 5

// Row of flames showing how badly the plant got roasted.
export default function BurnMeter({ level }) {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 border-t-2 border-dashed border-ink/15 pt-3">
      <span className="text-xs font-bold uppercase tracking-wider text-ink/60">
        Burn meter
      </span>
      <span
        className="flex gap-0.5 text-xl"
        role="img"
        aria-label={`Burn level ${level} out of ${MAX_BURN}`}
      >
        {Array.from({ length: MAX_BURN }, (_, i) => (
          <span
            key={i}
            className={i < level ? 'animate-flame' : 'opacity-20 grayscale'}
            style={i < level ? { animationDelay: `${i * 120}ms` } : undefined}
          >
            🔥
          </span>
        ))}
      </span>
      <span className="font-display font-semibold text-pot">
        {level}/{MAX_BURN} · {burnLabels[level]}
      </span>
    </div>
  )
}
