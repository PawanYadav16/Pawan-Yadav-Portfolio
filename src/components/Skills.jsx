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

function SkillTile({ label, src, alt }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-xl px-3 py-4 text-center transition hover:bg-slate-800/50">
      <div className="flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16">
        <img
          src={src}
          alt={alt}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>
      <span className="text-sm font-medium text-slate-200 sm:text-base">{label}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-slate-950 px-4 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">
            Skills
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Technologies I work with
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-base">
            A snapshot of the languages, frameworks, and tools I use to build full-stack web
            applications and solve real-world problems.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-sm shadow-slate-900/70 sm:p-8">
          <div className="space-y-10">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.22em] text-indigo-300 sm:text-left">
                  {group.title}
                </p>
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
          </div>
        </div>
      </div>
    </section>
  );
}
