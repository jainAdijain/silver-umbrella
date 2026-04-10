import { Outlet } from 'react-router-dom'
import { SiteFooter } from './SiteFooter'
import { SiteNav } from './SiteNav'

export function Layout() {
  return (
    <div className="min-h-svh bg-surface text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">
      <SiteNav />
      <div className="pt-20">
        <Outlet />
      </div>
      <SiteFooter />
    </div>
  )
}
