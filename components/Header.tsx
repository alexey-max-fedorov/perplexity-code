"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const DEMO_URL =
  "https://www.perplexity.ai/spaces/hephaestus-code-public-djO4mFs7Rhm19vzo4JIajg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0D0F14]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <div className="text-2xl font-bold tracking-tighter cursor-pointer">
            Hephaestus <span className="text-[#F97316]">Code</span>
          </div>
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
            <Link href="/story" className="hover:text-white transition-colors">Story</Link>
            <Link href="/get-started" className="hover:text-white transition-colors">Docs</Link>
            <a
              href="https://github.com/alexey-max-fedorov/hephaestus-code"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F97316] hover:bg-[#F97316]/90 text-white px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#F97316]/20 glow-blue-hover"
          >
            Try it out
          </a>
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#0D0F14] border-b border-white/5 p-6 flex flex-col gap-6">
          <Link href="/story" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-zinc-400 hover:text-white">Story</Link>
          <Link href="/get-started" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-zinc-400 hover:text-white">Docs</Link>
          <a
            href="https://github.com/alexey-max-fedorov/hephaestus-code"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-medium text-zinc-400 hover:text-white"
          >
            GitHub
          </a>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-medium text-[#F97316] hover:text-[#F97316]/80"
          >
            Try it out
          </a>
        </div>
      )}
    </nav>
  );
}
