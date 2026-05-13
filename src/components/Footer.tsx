export default function Footer() {
  return (
    <div className="bg-white px-6 pb-8">
      <footer className="max-w-5xl mx-auto bg-[#3CC84A] rounded-2xl px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white font-semibold text-sm">
          © 2025 Speako. All Rights Reserved.
        </p>
        <nav className="flex items-center gap-6">
          <a href="privacy-policy.html" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Privacy Policy</a>
          <a href="terms.html"           className="text-white/80 hover:text-white text-sm font-medium transition-colors">Terms</a>
          <a href="mailto:nobaahass@gmail.com" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Support</a>
        </nav>
      </footer>
    </div>
  )
}
