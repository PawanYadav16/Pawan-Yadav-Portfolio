import trainingPreview from '../assets/images/a.png';

export default function Training() {
  return (
    <section
      id="training"
      className="scroll-mt-24 bg-slate-950 px-4 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">
            Training
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            RHCSA Summer Training – Linux System Administration
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-base">
            Gained hands-on experience in Linux system administration through Red
            Hat Academy, focusing on system management, security configuration, and
            automation using shell scripting. Developed practical skills by
            working on real-world administrative tasks and building automation
            scripts for monitoring and security.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.1fr,1.2fr] md:items-center">
          <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm shadow-slate-900/70">
            <p className="text-xs font-semibold text-slate-400">Key Highlights</p>
            <ul className="mt-1 space-y-1.5 text-xs text-slate-300">
              <li>• Completed Red Hat System Administration I (RH124) and II (RH134) covering Linux fundamentals and advanced administration</li>
              <li>• Performed hands-on labs on RHEL environments including user management, permissions, storage, and networking</li>
              <li>• Worked with system tools like systemd, firewalld, SELinux, and cron for system control and security</li>
              <li>• Built 5 automation scripts for monitoring system activity, login attempts, and user sessions</li>
              <li>• Implemented shell scripting using bash with commands like grep, awk, sed, and cron scheduling</li>
              <li>• Analyzed system logs to detect failed login attempts and security issues</li>
              <li>• Gained practical exposure to Linux-based system monitoring and administrative workflows</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <figure className="relative w-full max-w-md overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg shadow-slate-900/80">
              <img
                src={trainingPreview}
                alt="Training and activities preview"
                className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent px-4 py-3 text-xs font-medium text-slate-100">
                Linux system administration practice
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

