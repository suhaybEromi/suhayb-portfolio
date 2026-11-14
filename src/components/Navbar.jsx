import { useState } from "react";
import { Menu, X, Download, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Automation", href: "#automation" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B0F17]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-5 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group inline-flex shrink-0 items-center gap-1 text-2xl font-bold tracking-tight text-white"
          aria-label="Suhayb Mohammed - Home"
        >
          Suhayb
          <span className="text-teal-400 transition-colors group-hover:text-cyan-300">
            .
          </span>
          <span className="text-slate-300">dev</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-teal-400 transition-all duration-300 hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop CV */}
        <a
          href={`${import.meta.env.BASE_URL}CV.pdf`}
          download="Suhayb-Mohammed-CV.pdf"
          className="hidden shrink-0 items-center gap-2 rounded-xl border border-teal-400/20 bg-teal-500 px-5 py-3 text-sm font-semibold text-[#071A19] shadow-lg shadow-teal-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-400 hover:shadow-teal-500/20 lg:inline-flex"
        >
          <Download size={17} />
          Download CV
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="cursor-pointer inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:border-teal-400/40 hover:text-teal-400 lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-[#0B0F17] lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-5">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: reduceMotion ? 0 : index * 0.04,
                    duration: reduceMotion ? 0 : 0.2,
                  }}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-teal-400"
                >
                  {link.name}
                  <ArrowUpRight size={15} className="text-slate-500" />
                </motion.a>
              ))}

              <a
                href={`${import.meta.env.BASE_URL}CV.pdf`}
                download="CV.pdf"
                onClick={closeMenu}
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-teal-400"
              >
                <Download size={17} />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
