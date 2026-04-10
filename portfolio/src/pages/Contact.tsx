export function Contact() {
  return (
    <main className="mx-auto max-w-7xl px-8 pt-32 pb-24">
      <header className="mb-12">
        <span className="font-label mb-4 inline-block rounded-full bg-secondary-container px-4 py-1 text-xs font-bold tracking-widest text-on-secondary-container uppercase">
          Get in touch
        </span>
        <h1 className="font-headline mb-6 text-5xl font-bold tracking-tight text-on-surface md:text-6xl">
          Let&apos;s build something precise—and human.
        </h1>
        <p className="max-w-2xl text-lg text-on-surface-variant">
          This route mirrors the &quot;Contact Me&quot; action in your Stitch
          navigation. Connect via email or social links in the footer.
        </p>
      </header>
      <div className="rounded-xl border border-outline-variant/15 bg-surface-container-low p-10">
        <p className="mb-6 font-body text-on-surface-variant">
          Replace with your preferred contact method (form provider, Cal.com, or
          mailto).
        </p>
        <a
          href="mailto:hello@example.com"
          className="inline-flex rounded-lg bg-primary px-8 py-4 font-headline font-bold text-on-primary transition-opacity hover:opacity-90"
        >
          hello@example.com
        </a>
      </div>
    </main>
  )
}
