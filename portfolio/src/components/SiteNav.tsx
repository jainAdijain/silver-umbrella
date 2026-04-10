import { Link, NavLink } from 'react-router-dom'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? 'text-slate-900 border-b-2 border-teal-600 pb-1 font-headline font-bold tracking-tight'
    : 'text-slate-500 hover:text-slate-900 transition-colors font-headline font-bold tracking-tight'

export function SiteNav() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-slate-50/70 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <Link
          to="/"
          className="font-headline text-xl font-black tracking-tight text-slate-900"
        >
          The Human Architect
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <NavLink to="/experience" className={linkClass}>
            Experience
          </NavLink>
          <NavLink to="/skills" className={linkClass}>
            Skills
          </NavLink>
          <NavLink to="/education" className={linkClass}>
            Education
          </NavLink>
        </div>
        <Link
          to="/contact"
          className="rounded-lg bg-primary px-6 py-2.5 font-headline font-bold text-on-primary transition-all hover:opacity-90"
        >
          Contact Me
        </Link>
      </div>
    </nav>
  )
}
