import { useEffect, useRef, useState } from 'react'
import PhotoUpload from './components/PhotoUpload.jsx'
import RoastResult from './components/RoastResult.jsx'
import { roasts, loadingMessages, pickRandomIndex } from './roasts.js'
import { playRimshot, unlockAudio } from './sound.js'

const LOADING_DELAY_MS = 1600

export default function App() {
  const [previewUrl, setPreviewUrl] = useState(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'done'
  const [roastIndex, setRoastIndex] = useState(-1)
  const [loadingMessage, setLoadingMessage] = useState('')
  const [plantName, setPlantName] = useState('')
  // The name at the moment of roasting, so typing doesn't rewrite a shown roast.
  const [roastedName, setRoastedName] = useState('')
  const timerRef = useRef(null)
  const resultRef = useRef(null)
  const [soundOn, setSoundOn] = useState(
    () => localStorage.getItem('roast-sound') !== 'off',
  )

  function toggleSound() {
    const next = !soundOn
    setSoundOn(next)
    localStorage.setItem('roast-sound', next ? 'on' : 'off')
  }

  // Clean up the object URL and any pending timer.
  useEffect(() => () => previewUrl && URL.revokeObjectURL(previewUrl), [previewUrl])
  useEffect(() => () => clearTimeout(timerRef.current), [])

  function handleFileSelected(file) {
    clearTimeout(timerRef.current)
    setPreviewUrl(URL.createObjectURL(file))
    setStatus('idle')
    setRoastIndex(-1)
  }

  function roast() {
    clearTimeout(timerRef.current)
    if (soundOn) unlockAudio()
    setLoadingMessage(loadingMessages[pickRandomIndex(loadingMessages.length)])
    setStatus('loading')
    setRoastedName(plantName.trim())
    // On mobile the result sits below the upload area, so bring it into view.
    resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    timerRef.current = setTimeout(() => {
      setRoastIndex((prev) => pickRandomIndex(roasts.length, prev))
      setStatus('done')
      if (soundOn) playRimshot()
    }, LOADING_DELAY_MS)
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 py-8 sm:py-12">
      <header className="relative text-center">
        <button
          type="button"
          onClick={toggleSound}
          aria-pressed={soundOn}
          aria-label={soundOn ? 'Mute sound effects' : 'Turn on sound effects'}
          title={soundOn ? 'Sound on' : 'Sound off'}
          className="mb-2 ml-auto block rounded-full sm:absolute sm:right-0 sm:top-0 sm:mb-0 border-2 border-ink/20 bg-white/80 px-3 py-1 text-lg transition-colors hover:border-ink"
        >
          {soundOn ? '🔊' : '🔇'}
        </button>
        <h1 className="font-display text-4xl font-bold text-leaf sm:text-5xl">
          Roast My Plant <span aria-hidden="true">🔥</span>
        </h1>
        <p className="mt-2 text-ink/70">
          Upload your houseplant. Get humbled. Learn something.
        </p>
      </header>

      <main className="mt-8 grid flex-1 items-start gap-8 md:grid-cols-2">
        <section className="flex flex-col gap-4">
          <PhotoUpload previewUrl={previewUrl} onFileSelected={handleFileSelected} />
          <label className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-ink/70">
              Plant's name <span className="font-normal">(optional)</span>
            </span>
            <input
              type="text"
              value={plantName}
              onChange={(e) => setPlantName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && previewUrl && status !== 'loading') roast()
              }}
              maxLength={30}
              placeholder="e.g. Gerald"
              className="rounded-2xl border-2 border-leaf/40 bg-white/80 px-4 py-2 text-lg focus:border-leaf focus:outline-none focus-visible:ring-4 focus-visible:ring-leaf-light/50"
            />
          </label>
          <button
            type="button"
            onClick={roast}
            disabled={!previewUrl || status === 'loading'}
            className="rounded-full border-4 border-ink bg-pot px-6 py-3 font-display text-xl font-bold text-white shadow-[4px_4px_0_0_#2f3a2c] transition-all hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
          >
            {status === 'loading'
              ? 'Roasting…'
              : status === 'done'
                ? 'Roast again 🔁'
                : 'Roast it 🔥'}
          </button>
        </section>

        <section ref={resultRef} className="scroll-mt-4">
          <RoastResult
            status={status}
            loadingMessage={loadingMessage}
            roast={roasts[roastIndex]}
            plantName={roastedName}
          />
        </section>
      </main>

      <footer className="mt-10 text-center text-xs text-ink/50">
        No plants were harmed in the making of this site.
      </footer>
    </div>
  )
}
