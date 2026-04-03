import nmapLogo from '../assets/skills/nmap.png';

const ICON = {
  python:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  c: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  cpp: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  html: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  css: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  django:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  react:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  nmap: nmapLogo,
  wireshark: 'https://cdn.simpleicons.org/wireshark/1679A7',
  thm: 'https://cdn.simpleicons.org/tryhackme/212C42',
  htb: 'https://cdn.simpleicons.org/hackthebox/9FEF00',
};

const skillGroups = [
  {
    title: 'Languages',
    items: [
      { label: 'Python', src: ICON.python, alt: 'Python' },
      { label: 'C', src: ICON.c, alt: 'C' },
      { label: 'C++', src: ICON.cpp, alt: 'C++' },
      { label: 'Java', src: ICON.java, alt: 'Java' },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { label: 'HTML', src: ICON.html, alt: 'HTML' },
      { label: 'CSS', src: ICON.css, alt: 'CSS' },
      { label: 'Django', src: ICON.django, alt: 'Django' },
      { label: 'React', src: ICON.react, alt: 'React' },
    ],
  },
  {
    title: 'Tools / Platforms',
    items: [
      { label: 'Nmap', src: ICON.nmap, alt: 'Nmap' },
      { label: 'Wireshark', src: ICON.wireshark, alt: 'Wireshark' },
      { label: 'THM', src: ICON.thm, alt: 'TryHackMe' },
      { label: 'HTB', src: ICON.htb, alt: 'Hack The Box' },
    ],
  },
];

const softSkills = ['Team Player', 'Dedicated', 'Observant', 'Adaptability'];

function softSkillInitials(label) {
  const parts = label.trim().split(/\s+/);
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return parts[0].slice(0, 2).toUpperCase();
}

function SkillTile({ label, src, alt }) {
  return (
    <div className="group relative flex flex-col items-center gap-3 rounded-2xl border border-transparent bg-slate-950/40 px-3 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-gradient-to-b hover:from-slate-800/70 hover:to-slate-900/50 hover:shadow-lg hover:shadow-indigo-500/10">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900/90 ring-1 ring-slate-700/70 transition duration-300 group-hover:ring-indigo-400/50 group-hover:shadow-md group-hover:shadow-indigo-500/20 sm:h-16 sm:w-16">
        <img
          src={src}
          alt={alt}
          className="max-h-[85%] max-w-[85%] object-contain transition duration-300 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>
      <span className="text-sm font-medium text-slate-200 transition duration-300 group-hover:text-white sm:text-base">
        {label}
      </span>
    </div>
  );
}

function SoftSkillTile({ label }) {
  const initials = softSkillInitials(label);
  return (
    <div className="group relative flex flex-col items-center gap-3 rounded-2xl border border-transparent bg-slate-950/40 px-3 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/25 hover:bg-gradient-to-b hover:from-slate-800/70 hover:to-slate-900/50 hover:shadow-lg hover:shadow-emerald-500/10">
      <div className="flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/35 via-slate-900/90 to-sky-500/25 text-[11px] font-bold tracking-wide text-indigo-100 shadow-inner ring-1 ring-white/10 transition duration-300 group-hover:from-indigo-400/45 group-hover:to-sky-400/30 group-hover:ring-indigo-400/40 sm:h-16 sm:w-16 sm:text-xs"
          aria-hidden
        >
          {initials}
        </div>
      </div>
      <span className="text-sm font-medium text-slate-200 transition duration-300 group-hover:text-white sm:text-base">
        {label}
      </span>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mb-4 flex items-center justify-center gap-3 sm:justify-start">
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-indigo-400/60 sm:w-10" />
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-300">
        {children}
      </p>
      <span className="hidden h-px flex-1 max-w-[120px] bg-gradient-to-r from-indigo-400/40 to-transparent sm:block" />
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 overflow-hidden bg-slate-950 px-4 py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-30%,rgba(99,102,241,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(45,212,191,0.08),transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">
            Skills
          </p>
          <h2 className="bg-gradient-to-r from-slate-100 via-indigo-100 to-sky-200 bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-3xl">
            Technologies I work with
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            A snapshot of the languages, frameworks, and tools I use to build full-stack web
            applications and solve real-world problems.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900/80 via-slate-950/90 to-slate-900/80 p-1 shadow-[0_0_0_1px_rgba(99,102,241,0.06),0_25px_60px_-15px_rgba(0,0,0,0.55)]">
          <div className="rounded-[14px] border border-slate-800/50 bg-slate-950/30 p-5 backdrop-blur-sm sm:p-8">
            <div className="space-y-10">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <SectionLabel>{group.title}</SectionLabel>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4 md:grid-cols-4">
                    {group.items.map((item) => (
                      <SkillTile
                        key={item.label}
                        label={item.label}
                        src={item.src}
                        alt={item.alt}
                      />
                    ))}
                  </div>
                </div>
              ))}

              <div>
                <SectionLabel>Soft Skills</SectionLabel>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4 md:grid-cols-4">
                  {softSkills.map((skill) => (
                    <SoftSkillTile key={skill} label={skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
