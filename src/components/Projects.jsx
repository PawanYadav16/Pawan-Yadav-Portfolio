import { useMemo, useState } from 'react';

import expenseImg from '../assets/images/projects/expense.png';
import stockImg from '../assets/images/projects/stmg.jpeg';
import startupImg from '../assets/images/projects/startup.jpeg';

const githubProfileLink = 'https://github.com/Gourav230705';

const allProjects = [
  {
    id: 1,
    title: 'iExpenseTracker – Expense Tracking System',
    short: 'Expense tracking application',
    description:
      'A full-stack expense tracking application that helps users manage daily spending with secure authentication and an intuitive dashboard.',
    tech: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Redux',
      'JWT',
      'Tailwind CSS',
    ],
    type: 'fullstack',
    github: githubProfileLink,
    image: expenseImg,
    demo: null,
  },
  {
    id: 2,
    title: 'STMG – Stock Management System',
    short: 'Inventory & billing platform',
    description:
      'A centralized inventory management system designed to streamline multi-branch stock handling, billing, and supplier tracking.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'jQuery', 'AJAX', 'HTML', 'CSS'],
    type: 'fullstack',
    github: githubProfileLink,
    image: stockImg,
    demo: null,
  },
  {
    id: 3,
    title: 'StartupMarket',
    short: 'Startup marketplace web app',
    description:
      'A web application where startup founders can list their startups and products, and customers or investors can browse, purchase products, and connect with startups.',
    tech: ['MongoDB', 'Express', 'React', 'Nodejs'],
    type: 'fullstack',
    github: githubProfileLink,
    image: startupImg,
    demo: null,
  },
];

const filters = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend / UI' },
  { id: 'backend', label: 'Backend / Tools' },
  { id: 'fullstack', label: 'Full‑Stack' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = useMemo(() => {
    if (activeFilter === 'all') return allProjects;
    return allProjects.filter((p) => p.type === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-slate-950/70 px-4 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">
            Projects
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-base">
            Projects I’ve built across full‑stack web development and Python tools.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-indigo-500 to-sky-500 text-slate-950 shadow-md shadow-indigo-900/40'
                  : 'border border-slate-700 bg-slate-950/70 text-slate-200 hover:border-indigo-500/70'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950 via-slate-950/70 to-transparent pointer-events-none" />

          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-track-slate-950 scrollbar-thumb-slate-700/80">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group flex min-w-[260px] max-w-xs flex-col snap-start overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-sm shadow-slate-900/80 transition hover:translate-x-2 hover:-translate-y-1 hover:border-indigo-500/80 hover:shadow-glow"
              >
                <div className="relative h-36 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02] group-hover:translate-x-2"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-[11px] font-medium uppercase tracking-[0.18em] text-slate-200/80">
                        {project.short}
                      </p>
                      <h3 className="truncate text-sm font-semibold text-slate-50">
                        {project.title}
                      </h3>
                    </div>
                    <span className="shrink-0 rounded-full bg-slate-950/70 px-2 py-0.5 text-[10px] font-medium text-slate-100 ring-1 ring-slate-700/70">
                      {project.type === 'fullstack'
                        ? 'Full‑Stack'
                        : project.type === 'frontend'
                        ? 'Frontend'
                        : 'Backend'}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-3 text-xs text-slate-300">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[10px] font-medium text-sky-300 ring-1 ring-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex gap-2">
                    <a
                      href={project.github ?? githubProfileLink}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-slate-100 transition hover:border-indigo-500/80"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-4 w-4 fill-current"
                      >
                        <path d="M12 2C6.477 2 2 6.58 2 12.235c0 4.52 2.865 8.355 6.839 9.708.5.096.682-.22.682-.49 0-.245-.009-.894-.014-1.755-2.782.62-3.369-1.372-3.369-1.372-.455-1.183-1.11-1.497-1.11-1.497-.908-.637.069-.624.069-.624 1.004.073 1.532 1.057 1.532 1.057.892 1.56 2.341 1.11 2.91.848.092-.665.349-1.11.635-1.365-2.22-.261-4.555-1.14-4.555-5.073 0-1.121.39-2.038 1.03-2.756-.103-.261-.446-1.312.098-2.735 0 0 .84-.275 2.75 1.053A9.29 9.29 0 0 1 12 6.844c.85.004 1.705.12 2.504.352 1.909-1.328 2.748-1.053 2.748-1.053.545 1.423.202 2.474.1 2.735.64.718 1.028 1.635 1.028 2.756 0 3.944-2.339 4.808-4.566 5.064.359.315.679.936.679 1.887 0 1.363-.013 2.46-.013 2.795 0 .273.18.592.688.489C19.138 20.586 22 16.753 22 12.235 22 6.58 17.523 2 12 2z" />
                      </svg>
                    </a>
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-1 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500 px-3 py-1.5 text-xs font-semibold text-slate-950 transition hover:brightness-110"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <span className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-400">
                        Demo soon
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

