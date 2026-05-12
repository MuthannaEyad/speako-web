const REVIEWS = [
  {
    username: 'jakemcallister',
    review: "I used to dread presenting at work. After two weeks with Speako I gave a 10-minute talk to my whole team and actually enjoyed it. The AI feedback is brutally honest in the best way possible.",
  },
  {
    username: 'priya_speaks',
    review: "The 25-second drill format is genius. It's short enough that I actually do it every day. My filler word count went from embarrassing to basically zero in a month. This app is the real deal.",
  },
  {
    username: 'marcot99',
    review: "I had a job interview coming up and started using Speako 10 days before. Got the job. The 'Tell Me About Yourself' drill alone is worth downloading the app. Couldn't recommend it more.",
  },
  {
    username: 'sarahvee_',
    review: "I've tried other speaking apps and they all feel like boring exercises. Speako actually feels like a tough coach who wants you to improve. The voice feedback after each drill is what makes it special.",
  },
  {
    username: 'devonkwrites',
    review: "Was always the quiet one in meetings. Three weeks in and I'm now the one speaking up and pitching ideas. My manager literally asked what changed. Worth every penny.",
  },
  {
    username: 'nourelhuda',
    review: "English is my second language and public speaking has always terrified me. Speako helped me work on my pacing and clarity more than any class I've taken. My confidence is at an all-time high.",
  },
]

function StarIcon() {
  return (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function AppStoreIcon() {
  return (
    <svg className="w-5 h-5 text-[#1a8cff]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#0D0F1A] leading-tight">
            Join 50,000+ speakers<br />getting better with Speako
          </h2>
        </div>
        <p className="text-center text-gray-500 text-lg mb-14">
          90% of users feel noticeably more confident after just <strong className="text-[#0D0F1A]">2 weeks</strong>
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <div key={r.username} className="bg-[#F4F6F8] rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#0D0F1A] text-base">{r.username}</span>
                  <AppStoreIcon />
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{r.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
