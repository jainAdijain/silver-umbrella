const philosophyImg =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBKLuOxxVswU85-LC8DpPkLxPMHzWjQs6Hh21ZntY3LAwxyTauGklfrOb30C8ERwdBM5tyi081A75qhKY5HTXiWfVxim0rU_GpbseDe-tItyHWciXWNKtfR_DnTS-YsGQJcx18JxI2vn_xXuihUqtUA2hGj3b5cHtT4TH3nwrzeb-p2g0aR1zSHAuBzjDQlqouUknw4U2la0kOrT6_0X684970zO28A8uO9sPrz6EEOOscWAVVzcsfii259aPsi0C2DPpPNkwZgd54'

export function Skills() {
  return (
    <main className="selection:bg-secondary-container selection:text-on-secondary-container mx-auto max-w-7xl px-8 pt-32 pb-24">
      <header className="mb-20">
        <div className="font-label mb-6 inline-block rounded-full bg-secondary-container px-4 py-1 text-xs font-bold tracking-[0.05em] text-on-secondary-container uppercase">
          Capabilities Matrix
        </div>
        <h1 className="font-headline mb-6 text-6xl leading-none font-black tracking-tighter md:text-7xl">
          Technical Precision. <br />
          <span className="text-secondary">Human Empathy.</span>
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-on-surface-variant">
          A multidisciplinary approach to building digital products, bridging the
          gap between sophisticated engineering architectures and intuitive user
          experiences.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {/* UX Research & Design */}
        <section className="rounded-xl border border-outline-variant/15 bg-surface-container-low p-8 md:col-span-7">
          <div className="mb-8 flex items-center gap-3">
            <span
              className="material-symbols-outlined text-secondary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              architecture
            </span>
            <h2 className="font-headline text-2xl font-bold">
              UX Research & Design
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="group rounded-xl bg-surface-container-lowest p-5 transition-all hover:shadow-[0_20px_40px_rgba(44,47,49,0.06)]">
              <div className="mb-4 flex justify-between items-start">
                <span className="font-label text-xs font-bold tracking-widest text-secondary uppercase">
                  Methodology
                </span>
                <span className="material-symbols-outlined text-sm text-outline-variant transition-colors group-hover:text-secondary">
                  monitoring
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold">User Journey Mapping</h3>
              <p className="mb-4 text-sm leading-relaxed text-on-surface-variant">
                Translating user pain points into seamless architectural flows.
              </p>
              <div className="h-1 w-full overflow-hidden rounded-full bg-surface-container">
                <div className="h-full w-[95%] bg-secondary" />
              </div>
            </div>
            <div className="group rounded-xl bg-surface-container-lowest p-5 transition-all hover:shadow-[0_20px_40px_rgba(44,47,49,0.06)]">
              <div className="mb-4 flex justify-between items-start">
                <span className="font-label text-xs font-bold tracking-widest text-secondary uppercase">
                  Interface
                </span>
                <span className="material-symbols-outlined text-sm text-outline-variant transition-colors group-hover:text-secondary">
                  draw
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold">Design Systems</h3>
              <p className="mb-4 text-sm leading-relaxed text-on-surface-variant">
                Creating scalable, accessible component libraries and tokens.
              </p>
              <div className="h-1 w-full overflow-hidden rounded-full bg-surface-container">
                <div className="h-full w-[90%] bg-secondary" />
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              'Usability Testing',
              'Figma Mastery',
              'Wireframing',
              'Interaction Design',
              'Prototyping',
            ].map((t) => (
              <span
                key={t}
                className="rounded-full bg-surface-variant px-4 py-1.5 text-sm font-medium text-on-surface-variant"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Domain Expertise */}
        <section className="relative flex flex-col justify-between overflow-hidden rounded-xl bg-primary p-8 text-on-primary md:col-span-5">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <span className="material-symbols-outlined text-[160px]" style={{ fontVariationSettings: "'wght' 100" }}>
              hub
            </span>
          </div>
          <div className="relative z-10">
            <div className="mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary-fixed">
                category
              </span>
              <h2 className="font-headline text-2xl font-bold text-white">
                Domain Expertise
              </h2>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-on-primary/10">
                  <span className="material-symbols-outlined text-secondary-fixed">
                    payments
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">FinTech Systems</h4>
                  <p className="text-sm text-on-primary/70">
                    Expertise in high-security transaction flows and complex ledger
                    visualizations.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-on-primary/10">
                  <span className="material-symbols-outlined text-secondary-fixed">
                    cloud_queue
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Enterprise SaaS</h4>
                  <p className="text-sm text-on-primary/70">
                    Optimizing multi-tenant dashboard architectures for B2B efficiency.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-on-primary/10">
                  <span className="material-symbols-outlined text-secondary-fixed">
                    health_metrics
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">HealthTech</h4>
                  <p className="text-sm text-on-primary/70">
                    HIPAA compliant design patterns for patient-centric diagnostic
                    tools.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Engineering & Development */}
        <section className="rounded-xl border border-outline-variant/15 bg-surface-container-low p-8 md:col-span-12">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-tertiary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                terminal
              </span>
              <h2 className="font-headline text-2xl font-bold">
                Engineering & Development
              </h2>
            </div>
            <div className="rounded bg-surface-variant/30 px-3 py-1 font-label text-sm font-bold tracking-widest text-on-surface-variant">
              STACK VERSION: 2024.0.1
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: 'React',
                desc: 'Hooks, Context API, Performance Profiling.',
                dots: 4,
              },
              {
                name: 'TypeScript',
                desc: 'Strict Typing, Generics, Interface Architecture.',
                dots: 5,
              },
              {
                name: 'Node.js',
                desc: 'Express, Microservices, RESTful API Design.',
                dots: 3,
              },
              {
                name: 'Tailwind',
                desc: 'Utility-First CSS, Design Tokens, Responsive UI.',
                dots: 4,
              },
            ].map((card) => (
              <div
                key={card.name}
                className="rounded-lg border-l-4 border-tertiary bg-surface-container-lowest p-6"
              >
                <div className="font-headline mb-2 text-3xl font-black text-on-surface">
                  {card.name}
                </div>
                <p className="mb-4 text-sm font-medium text-on-surface-variant">
                  {card.desc}
                </p>
                <div className="flex flex-wrap gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span
                      key={i}
                      className={`h-2 w-2 rounded-sm ${i <= card.dots ? 'bg-tertiary' : 'bg-tertiary/20'}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center gap-10 md:flex-row">
            <div className="flex-1 space-y-4">
              <div className="flex items-center justify-between text-xs font-bold tracking-widest font-label uppercase">
                <span>Legacy Infrastructure Maintenance</span>
                <span>40%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-surface-container">
                <div className="h-full w-[40%] rounded-full bg-tertiary-fixed-dim" />
              </div>
              <div className="flex items-center justify-between text-xs font-bold tracking-widest font-label uppercase">
                <span>Modern Framework Migration</span>
                <span>92%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-surface-container">
                <div className="h-full w-[92%] rounded-full bg-tertiary" />
              </div>
            </div>
            <div className="grid shrink-0 grid-cols-2 gap-4">
              <div className="rounded-lg bg-tertiary-container/20 p-4 text-center">
                <div className="font-headline text-2xl font-black text-tertiary">
                  50+
                </div>
                <div className="text-[10px] font-bold font-label uppercase">
                  Repos Shipped
                </div>
              </div>
              <div className="rounded-lg bg-tertiary-container/20 p-4 text-center">
                <div className="font-headline text-2xl font-black text-tertiary">
                  12k
                </div>
                <div className="text-[10px] font-bold font-label uppercase">
                  Commits 2023
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-xl bg-surface-container-low p-8 md:col-span-4">
          <h3 className="font-headline mb-6 text-xl font-bold">Technical Tooling</h3>
          <div className="flex flex-wrap gap-2">
            {[
              'VS CODE',
              'GIT / GITHUB',
              'POSTMAN',
              'JEST',
              'DOCKER',
              'AWS',
              'VERCEL',
            ].map((t) => (
              <span
                key={t}
                className="rounded bg-surface-container-lowest px-3 py-1 text-xs font-bold text-on-surface-variant"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        <section className="flex items-center gap-8 rounded-xl bg-secondary-container p-8 group md:col-span-8">
          <div className="hidden h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-white/30 lg:block">
            <img
              alt="Abstract representation of design thinking"
              className="h-full w-full object-cover grayscale"
              src={philosophyImg}
            />
          </div>
          <div>
            <h3 className="font-headline mb-2 text-2xl font-bold text-on-secondary-container">
              Design-to-Dev Philosophy
            </h3>
            <p className="italic leading-relaxed text-on-secondary-container/80">
              &quot;The most elegant code is worthless if it doesn&apos;t solve a
              human problem, and the most beautiful interface is a lie if the
              technical foundation is fragile.&quot;
            </p>
            <button
              type="button"
              className="font-label mt-4 flex items-center gap-2 text-sm font-bold tracking-widest uppercase transition-all group-hover:gap-4"
            >
              View Methodology{' '}
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}
