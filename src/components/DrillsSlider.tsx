interface Drill {
  name: string
  category: string
  emoji: string
}

const ROW_ONE: Drill[] = [
  { name: 'Promote on Camera',           category: 'Social',       emoji: '📸' },
  { name: 'Sell Me This Pencil',          category: 'Persuasion',   emoji: '🛍️' },
  { name: 'Ask Someone Out',              category: 'Social',       emoji: '❤️' },
  { name: 'Convince Your Friends',        category: 'Persuasion',   emoji: '👥' },
  { name: 'Pitch an Investor',            category: 'Professional', emoji: '📈' },
  { name: 'Ask for a Raise',              category: 'Professional', emoji: '👍' },
  { name: 'Pitch in 60 Seconds',          category: 'Persuasion',   emoji: '⏱️' },
  { name: 'Handle Tough Questions',       category: 'Confidence',   emoji: '💪' },
  { name: 'Tell a Story That Lands',      category: 'Storytelling', emoji: '🎯' },
  { name: 'Introduce Yourself Like a Pro',category: 'Professional', emoji: '👋' },
  { name: 'Survive a Panel Q&A',          category: 'Interviews',   emoji: '🎤' },
  { name: 'Speak Up in Meetings',         category: 'Professional', emoji: '📊' },
  { name: 'Own the Room',                 category: 'Confidence',   emoji: '🌟' },
  { name: 'Cold Open a Talk',             category: 'Leadership',   emoji: '🔥' },
  { name: 'Sell Your Vision',             category: 'Persuasion',   emoji: '🚀' },
  { name: 'Win an Argument Calmly',       category: 'Confidence',   emoji: '🧊' },
]

const ROW_TWO: Drill[] = [
  { name: 'Handle Complaints',            category: 'Professional', emoji: '🛠️' },
  { name: 'Give Feedback to a Friend',    category: 'Social',       emoji: '💝' },
  { name: 'Explain What You Do',          category: 'Professional', emoji: '💼' },
  { name: 'Tell Me About Yourself',       category: 'Interviews',   emoji: '🙋' },
  { name: 'Handle Follow-Up Questions',   category: 'Interviews',   emoji: '🔄' },
  { name: 'Present Complex Ideas Simply', category: 'Leadership',   emoji: '🧠' },
  { name: 'Adapt to Your Audience',       category: 'Leadership',   emoji: '🎭' },
  { name: 'Debate and Counter-Argue',     category: 'Persuasion',   emoji: '⚡' },
  { name: 'Deliver a Keynote',            category: 'Leadership',   emoji: '🎙️' },
  { name: 'Disagree Respectfully',        category: 'Professional', emoji: '🤝' },
  { name: 'Speak Without a Script',       category: 'Impromptu',    emoji: '🎲' },
  { name: 'Handle Criticism',             category: 'Confidence',   emoji: '🛡️' },
  { name: 'Casual Small Talk',            category: 'Social',       emoji: '💬' },
  { name: 'Apologize Genuinely',          category: 'Social',       emoji: '🙏' },
  { name: 'Ask Your Parents',             category: 'Social',       emoji: '🏠' },
  { name: 'Motivate Your Team',           category: 'Leadership',   emoji: '🏆' },
]

function DrillCard({ drill }: { drill: Drill }) {
  return (
    <div className="flex-shrink-0 bg-white rounded-[2.5rem] px-8 py-4 mx-3 w-[280px] flex flex-col justify-between gap-3 select-none">
      <div className="flex items-start justify-between gap-4">
        <span className="font-extrabold text-[#0D0F1A] text-2xl leading-tight">{drill.name}</span>
        <span className="text-4xl flex-shrink-0 leading-none mt-0.5">{drill.emoji}</span>
      </div>
      <span className="text-base text-gray-400 font-semibold">{drill.category}</span>
    </div>
  )
}

function MarqueeRow({ drills, direction }: { drills: Drill[]; direction: 'left' | 'right' }) {
  const doubled = [...drills, ...drills]
  const animClass = direction === 'left' ? 'marquee-left' : 'marquee-right'

  return (
    <div className="overflow-hidden w-full py-2">
      <div className={`flex ${animClass}`} style={{ width: 'max-content' }}>
        {doubled.map((drill, i) => (
          <DrillCard key={i} drill={drill} />
        ))}
      </div>
    </div>
  )
}

export default function DrillsSlider() {
  return (
    <section className="bg-[#3CC84A] py-16 overflow-hidden">
      <h2 className="text-center text-white font-extrabold text-4xl md:text-5xl mb-10 px-6">
        Explore 50+ Speaking Drills & Lessons
      </h2>
      <div className="flex flex-col gap-5">
        <MarqueeRow drills={ROW_ONE} direction="left" />
        <MarqueeRow drills={ROW_TWO} direction="right" />
      </div>
    </section>
  )
}
