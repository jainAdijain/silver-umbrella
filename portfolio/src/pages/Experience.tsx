const philosophyImg =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDE8UKyQP1EujwjHPWYHlLk0joYiCu343PjRJwhtBsidJliKbe90V5g4TIuJZscnS2O8KjAxoP3qK70rse7PYqjbmHTKgmU5v4Ko-rCG9D4UnlYNg73dy5W_ZfMffJx9qYTgP-7BjzAHwIvecqHaHcCNi7Rgx68BPbeLpLWsDvKigmX6CqbkEYDOoa3UkZ3iBV6rdmbZ2BM_bcwDifLAWO2xVP9ihBpb5GSQDbZA0bco_6WLthGqBu-hxcJvXeczvmctIAL84U6IvA'

export function Experience() {
  return (
    <main className="selection:bg-secondary-container selection:text-on-secondary-container pb-20 pt-32">
      <section className="mx-auto mb-24 max-w-7xl px-8">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <span className="font-label mb-6 inline-block rounded-sm bg-surface-container-high px-3 py-1 text-xs tracking-widest text-on-surface-variant uppercase">
              Career Synthesis
            </span>
            <h1 className="mb-8 text-6xl leading-[0.9] font-bold tracking-tighter text-on-surface md:text-7xl">
              Precision Meets <span className="text-secondary italic">Empathy.</span>
            </h1>
            <p className="font-body max-w-2xl text-xl leading-relaxed text-on-surface-variant">
              A decade-long evolution from structural engineering to human-centered
              design. My work leverages the rigors of technical systems to build
              intuitive digital experiences.
            </p>
          </div>
          <div className="hidden lg:col-span-4 lg:block">
            <div className="rounded-xl border border-outline-variant/15 bg-surface-container-low p-6">
              <span className="font-headline mb-2 block text-4xl font-bold text-tertiary">
                12+
              </span>
              <span className="font-label text-sm tracking-widest text-on-surface-variant uppercase">
                Complex Systems Architected
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8">
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-0 w-px bg-outline-variant/30 md:left-1/2 md:-translate-x-1/2" />

          {/* Entry 1 */}
          <div className="relative mb-24 grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-24">
            <div className="order-2 md:order-1 md:text-right">
              <div className="mb-4 inline-flex items-center gap-2 md:flex-row-reverse">
                <span className="rounded-full bg-secondary-container px-3 py-1 text-xs font-bold tracking-tighter text-on-secondary-container uppercase">
                  Current
                </span>
                <span className="font-label text-sm tracking-tight text-on-surface-variant">
                  2021 — Present
                </span>
              </div>
              <h3 className="mb-2 text-3xl font-bold text-on-surface">
                Lead Product Designer
              </h3>
              <p className="font-headline mb-6 text-lg font-medium text-secondary">
                Nexus FinTech Solutions
              </p>
              <div className="mb-8 flex flex-wrap gap-2 md:justify-end">
                {['User Research', 'Design Systems', 'Stakeholder Mgmt'].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full bg-surface-variant px-3 py-1 text-[10px] font-bold tracking-widest text-on-surface-variant uppercase"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-8 shadow-[0_20px_40px_rgba(44,47,49,0.06)]">
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined mt-1 text-secondary">
                      check_circle
                    </span>
                    <p className="font-body leading-relaxed text-on-surface-variant">
                      Spearheaded the redesign of a high-frequency trading
                      dashboard, reducing cognitive load for traders by 40% using
                      Gestalt principles.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined mt-1 text-secondary">
                      check_circle
                    </span>
                    <p className="font-body leading-relaxed text-on-surface-variant">
                      Developed a cross-platform design system that bridged the gap
                      between engineering components and design tokens.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined mt-1 text-secondary">
                      check_circle
                    </span>
                    <p className="font-body leading-relaxed text-on-surface-variant">
                      Facilitated workshops with C-suite executives to align business
                      metrics with user-centric KPIs.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="absolute top-0 left-[-4px] h-2 w-2 rounded-full bg-secondary ring-8 ring-background md:left-1/2 md:-translate-x-1/2" />
          </div>

          {/* Entry 2 */}
          <div className="relative mb-24 grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-24">
            <div className="hidden md:block md:text-right">
              <div className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-8">
                <div className="mb-6 flex items-center gap-3 md:justify-end">
                  <span className="material-symbols-outlined text-tertiary">
                    architecture
                  </span>
                  <p className="font-label text-sm tracking-widest text-on-surface-variant uppercase">
                    The Engineering Edge
                  </p>
                </div>
                <p className="font-body italic leading-relaxed text-on-surface-variant">
                  &quot;Applied structural stress-testing logic to user flows,
                  ensuring that every interaction path was resilient against user
                  error and data latency.&quot;
                </p>
              </div>
            </div>
            <div className="md:pl-4">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="font-label text-sm tracking-tight text-on-surface-variant">
                  2018 — 2021
                </span>
              </div>
              <h3 className="mb-2 text-3xl font-bold text-on-surface">
                Senior Experience Designer
              </h3>
              <p className="font-headline mb-6 text-lg font-medium text-secondary">
                Modus Digital Agency
              </p>
              <div className="mb-8 flex flex-wrap gap-2">
                {['Interaction Design', 'Rapid Prototyping', 'A/B Testing'].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full bg-surface-variant px-3 py-1 text-[10px] font-bold tracking-widest text-on-surface-variant uppercase"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined mt-1 text-secondary">
                    bolt
                  </span>
                  <p className="font-body text-on-surface-variant">
                    Transformed complex B2B supply chain software into a modern,
                    mobile-first SaaS platform.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined mt-1 text-secondary">
                    bolt
                  </span>
                  <p className="font-body text-on-surface-variant">
                    Integrated technical feasibility checks directly into the design
                    phase, reducing development rework by 25%.
                  </p>
                </li>
              </ul>
            </div>
            <div className="absolute top-0 left-[-4px] h-2 w-2 rounded-full bg-outline-variant ring-8 ring-background md:left-1/2 md:-translate-x-1/2" />
          </div>

          {/* Entry 3 */}
          <div className="relative grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-24">
            <div className="md:text-right">
              <div className="mb-4 inline-flex items-center gap-2 md:flex-row-reverse">
                <span className="font-label text-sm tracking-tight text-on-surface-variant">
                  2014 — 2018
                </span>
              </div>
              <h3 className="mb-2 text-3xl font-bold text-on-surface">
                Systems Optimization Engineer
              </h3>
              <p className="font-headline mb-6 text-lg font-medium text-secondary">
                Titan Infrastructure Group
              </p>
              <div className="mb-8 flex flex-wrap gap-2 md:justify-end">
                {['Logic Mapping', 'QA Protocols', 'Data Analysis'].map((t) => (
                  <span
                    key={t}
                    className="rounded-sm bg-surface-variant px-2 py-0.5 text-[10px] font-bold tracking-widest text-on-surface-variant uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="rounded-xl border border-outline-variant/15 bg-surface-container-low p-8 opacity-80 grayscale transition-all duration-500 hover:grayscale-0">
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined mt-1 text-on-surface-variant">
                      precision_manufacturing
                    </span>
                    <p className="font-body leading-relaxed text-on-surface-variant">
                      Engineered structural load simulations for infrastructure
                      projects, maintaining 0.01% error tolerances.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined mt-1 text-on-surface-variant">
                      database
                    </span>
                    <p className="font-body leading-relaxed text-on-surface-variant">
                      Optimized workflow documentation, paving the way for my
                      transition into usability and information architecture.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="absolute top-0 left-[-4px] h-2 w-2 rounded-full bg-outline-variant ring-8 ring-background md:left-1/2 md:-translate-x-1/2" />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-40 max-w-7xl px-8">
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl bg-primary text-on-primary shadow-2xl lg:grid-cols-12">
          <div className="relative min-h-[300px] lg:col-span-5">
            <img
              className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-overlay"
              src={philosophyImg}
              alt="Technical blueprint and architectural schematics"
            />
            <div className="relative flex h-full flex-col justify-center p-12">
              <span className="font-label mb-4 text-xs tracking-widest uppercase opacity-70">
                The Philosophy
              </span>
              <h2 className="mb-6 text-4xl font-bold tracking-tight">
                Why Architecture Matters in UI
              </h2>
            </div>
          </div>
          <div className="flex flex-col justify-center p-12 lg:col-span-7 lg:p-20">
            <p className="font-body mb-8 text-2xl leading-snug font-light italic">
              &quot;Engineering taught me that structure precedes beauty. A bridge
              doesn&apos;t just look stable; it is stable. I bring that same
              requirement for integrity to every digital interface I build.&quot;
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="font-headline mb-1 font-bold text-secondary-fixed">
                  Atomic Precision
                </p>
                <p className="text-sm text-on-primary/60">
                  Every pixel and padding value is calculated for maximum visual
                  balance.
                </p>
              </div>
              <div>
                <p className="font-headline mb-1 font-bold text-secondary-fixed">
                  Empathetic Logic
                </p>
                <p className="text-sm text-on-primary/60">
                  Systems that predict human behavior through structural patterns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
