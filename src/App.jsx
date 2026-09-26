import { useEffect, useState } from 'react'
import useReveal from './hooks/useReveal.js'
import Navbar from './components/Navbar.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import DesignWeb from './pages/DesignWeb.jsx'
import Marketing from './pages/Marketing.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Project from './pages/Project.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import Review from './pages/Review.jsx'
const pageOf = h => (h.startsWith('#/proyecto/') ? h.slice(2) : h === '#/proyectos' ? 'projects' : h === '#/valorar' ? 'review' : h === '#/diseno-web' ? 'web' : h === '#/marketing-digital' ? 'mk' : h === '#/sobre-nosotros' ? 'about' : h === '#/contacto' ? 'contact' : 'home')
const pages = { home: Home, web: DesignWeb, mk: Marketing, about: About, contact: Contact, projects: ProjectsPage, review: Review }
export default function App() {
  const [page, setPage] = useState(pageOf(location.hash))
  useEffect(() => {
    const f = () => {
      const h = location.hash
      if (!h.startsWith('#/')) return
      setPage(pageOf(h))
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', f)
    return () => window.removeEventListener('hashchange', f)
  }, [])
  useEffect(() => {
    const f = e => {
      const c = e.target.closest('.sc,.mk article,.tc,.idea article')
      if (!c) return
      const r = c.getBoundingClientRect()
      c.style.setProperty('--x', e.clientX - r.left + 'px'); c.style.setProperty('--y', e.clientY - r.top + 'px')
    }
    window.addEventListener('mousemove', f)
    return () => window.removeEventListener('mousemove', f)
  }, [])
  useReveal(page)
  const Page = page.startsWith('proyecto/') ? Project : pages[page]
  return (<><Navbar /><main><Page slug={page.slice(9)} /></main>{page !== 'contact' && <FinalCTA />}<Footer /></>)
}
