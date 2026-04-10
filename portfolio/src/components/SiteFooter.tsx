import { Link } from 'react-router-dom'

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-slate-200/15 bg-slate-100 py-12 dark:border-slate-800/15 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-8 md:flex-row">
        <p className="font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          © 2024 The Human Architect. Built with Precision & Empathy.
        </p>
        <div className="flex gap-8">
          <a
            className="text-slate-500 transition-colors hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400"
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-slate-500 transition-colors hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400"
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <Link
            className="text-slate-500 transition-colors hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400"
            to="/"
          >
            Portfolio
          </Link>
          <Link
            className="text-slate-500 transition-colors hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400"
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
