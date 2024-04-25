import { useEffect } from 'react'
import Hero from '../../components/Hero'
import Projects from '../../components/Projects'

export default function Home() {
  useEffect(() => {
    const updateActiveLink = () => {
      const links = document.querySelectorAll('.nav-link')
      links.forEach((link) => {
        const section = document.querySelector(link.getAttribute('href'))
        if (section) {
          const sectionRect = section.getBoundingClientRect()
          if (
            sectionRect.top <= 0 &&
            sectionRect.bottom >= window.innerHeight * 0.2
          ) {
            link.classList.add('active')
          } else {
            link.classList.remove('active')
          }
        }
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateActiveLink()
          }
        })
      },
      { threshold: 0.7 }
    )

    window.onload = () => {
      const sections = document.querySelectorAll('section')
      sections.forEach((section) => observer.observe(section))
      updateActiveLink()
    }

    window.addEventListener('scroll', updateActiveLink)

    return () => {
      window.removeEventListener('scroll', updateActiveLink)
    }
  }, [])

  return (
    <>
      <Hero />
      <Projects />
    </>
  )
}
