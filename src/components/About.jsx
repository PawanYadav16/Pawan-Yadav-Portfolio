export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-slate-950/60 px-4 py-20 sm:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center">
        <div className="flex-1 space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">
            About Me
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Cybersecurity + Systems + Backend (security-focused)
          </h2>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
          I am a Computer Science undergraduate with a strong focus on cybersecurity, backend systems, and Linux-based environments. My work revolves around understanding how systems operate, identifying vulnerabilities, and building secure solutions that prevent misuse rather than reacting to it.

I have hands-on experience with tools like Nmap and Wireshark, along with practical exposure through platforms like TryHackMe and Hack The Box. This has helped me develop a practical understanding of network analysis, reconnaissance, and system behavior under attack scenarios.
          </p>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
          I am particularly interested in combining development with security — not just building applications, but making sure they are resistant to real-world threats. I pay attention to how data flows, how systems fail, and how attackers think.
          </p>
        </div>

        <div className="flex-1">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm shadow-slate-900/60">
              <p className="text-xs font-semibold text-slate-400">University</p>
              <p className="mt-1 text-sm font-medium text-slate-100">
                Lovely Professional University
              </p>
              <p className="mt-1 text-xs text-slate-400">CGPA: 7.23</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm shadow-slate-900/60">
              <p className="text-xs font-semibold text-slate-400">Degree</p>
              <p className="mt-1 text-sm font-medium text-slate-100">
                B.Tech Computer Science & Engineering
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm shadow-slate-900/60">
              <p className="text-xs font-semibold text-slate-400">
                Primary Skills
              </p>
              <p className="mt-1 text-sm font-medium text-slate-100">
                Python, C++, Bash, Linux 
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm shadow-slate-900/60">
              <p className="text-xs font-semibold text-slate-400">Location</p>
              <p className="mt-1 text-sm font-medium text-slate-100">India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

