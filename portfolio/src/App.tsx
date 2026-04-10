import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Contact } from './pages/Contact'
import { Education } from './pages/Education'
import { Experience } from './pages/Experience'
import { Home } from './pages/Home'
import { Skills } from './pages/Skills'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="experience" element={<Experience />} />
        <Route path="skills" element={<Skills />} />
        <Route path="education" element={<Education />} />
        <Route path="contact" element={<Contact />} />
        <Route path="work" element={<Navigate to="/experience" replace />} />
        <Route path="about" element={<Navigate to="/education" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
