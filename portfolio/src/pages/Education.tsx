const uniImg =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDZGpQwFvSHMyfgu9otv855cdawHq72l6ra2cz0RLf09MJtJcQ1rtcj505Nb_3hwTUs6Ag96Ic5gGGLslq9THw-FI8NUn8_fYuTfBC47DmZXjic8U81ToteySxXGGCpMd5kYKh8lRSmlYN5pQ2DR-J6mOonc3FjEh9yLNLqwDt7M8rJYK6lKObHDzUh-cSatNcBYVWadx87UUpLwoB5O3cJ_BQWV9FW0AX0n6nm63qyEnZfr8yDCIsFTx_gsX1ML1zZ2g30kL3_N6w'

const nngImg =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCgsUNpAjzKTqJHdbfuV_IY4zy7lXF8hc7SxdZ4L8dYXrDqFETkbYb2hjHBlsD4X0TeH9S1j9vhhNxU92T2f8VtzvJw6oTIOPe-dyUA49qAI7urZXvaaN4j5vYXDIKmwWCGXjXd5gh2zMeHFaWs6MJ3u-kF4cuzaNUTO8eJlsImMQjcp7Vt4FlTVn7B2rKCqutvEx8agKUnKSq_ckdwfJFr_uHzY8OCrVnyTH4wSZ2157XH5TMLDKfcd9DWdmB4RJ4IUqYE-fzIeXE'

const stanfordImg =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAr2hR-PGKPpiAwfCiLqMrC-MA0ly2h9kU8C7-ryRV2ixXld7DjBekoIUsCwtO2rLYbZ2yc9q_61eN7ylEtq2fYUueEZAAdYUJdgQf8uuUt7LLHXPZuz7Tqe_Z32YPkwOZoVyjOWfyxbu0dgA7kSbdQYa5Y4EXJK7u8vDSTZG-d-cRtAW71VsDH1ZjfJgCD-4h6_PKQohS0vYENFaor4iGArPvvgDUW7Lp7vFnOuvtw5lKQ7OKiIN8mEmAIHetC4TLLVulMPOb-meI'

const googleCertImg =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBtou7US4U1V0rapyTbVLYMBKM-BwptS6aR0gj7ks8-CSCREsncUl1UZ4rHe_U08UOnpxV8ihD5cc470g15sccN2ZE2SvHGy3Qe4JOrVEhLx4hznIohstHasRmYNkRFcSpVzT0y6pCh7BvVqPu7cjRrkydhgmuhQ4OLWmwNnOQoBHc5w3WzUfudmsVITKlaGPWTigvuPnKGBdyuhceRNJ_876-TKmoKoE1xkKUsfo1W2dU0sfJKY6OwpTU5LP-p2LtOiDtWquKxzdM'

const awsCertImg =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCM7rpvDWnZ5tzX6H7G8W5SbXKYw5sjU_DAbo-rrtJqFEhH8AnpeWosLtb3tkc7N9doDHbMmBqkMOC3SN-y3xZDqKuQBHREFCLUJKOglT0Zt_r6Jp81Ah5ykvrT2Gpka6RtArL6Obm54_fayLaOZ2vO4QwUOz7IIFc2t-WYq2L3L074zaYN7QDdTMlAGXkpTBk9gB8pK4__kUet-EffYRpkbWkkkKZVtCPLiWL7oVo2-t75i_RkC9ZCvCATot6mrNzvdLdjf4wg9LM'

export function Education() {
  return (
    <main className="mx-auto max-w-7xl px-8 pt-32 pb-20">
      <header className="mb-20">
        <span className="font-label mb-4 block text-xs font-bold tracking-[0.2em] text-secondary uppercase">
          Academic & Professional
        </span>
        <h1 className="mb-6 text-6xl leading-none font-bold tracking-tighter text-on-surface md:text-7xl">
          The Blueprint of <br />
          <span className="text-primary italic">Continuous Growth</span>
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-on-surface-variant">
          Synthesizing technical rigor from engineering disciplines with the
          human-centric principles of modern experience design.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <section className="group relative overflow-hidden rounded-xl bg-surface-container-lowest p-10 md:col-span-8">
          <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity group-hover:opacity-10">
            <span className="material-symbols-outlined text-9xl">architecture</span>
          </div>
          <div className="relative z-10">
            <div className="mb-12 flex items-start justify-between">
              <div className="rounded-xl bg-surface-container-low p-4">
                <img
                  className="h-16 w-16 object-contain grayscale"
                  src={uniImg}
                  alt="University emblem"
                />
              </div>
              <span className="font-headline font-medium text-on-surface-variant">
                2014 — 2018
              </span>
            </div>
            <h2 className="font-label mb-2 text-sm font-bold tracking-widest text-secondary uppercase">
              Academic Degree
            </h2>
            <h3 className="mb-4 text-4xl leading-tight font-bold text-on-surface">
              Bachelor of Science in <br />
              Systems Engineering
            </h3>
            <p className="mb-8 max-w-lg text-lg text-on-surface-variant">
              Focus on human-computer interaction, ergonomics, and structural
              optimization. Graduated with honors, specializing in complex system
              modeling.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded bg-surface-variant px-3 py-1 text-xs font-bold tracking-tighter text-on-surface-variant">
                MAGNA CUM LAUDE
              </span>
              <span className="rounded bg-surface-variant px-3 py-1 text-xs font-bold tracking-tighter text-on-surface-variant">
                DEAN&apos;S LIST
              </span>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-between rounded-xl bg-primary p-10 text-on-primary md:col-span-4">
          <div>
            <div className="mb-12 w-fit rounded-xl bg-white/10 p-4 backdrop-blur-md">
              <img
                className="h-12 w-auto brightness-200"
                src={nngImg}
                alt="Nielsen Norman Group"
              />
            </div>
            <h2 className="font-label mb-2 text-sm font-bold tracking-widest uppercase opacity-70">
              Professional Credential
            </h2>
            <h3 className="mb-4 text-3xl leading-tight font-bold">
              NN/g UX Certification
            </h3>
          </div>
          <div>
            <p className="mb-6 text-sm leading-relaxed opacity-80">
              Advanced specialization in UX Management and Interaction Design.
              Validated through rigorous performance examinations.
            </p>
            <div className="flex items-center gap-2 font-headline font-bold">
              <span className="material-symbols-outlined">verified</span>
              ID: UXC-1049283
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-outline-variant/15 bg-surface-container-low p-8 md:col-span-5">
          <div className="flex h-full flex-col">
            <div className="mb-8">
              <img
                className="h-10 w-auto opacity-60"
                src={stanfordImg}
                alt="Design institute logo"
              />
            </div>
            <div className="mt-auto">
              <span className="font-label text-xs font-bold tracking-widest text-secondary uppercase">
                Post-Graduate Study
              </span>
              <h3 className="mt-2 mb-4 text-2xl font-bold text-on-surface">
                Design Strategy & Foresight
              </h3>
              <div className="flex items-center justify-between text-sm font-medium text-on-surface-variant">
                <span>Stanford Continuing Studies</span>
                <span>2021</span>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-6 md:col-span-7">
          <div className="flex flex-col justify-between rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-6">
            <img className="mb-6 h-8 w-8" src={googleCertImg} alt="Google UX" />
            <div>
              <h4 className="text-lg font-bold text-on-surface">Google UX Design</h4>
              <p className="mt-1 text-xs text-on-surface-variant">
                Professional Certificate · 2022
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-6">
            <img className="mb-6 h-8 w-8" src={awsCertImg} alt="AWS" />
            <div>
              <h4 className="text-lg font-bold text-on-surface">AWS Practitioner</h4>
              <p className="mt-1 text-xs text-on-surface-variant">
                Cloud Architecture · 2023
              </p>
            </div>
          </div>
          <div className="col-span-2 flex items-center gap-6 rounded-xl bg-surface-container-low p-6">
            <div className="rounded-lg bg-white p-3 shadow-sm">
              <span className="material-symbols-outlined text-3xl text-tertiary">
                terminal
              </span>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-on-surface">
                Advanced Agile Project Management
              </h4>
              <p className="text-sm text-on-surface-variant">
                Scrum Alliance · Certified Scrum Master (CSM)
              </p>
            </div>
            <div className="text-right">
              <span className="font-headline text-xs font-bold text-on-surface-variant">
                ISSUED 2020
              </span>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-24 grid grid-cols-2 gap-12 border-t border-slate-200/15 pt-12 md:grid-cols-4">
        {[
          ['120+', 'Training Hours'],
          ['08', 'Certifications'],
          ['02', 'Global Awards'],
          ['14', 'Case Studies'],
        ].map(([num, label]) => (
          <div key={label}>
            <div className="font-headline mb-2 text-5xl font-bold text-tertiary">
              {num}
            </div>
            <div className="font-label text-xs tracking-widest text-on-surface-variant uppercase">
              {label}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
