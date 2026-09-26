// A synthesized "ba-dum-tss" rimshot using the Web Audio API.
// No audio files, no network requests.

let audioContext = null

function getContext() {
  if (!audioContext) {
    const AudioContext = window.AudioContext || window.webkitAudioContext
    if (!AudioContext) return null
    audioContext = new AudioContext()
  }
  // Browsers start the context suspended until a user gesture.
  if (audioContext.state === 'suspended') audioContext.resume()
  return audioContext
}

// A short burst of white noise, used for the snare and cymbal.
function noiseBuffer(ctx, seconds) {
  const buffer = ctx.createBuffer(1, ctx.sampleRate * seconds, ctx.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1
  return buffer
}

// A drum hit: a pitched "thump" plus a snappy noise layer.
function drum(ctx, time, pitch) {
  const osc = ctx.createOscillator()
  const oscGain = ctx.createGain()
  osc.frequency.setValueAtTime(pitch, time)
  osc.frequency.exponentialRampToValueAtTime(pitch * 0.5, time + 0.15)
  oscGain.gain.setValueAtTime(0.6, time)
  oscGain.gain.exponentialRampToValueAtTime(0.001, time + 0.2)
  osc.connect(oscGain).connect(ctx.destination)
  osc.start(time)
  osc.stop(time + 0.2)

  const noise = ctx.createBufferSource()
  noise.buffer = noiseBuffer(ctx, 0.15)
  const filter = ctx.createBiquadFilter()
  filter.type = 'bandpass'
  filter.frequency.value = 1800
  const noiseGain = ctx.createGain()
  noiseGain.gain.setValueAtTime(0.35, time)
  noiseGain.gain.exponentialRampToValueAtTime(0.001, time + 0.12)
  noise.connect(filter).connect(noiseGain).connect(ctx.destination)
  noise.start(time)
}

// A crash cymbal: bright noise with a long fade.
function cymbal(ctx, time) {
  const noise = ctx.createBufferSource()
  noise.buffer = noiseBuffer(ctx, 1.2)
  const filter = ctx.createBiquadFilter()
  filter.type = 'highpass'
  filter.frequency.value = 7000
  const gain = ctx.createGain()
  gain.gain.setValueAtTime(0.4, time)
  gain.gain.exponentialRampToValueAtTime(0.001, time + 1.1)
  noise.connect(filter).connect(gain).connect(ctx.destination)
  noise.start(time)
}

export function playRimshot() {
  const ctx = getContext()
  if (!ctx) return
  const now = ctx.currentTime + 0.02
  drum(ctx, now, 220) // ba
  drum(ctx, now + 0.16, 160) // dum
  cymbal(ctx, now + 0.34) // tss
}

// Call during a click so the browser allows audio later (the rimshot
// plays after a timeout, which some browsers don't count as a gesture).
export function unlockAudio() {
  getContext()
}
