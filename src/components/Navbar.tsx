import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

const navLinks = ['Proyectos', 'Skills', 'Sobre mí', 'Contacto']

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()

  const navLinksOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const navLinksTranslate = useTransform(scrollY, [0, 300], [0, -10])

  return (
    <header className="fixed top-0 inset-x-0 z-10 px-5 sm:px-8 py-4 sm:py-5 flex flex-row justify-between items-center bg-transparent">
      {/* Logo */}
      <a href="#" className="flex items-center gap-3 no-underline">
        <span className="text-[21px] sm:text-[26px] tracking-tight text-black font-medium select-none">
          Maxi.dev&gt;
        </span>
        <span className="text-[25px] sm:text-[30px] text-black select-none tracking-[-0.02em] font-medium leading-none mb-1">
          &#10033;
        </span>
      </a>

      {/* Desktop Nav Links */}
      <motion.nav
        style={{ opacity: navLinksOpacity, y: navLinksTranslate }}
        className="hidden md:flex flex-row items-center gap-1 text-[23px] text-black pointer-events-auto"
      >
        {navLinks.map((link, i) => (
          <span key={link} className="flex items-center">
            <a
              href={`#${link.toLowerCase().replace(/ /g, '-')}`}
              className="hover:opacity-60 transition-opacity no-underline text-black"
            >
              {link}
            </a>
            {i < navLinks.length - 1 && (
              <span className="opacity-40 mx-1">&nbsp;,&nbsp;</span>
            )}
          </span>
        ))}
      </motion.nav>

      {/* Desktop CTA */}
      <motion.a
        href="#contacto"
        style={{ opacity: navLinksOpacity, y: navLinksTranslate }}
        className="hidden md:block text-[23px] text-black underline underline-offset-2 hover:opacity-60 transition-opacity no-underline pointer-events-auto"
      >
        Hablemos
      </motion.a>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-[2px] bg-black transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-[7px]' : ''
          }`}
        />
        <span
          className={`block w-6 h-[2px] bg-black transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block w-6 h-[2px] bg-black transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-[7px]' : ''
          }`}
        />
      </button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9] bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                className="text-3xl text-black hover:opacity-60 transition-opacity no-underline"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#contacto"
              className="text-3xl text-black underline underline-offset-2 hover:opacity-60 transition-opacity no-underline"
              onClick={() => setIsOpen(false)}
            >
              Hablemos
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
