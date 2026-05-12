// Animated voice bars — mimics the coloured oval waveform in the reference
const BARS = [
  { color: '#3CC84A', delay: '0ms',   height: 56 },
  { color: '#F87171', delay: '120ms', height: 72 },
  { color: '#FBBF24', delay: '240ms', height: 64 },
  { color: '#3CC84A', delay: '360ms', height: 80 },
  { color: '#60A5FA', delay: '80ms',  height: 56 },
  { color: '#F87171', delay: '200ms', height: 68 },
  { color: '#FBBF24', delay: '320ms', height: 60 },
  { color: '#3CC84A', delay: '440ms', height: 72 },
]

export default function VoiceAnimation() {
  return (
    <div className="flex items-center justify-center gap-2 h-20 my-6" aria-hidden>
      {BARS.map((bar, i) => (
        <span
          key={i}
          className="voice-bar rounded-full inline-block"
          style={{
            backgroundColor: bar.color,
            width: 18,
            height: bar.height,
            animationDuration: `${700 + i * 60}ms`,
            animationDelay: bar.delay,
          }}
        />
      ))}
    </div>
  )
}
