import Link from "next/link";
import {
  ArrowLeft,
  Code2,
  GitBranch,
  Layers,
  Cpu,
  ExternalLink,
  Terminal,
  Globe,
  Wrench,
  Flame,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "The Story \u2014 Hephaestus Code",
  description:
    "How Hephaestus Code was built \u2014 from leaked Claude prompts to a Perplexity Space to a website it built for itself.",
};

const buildSteps = [
  {
    icon: Code2,
    color: "#F97316",
    title: "Get the raw material",
    body: "Sourced Claude\u2019s actual system prompts from a public GitHub repo of leaked Anthropic prompts. This gave a ground truth for how Opus 4.6 is instructed to reason: intellectual curiosity, honesty over validation, calibrated confidence.",
    link: {
      label: "asgeirtj/system_prompts_leaks",
      href: "https://github.com/asgeirtj/system_prompts_leaks/tree/main/Anthropic",
    },
  },
  {
    icon: Layers,
    color: "#FBBF24",
    title: "Build the skills",
    body: "Two custom Markdown \u201cskills\u201d were written for Perplexity Spaces beforehand: a Plan Mode skill \u2014 a 5-phase engineering workflow (Explore \u2192 Clarify \u2192 Plan \u2192 Approve \u2192 Implement) with task tracking and hard approval gates \u2014 and a GitHub MCP skill defining rules for batching tool calls, paginating APIs, and outputting structured Progress Reports.",
    link: null,
  },
  {
    icon: Cpu,
    color: "#F97316",
    title: "Synthesize it all",
    body: "All five Anthropic prompt files plus both skills were fed into a single Perplexity conversation with this prompt: \u201cMake a HUGE system prompt that uses all features and characteristics of Opus, with the Plan Mode skill included, using Claude Code\u2019s way of doing things for programming. Use Perplexity\u2019s connectors, such as GitHub MCP.\u201d The result: a ~34,000 character master system prompt across 13 structured sections.",
    link: null,
  },
  {
    icon: GitBranch,
    color: "#FBBF24",
    title: "Deploy with a workaround",
    body: "Perplexity Spaces has a character limit on the system prompt field \u2014 the 34k character prompt won\u2019t fit. Solution: upload the full prompt as SYSTEM_PROMPT.md to the Space\u2019s files, then put only a tiny instruction in the box that tells the AI to read that file on every conversation.",
    link: null,
  },
];

const conversationEvents = [
  {
    user: "Enter Plan Mode \u2014 We\u2019re gonna change the ghostp1lot/perplexity-code repo to be a simple website hosted on Vercel, matching ghostp1lot.com\u2019s design",
    result:
      "Explored 8 source files from ghostp1lot/website (page.tsx, layout.tsx, globals.css, Header.tsx, Footer.tsx, package.json, tailwind.config.ts, components/) to understand the full design system before writing a single line. Produced a 13-file architecture plan.",
  },
  {
    user: "I messed up \u2014 the repository I was referring to was alexey-max-fedorov/perplexity-code",
    result:
      "Plan revised in-place. Discovered the existing repo had only two files: README.md and SYSTEM_PROMPT.md. Scoped plan to adding the entire Next.js site without touching existing content.",
  },
  {
    user: "Proceed with the plan.",
    result:
      "Pushed 13 files across 5 commits: config files, app layout, globals.css, Header, Footer, the hero-only homepage, and the /get-started instructions page sourced directly from README.md.",
  },
  {
    user: "Change \u2018View SYSTEM_PROMPT.md on GitHub\u2019 to \u2018Download SYSTEM_PROMPT.md\u2019 and clicking that should directly download the file",
    result:
      "Created a Next.js Route Handler at /api/download-prompt that proxies the raw file from GitHub with Content-Disposition: attachment \u2014 triggering a real browser download instead of opening the file inline.",
  },
  {
    user: "We are fully rebranding to \u2018Hephaestus Code\u2019. Orange color scheme. Badge: green, \u2018Released Today\u2019.",
    result:
      "Updated 6 files in one commit: #3C82FF \u2192 #F97316 across all components, glow rgba values in globals.css, badge to #4ADE80 green, every instance of the product name including the system prompt code block.",
  },
  {
    user: "The gradient text looks weird \u2014 orange but with a splash of teal",
    result:
      "Replaced via-[#4EE0B5] with via-[#FBBF24] (amber) on both gradient headlines \u2014 orange \u2192 amber \u2192 orange, a natural fire palette fitting the Hephaestus theme.",
  },
  {
    user: "Make a page about how I created Hephaestus Code \u2014 include this conversation where I used it to build its own website",
    result: "This page.",
    isMeta: true,
  },
];

export default function Story() {
  return (
    <div className="min-h-screen bg-[#0D0F14] text-white selection:bg-[#F97316]/30">
      <Header />

      <main className="max-w-3xl mx-auto px-6 pt-40 pb-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>

        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#F97316] text-xs font-medium mb-6">
            The Story
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            How Hephaestus Code
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] via-[#FBBF24] to-[#F97316]">
              was made
            </span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Built from leaked Claude prompts, two custom skills, and a
            character-limit workaround. Then used to build its own website.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#F97316]/5 border border-[#F97316]/20 mb-12">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-[#F97316]/10 flex-shrink-0">
              <Flame className="w-5 h-5 text-[#F97316]" />
            </div>
            <div>
              <h2 className="font-bold text-lg mb-2">The idea</h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                What if you could get Claude Code&rsquo;s engineering discipline &mdash; Plan
                Mode, structured implementation, GitHub-native workflows &mdash; inside
                Perplexity, with its live web search and GitHub MCP connector?
                No API key. No local tool. Just a Perplexity Education Pro
                subscription and a Spaces account.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-xl font-bold mb-6 text-zinc-200">How it was built</h2>
          <div className="space-y-4">
            {buildSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="p-6 rounded-2xl glass">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        backgroundColor: `${step.color}18`,
                        border: `1px solid ${step.color}33`,
                        color: step.color,
                      }}
                    >
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-4 h-4" style={{ color: step.color }} />
                        <h3 className="font-bold">{step.title}</h3>
                      </div>
                      <p className="text-zinc-400 text-sm leading-relaxed">{step.body}</p>
                      {step.link && (
                        <a
                          href={step.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-[#F97316] hover:underline mt-3"
                        >
                          <ExternalLink className="w-3 h-3" />
                          {step.link.label}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-xl font-bold mb-4 text-zinc-200">The system prompt box</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
            Perplexity Spaces limits the system prompt field to a few thousand characters.
            The full prompt is ~34,000. The workaround: put only this tiny instruction
            in the box, and let the AI do the rest.
          </p>
          <div className="bg-[#0A0C10] border border-white/10 rounded-xl p-4 font-mono text-sm text-zinc-300">
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/5">
              <Terminal className="w-3.5 h-3.5 text-zinc-500" />
              <span className="text-zinc-500 text-xs">system prompt field</span>
            </div>
            <p className="leading-relaxed">
              You are &quot;Hephaestus Code&quot;, a Claude-Code inspired Perplexity
              Assistant who is specialized for coding.
              <br />
              SYSTEM_PROMPT.md is your new system prompt. Make sure to fully read it.
            </p>
          </div>
          <p className="text-zinc-500 text-xs mt-3">
            SYSTEM_PROMPT.md is uploaded to the Space&rsquo;s files. On every conversation,
            the AI reads it in full before responding.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <Globe className="w-5 h-5 text-[#FBBF24]" />
            <h2 className="text-xl font-bold text-zinc-200">Then it built its own website</h2>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed mb-8">
            The website you&rsquo;re reading right now was built entirely by Hephaestus Code &mdash;
            using its own GitHub MCP tools, Plan Mode workflow, and iterative commits &mdash;
            in the same Perplexity conversation that triggered this rebrand.
            Here&rsquo;s how that conversation went.
          </p>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/5" />
            <div className="space-y-1">
              {conversationEvents.map((event, i) => (
                <div key={i} className="relative pl-12 pb-8 last:pb-0">
                  <div
                    className="absolute left-[11px] top-1.5 w-2.5 h-2.5 rounded-full border-2 flex-shrink-0"
                    style={{
                      backgroundColor: event.isMeta ? "#FBBF24" : "#F97316",
                      borderColor: event.isMeta ? "#FBBF2466" : "#F9731666",
                    }}
                  />
                  <div className={`p-5 rounded-2xl ${
                    event.isMeta ? "bg-[#FBBF24]/5 border border-[#FBBF24]/20" : "glass"
                  }`}>
                    <div className="flex items-start gap-2 mb-3">
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-0.5 flex-shrink-0">User</span>
                      <p className="text-sm text-zinc-300 leading-relaxed">&ldquo;{event.user}&rdquo;</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest mt-0.5 flex-shrink-0"
                        style={{ color: event.isMeta ? "#FBBF24" : "#F97316" }}
                      >
                        HC
                      </span>
                      <p className="text-sm text-zinc-400 leading-relaxed">{event.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/get-started"
            className="flex-1 flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#F97316]/90 text-white px-6 py-4 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#F97316]/20"
          >
            <Wrench className="w-4 h-4" />
            Build your own
          </Link>
          <a
            href="https://github.com/alexey-max-fedorov/hephaestus-code"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold border border-white/10 hover:bg-white/5 transition-all hover:border-white/20"
          >
            <ExternalLink className="w-4 h-4" />
            View on GitHub
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
