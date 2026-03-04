import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DEMO_URL =
  "https://www.perplexity.ai/spaces/hephaestus-code-public-djO4mFs7Rhm19vzo4JIajg";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D0F14] text-white selection:bg-[#F97316]/30">
      <Header />

      <main>
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-br from-[#F97316]/30 to-[#FBBF24]/20 blur-[80px] md:blur-[120px] -z-10 animate-float" />

          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#4ADE80] text-[10px] md:text-xs font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ADE80]"></span>
              </span>
              Released Today
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
              Claude Code, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] via-[#FBBF24] to-[#F97316] animate-gradient-flow">
                in Perplexity.
              </span>
            </h1>

            <p className="text-zinc-400 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed px-4 md:px-0">
              Created by{" "}
              <a
                href="https://www.instagram.com/alexeyfedorov._"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-white transition-colors underline underline-offset-2"
              >
                Alexey Fedorov
              </a>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#F97316] hover:bg-[#F97316]/90 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#F97316]/20 flex items-center justify-center gap-2 group"
              >
                Try it out <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/get-started"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold border border-white/10 hover:bg-white/5 transition-all hover:border-white/20"
              >
                Get started
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
