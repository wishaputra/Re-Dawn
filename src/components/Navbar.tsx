"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-bold tracking-tight">
          re:<span className="text-accent">DAWN</span>
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#join" className="hover:text-white transition-colors">
            Join
          </a>
        </div>
        <a
          href="https://discord.gg/your-invite"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent hover:bg-accent-hover text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Join Discord
        </a>
      </div>
    </nav>
  );
}
