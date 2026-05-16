import VoiceAnimation from './VoiceAnimation'

function PhoneFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative rounded-[2.8rem] bg-black overflow-hidden phone-shadow ${className}`}
      style={{ border: '8px solid #1a1a1a' }}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-10" />
      <div className="w-full h-full overflow-hidden rounded-[2.2rem] bg-white">
        {children}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="pt-24 pb-0 overflow-hidden bg-white">
      {/* Text content */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Rating badge */}
        <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 mb-8" style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}>
          <span className="text-base font-semibold text-[#0D0F1A]">App Store</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-[#0D0F1A]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-base font-bold text-[#0D0F1A]">4.8</span>
        </div>

        {/* Headline */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-[#0D0F1A] leading-tight tracking-tight mb-4">
          Meet <span className="text-[#3CC84A]">speako.</span>
        </h1>

        {/* Voice animation */}
        <VoiceAnimation />

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-gray-500 max-w-md mx-auto mb-8">
          AI-powered drills. Real-time feedback.<br />No fluff. Just results.
        </p>

        {/* CTA */}
        <a
          href="#"
          className="inline-flex items-center gap-2.5 bg-[#0D0F1A] text-white px-7 py-4 rounded-full text-base font-semibold hover:bg-gray-800 transition-colors shadow-lg"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Download on the App Store
        </a>
      </div>

      {/* Phone mockups */}
      <div className="relative mt-16 mx-auto" style={{ height: 560, width: '100%', maxWidth: 900 }}>

        {/* Left phone — overlaps center from left */}
        <div
          className="hidden md:block absolute"
          style={{
            left: '50%',
            marginLeft: -340,
            bottom: 0,
            transform: 'rotate(6deg)',
            transformOrigin: 'bottom center',
            zIndex: 1,
          }}
        >
          <PhoneFrame className="w-52">
            <img
              src="/screenshots/image1.jpg"
              alt="Speako drill screen"
              className="w-full object-cover"
              style={{ height: 420 }}
            />
          </PhoneFrame>
        </div>

        {/* Center — video, on top */}
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-0"
          style={{ zIndex: 2 }}
        >
          <video
            src="/speako-content/speako-demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-64 md:w-72 object-cover rounded-3xl phone-shadow"
            style={{ height: 540 }}
          />
        </div>

        {/* Right phone — overlaps center from right */}
        <div
          className="hidden md:block absolute"
          style={{
            left: '50%',
            marginLeft: 140,
            bottom: 0,
            transform: 'rotate(-6deg)',
            transformOrigin: 'bottom center',
            zIndex: 1,
          }}
        >
          <PhoneFrame className="w-52">
            <img
              src="/screenshots/image2.jpg"
              alt="Speako progress screen"
              className="w-full object-cover"
              style={{ height: 420 }}
            />
          </PhoneFrame>
        </div>

      </div>
    </section>
  )
}
