import { ArrowUp, ArrowUpRight, Heart, Mail, MapPin } from "lucide-react";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import { motion, useReducedMotion } from "motion/react";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/suhaybEromi",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/suhayb-mohammed-2797172a7/",
    icon: FaLinkedin,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/9647500484170",
    icon: FaWhatsapp,
  },
  {
    name: "Email",
    href: "mailto:suhaibmohammed425@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  const reduceMotion = useReducedMotion();
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080C13] px-5 pt-16 lg:px-8">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-teal-500/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 pb-14 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#home"
              className="inline-flex items-center text-3xl font-bold tracking-tight text-white"
              aria-label="Suhayb Mohammed - Home"
            >
              Suhayb
              <span className="text-teal-400">.</span>
              <span className="text-slate-300">dev</span>
            </a>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Full-Stack Developer focused on building modern web applications,
              business automation, and practical software solutions.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
              <MapPin size={16} className="text-teal-400" />
              Erbil, Iraq
            </div>

            {/* Social icons */}
            <div className="mt-7 flex flex-wrap gap-3">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <motion.a
                  key={name}
                  href={href}
                  target={name === "Email" ? undefined : "_blank"}
                  rel={name === "Email" ? undefined : "noopener noreferrer"}
                  aria-label={name}
                  title={name}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-teal-500/30 hover:bg-teal-500/10 hover:text-teal-400"
                >
                  <Icon size={19} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>

            <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4">
              {footerLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-fit text-sm text-slate-400 transition-colors hover:text-teal-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white">Let's Connect</h3>

            <p className="mt-6 text-sm leading-7 text-slate-400">
              Interested in a full-stack development or automation opportunity?
              Feel free to reach out.
            </p>

            <a
              href="mailto:suhaibmohammed425@gmail.com"
              className="mt-5 inline-flex max-w-full items-center gap-2 break-all text-sm font-medium text-teal-400 transition-colors hover:text-teal-300"
            >
              <Mail size={17} className="shrink-0" />
              suhaibmohammed425@gmail.com
              <ArrowUpRight size={15} className="shrink-0" />
            </a>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-center text-xs text-slate-500 sm:text-left">
            © {year} Suhayb Mohammed. All rights reserved.
          </p>

          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            aria-label="Back to top"
            className="cursor-pointer flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-xs font-medium text-slate-400 transition-colors hover:border-teal-500/30 hover:text-teal-400"
          >
            Back to Top
            <ArrowUp size={15} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
