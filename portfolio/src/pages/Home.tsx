import { Link } from 'react-router-dom'

const portraitSrc =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA3jc0twfXgy_n2o1CdYEQOPhlEm-AUXVFZpWDXVt4NQcTW7QquohjyPGxGTMh2hupr3T7U0vpseGEiJPLppDL3L7jcOX6kvUMZ4vOq5t2Ye2PXGCidsJDMVMSsoQOvPLYF-NnwDNAs1B0e1dyo0p5GJV0bs7a66S5s9-4KfCVo2EySO45z6b-6hmQtHckCq9is7BaVzcOrXdVXshaBiW0lphlXeTBetbDu33j2l49xY46KNi3DcTJOEDNc0M6lX7QKooQshNHXxXM'

export function Home() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative flex min-h-[921px] items-center overflow-hidden bg-surface">
        <div className="absolute top-0 right-0 z-0 hidden h-full w-1/2 -skew-x-6 translate-x-20 bg-surface-container-low lg:block" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-8 lg:grid-cols-12">
          <div className="py-12 lg:col-span-7">
            <div className="font-label mb-6 inline-flex items-center gap-2 rounded-full bg-secondary-container px-3 py-1 text-xs font-bold tracking-widest text-on-secondary-container uppercase">
              <span className="material-symbols-outlined text-[14px]">
                architecture
              </span>
              Full-Stack Engineering & Product Design
            </div>
            <h1 className="font-headline mb-8 text-5xl leading-[1.1] font-bold tracking-tight text-on-surface md:text-7xl">
              Designing Systems, <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Engineering Experiences.
              </span>
            </h1>
            <p className="font-body mb-10 max-w-xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
              I bridge the gap between technical complexity and human intuition.
              Specializing in building scalable architectures that don&apos;t
              just work—they feel right.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/experience"
                className="flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-headline text-lg font-bold text-on-primary shadow-xl shadow-primary/10 transition-all hover:shadow-primary/20"
              >
                View My Work
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <a
                href="/resume.pdf"
                className="group relative flex items-center gap-2 px-8 py-4 font-headline text-lg font-bold text-primary"
              >
                Download Resume
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-secondary transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-8">
              <div className="flex flex-col">
                <span className="font-headline text-3xl font-bold text-tertiary">
                  08+
                </span>
                <span className="font-label mt-1 text-xs tracking-widest text-on-surface-variant uppercase">
                  Years Exp
                </span>
              </div>
              <div className="flex flex-col border-l border-outline-variant/30 pl-8">
                <span className="font-headline text-3xl font-bold text-tertiary">
                  40+
                </span>
                <span className="font-label mt-1 text-xs tracking-widest text-on-surface-variant uppercase">
                  Shipped Apps
                </span>
              </div>
              <div className="flex flex-col border-l border-outline-variant/30 pl-8">
                <span className="font-headline text-3xl font-bold text-tertiary">
                  03
                </span>
                <span className="font-label mt-1 text-xs tracking-widest text-on-surface-variant uppercase">
                  Design Awards
                </span>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-surface-container-high">
              <img
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                src={portraitSrc}
                alt="Professional portrait of a creative technologist in a minimalist studio setting"
              />
              <div className="absolute -left-6 bottom-6 max-w-[240px] rounded-xl bg-surface-container-lowest/80 p-6 shadow-2xl backdrop-blur-xl">
                <div className="mb-3 flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-error" />
                  <div className="h-2 w-2 rounded-full bg-secondary" />
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <p className="font-body text-sm leading-snug text-on-surface">
                  &quot;Precision is the foundation of empathy in digital
                  interfaces.&quot;
                </p>
              </div>
              <div className="absolute top-10 -right-10 flex h-48 w-48 items-center justify-center rounded-full border border-outline-variant/20">
                <div className="flex h-40 w-40 animate-[spin_12s_linear_infinite] items-center justify-center rounded-full border border-secondary/20">
                  <span className="material-symbols-outlined scale-150 text-secondary opacity-50">
                    settings_suggest
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Archetype */}
      <section className="bg-surface-container-low py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
            <div>
              <h2 className="font-headline mb-2 text-3xl font-bold text-on-surface">
                Technical Archetype
              </h2>
              <p className="font-body text-on-surface-variant">
                A curated stack blending rigor with aesthetics.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="font-label rounded-full bg-surface-variant px-4 py-1 text-xs font-bold tracking-widest text-on-surface-variant uppercase">
                Engineering
              </span>
              <span className="font-label rounded-sm bg-surface-variant px-4 py-1 text-xs font-bold tracking-widest text-on-surface-variant uppercase">
                Design
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
            <div className="flex flex-col gap-4 rounded-lg border border-outline-variant/10 bg-surface-container-lowest p-6">
              <span className="material-symbols-outlined text-primary">
                terminal
              </span>
              <span className="font-headline text-lg font-bold">React/Next.js</span>
            </div>
            <div className="flex flex-col gap-4 rounded-lg border border-outline-variant/10 bg-surface-container-lowest p-6">
              <span className="material-symbols-outlined text-primary">
                database
              </span>
              <span className="font-headline text-lg font-bold">PostgreSQL</span>
            </div>
            <div className="flex flex-col gap-4 rounded-lg border border-outline-variant/10 bg-surface-container-lowest p-6">
              <span className="material-symbols-outlined text-primary">cloud</span>
              <span className="font-headline text-lg font-bold">
                AWS Infrastructure
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 rounded-full bg-secondary-container p-6 text-center">
              <span className="material-symbols-outlined text-on-secondary-container">
                draw
              </span>
              <span className="font-headline text-lg font-bold">
                Figma Prototyping
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 rounded-full bg-secondary-container p-6 text-center">
              <span className="material-symbols-outlined text-on-secondary-container">
                group
              </span>
              <span className="font-headline text-lg font-bold">User Research</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 rounded-full bg-secondary-container p-6 text-center">
              <span className="material-symbols-outlined text-on-secondary-container">
                analytics
              </span>
              <span className="font-headline text-lg font-bold">A/B Testing</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
