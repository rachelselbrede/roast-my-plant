import BurnMeter from './BurnMeter.jsx'
import Mascot from './Mascot.jsx'

// The mascot + speech bubble. Shows a loading message, the roast, or a prompt.
export default function RoastResult({ status, loadingMessage, roast }) {
  const mood = status === 'loading' ? 'thinking' : status === 'done' ? 'smug' : 'idle'

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Speech bubble */}
      <div
        key={status === 'done' ? roast.roast : status}
        className="animate-pop-in relative w-full rounded-3xl border-4 border-ink bg-white p-5 shadow-[6px_6px_0_0_#2f3a2c]"
        aria-live="polite"
      >
        {status === 'loading' && (
          <p className="font-display text-lg italic text-ink/80">{loadingMessage}</p>
        )}
        {status === 'idle' && (
          <p className="font-display text-lg">
            Go on, show me your plant. I promise to be <em>brutally</em> honest.
          </p>
        )}
        {status === 'done' && (
          <>
            <p className="text-xs font-bold uppercase tracking-wider text-pot">
              Diagnosis: {roast.problem}
            </p>
            <p className="mt-1 font-display text-xl leading-snug">"{roast.roast}"</p>
            <BurnMeter level={roast.burn} />
          </>
        )}

        {/* Bubble tail pointing down at the mascot */}
        <div className="absolute -bottom-[18px] left-1/2 h-8 w-8 -translate-x-1/2 rotate-45 border-b-4 border-r-4 border-ink bg-white" />
      </div>

      <Mascot mood={mood} className="h-40 w-32 drop-shadow-md" />

      {/* Care tip, visually separated from the joke */}
      {status === 'done' && (
        <div className="animate-pop-in w-full rounded-2xl border-2 border-leaf bg-leaf-light/20 p-4">
          <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-leaf">
            <span aria-hidden="true">🌿</span> Real care tip
          </p>
          <p className="mt-1">{roast.tip}</p>
        </div>
      )}
    </div>
  )
}
