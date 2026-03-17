import trainingPreview from '../assets/images/training.png';

export default function Training() {
  return (
    <section
      id="training"
      className="scroll-mt-24 bg-slate-950 px-4 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">
            Training & Courses
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Full Stack Development (MERN Stack) Training
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-base">
            Gained practical experience in building full-stack web applications using
            the MERN stack, focusing on frontend, backend, and database integration.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.1fr,1.2fr] md:items-center">
          <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm shadow-slate-900/70">
            <p className="text-xs font-semibold text-slate-400">Training Title</p>
            <p className="text-sm font-medium text-slate-100">
              Full Stack Development (MERN Stack) Training
            </p>
            <p className="mt-2 text-sm text-slate-300">
              Gained practical experience in building full-stack web applications
              using the MERN stack, focusing on frontend, backend, and database
              integration.
            </p>
            <ul className="mt-3 space-y-1 text-xs text-slate-300">
              <li>• Developed UI using React (components, hooks, routing)</li>
              <li>• Built RESTful APIs with Node.js and Express</li>
              <li>• Implemented JWT-based authentication</li>
              <li>• Designed MongoDB schemas and performed CRUD operations</li>
              <li>
                • Integrated frontend, backend, and database into a working
                application
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <figure className="relative w-full max-w-md overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg shadow-slate-900/80">
              <img
                src={trainingPreview}
                alt="Full Stack Development (MERN Stack) Training Certificate"
                className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent px-4 py-3 text-xs font-medium text-slate-100">
                Full Stack Development (MERN Stack) Training Certificate
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

