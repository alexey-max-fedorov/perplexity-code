"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0D0F14]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <div className="text-2xl font-bold tracking-tighter cursor-pointer">
            Perplexity <span className="text-[#3C82FF]">Code</span>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/alexey-max-fedorov/perplexity-code"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <Link href="/get-started">
            <button className="bg-[#3C82FF] hover:bg-[#3C82FF]/90 text-white px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#3C82FF]/20 glow-blue-hover">
              Get Started
            </button>
          </Link>
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#0D0F14] border-b border-white/5 p-6 flex flex-col gap-6">
          <a
            href="https://github.com/alexey-max-fedorov/perplexity-code"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-medium text-zinc-400 hover:text-white"
          >
            GitHub
          </a>
          <Link href="/get-started" onClick={() => setIsMenuOpen(false)}>
            <span className="text-lg font-medium text-zinc-400 hover:text-white">
              Get Started
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
}
