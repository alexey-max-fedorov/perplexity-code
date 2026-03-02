import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 bg-[#0D0F14]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold tracking-tighter">
            Hephaestus <span className="text-[#F97316]">Code</span>
          </div>
          <div className="flex gap-8 text-sm text-zinc-500">
            <Link href="/story" className="hover:text-white transition-colors">Story</Link>
            <a
              href="https://github.com/alexey-max-fedorov/hephaestus-code"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <Link href="/get-started" className="hover:text-white transition-colors">Docs</Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-xs">A Claude Code–inspired assistant built on Perplexity Spaces.</p>
          <p className="text-zinc-600 text-xs">© 2026 Alexey Fedorov. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
