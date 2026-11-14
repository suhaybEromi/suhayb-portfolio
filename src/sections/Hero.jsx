import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Server,
  Database,
  Bot,
  Mail,
  MapPin,
} from "lucide-react";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import { motion, useReducedMotion } from "motion/react";

const expertise = [
  {
    title: "Frontend",
    value: "React.js",
    Icon: Code2,
  },
  {
    title: "Backend",
    value: "Node.js & Express",
    Icon: Server,
  },
  {
    title: "Databases",
    value: "MongoDB & MySQL",
    Icon: Database,
  },
  {
    title: "Automation",
    value: "Web & Desktop",
    Icon: Bot,
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/suhaybEromi",
    Icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/suhayb-mohammed-2797172a7/",
    Icon: FaLinkedin,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/9647500484170",
    Icon: FaWhatsapp,
  },
  {
    name: "Email",
    href: "mailto:suhaibmohammed425@gmail.com",
    Icon: Mail,
  },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.65,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section
      id="home"
      className="relative isolate scroll-mt-24 overflow-hidden px-5 py-20"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-125 w-125 rounded-full bg-teal-500/8 blur-[130px]" />

      <div className="pointer-events-none absolute -left-64 bottom-0 -z-10 h-100 w-100 rounded-full bg-cyan-500/5 blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          {/* Left content */}
          <div>
            <motion.div {...fadeUp(0)}>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
                </span>

                <span className="text-xs font-medium tracking-wide text-teal-300">
                  OPEN TO WORK OPPORTUNITIES
                </span>
              </div>
            </motion.div>

            <motion.p
              {...fadeUp(0.08)}
              className="mb-5 flex items-center gap-2 text-base text-slate-400 sm:text-lg"
            >
              Hello, I'm
              <span className="font-semibold text-white">Suhayb Mohammed</span>
            </motion.p>

            <motion.h1
              {...fadeUp(0.15)}
              className="text-[clamp(2.65rem,5.6vw,5.2rem)] font-bold leading-[1.1] tracking-tight text-white"
            >
              Building things
              <br />
              that{" "}
              <span className="bg-linear-to-r from-teal-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
                actually work.
              </span>
            </motion.h1>

            <motion.div {...fadeUp(0.22)} className="mt-7">
              <h2 className="text-lg font-semibold text-white sm:text-xl">
                Full-Stack Developer
                <span className="mx-2 text-teal-400">/</span>
                Automation
              </h2>

              <p className="mt-4 max-w-xl text-base leading-8 text-slate-400">
                I build scalable web applications, develop REST APIs, work with
                databases, and automate workflows using React, Node.js,
                Puppeteer, Playwright, and Microsoft Power Automate.
              </p>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              {...fadeUp(0.3)}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <motion.a
                href="#projects"
                whileHover={reduceMotion ? undefined : { y: -3 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-teal-400"
              >
                Explore My Work
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={reduceMotion ? undefined : { y: -3 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/3 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-teal-400/50 hover:text-teal-400"
              >
                Let's Talk
                <ArrowUpRight size={17} />
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              {...fadeUp(0.38)}
              className="mt-11 flex flex-wrap items-center gap-3"
            >
              {socialLinks.map(({ name, href, Icon }) => (
                <motion.a
                  key={name}
                  href={href}
                  target={name === "Email" ? undefined : "_blank"}
                  rel={name === "Email" ? undefined : "noopener noreferrer"}
                  aria-label={name}
                  title={name}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.95 }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-teal-500/40 hover:bg-teal-500/10 hover:text-teal-400"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              {...fadeUp(0.45)}
              className="mt-8 flex items-center gap-2 text-sm text-slate-500"
            >
              <MapPin size={16} className="text-teal-400" />
              Based in Erbil, Iraq
            </motion.div>
          </div>

          {/* Right expertise panel */}
          <motion.div {...fadeUp(0.25)} className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101722] p-5 shadow-2xl shadow-black/20 sm:p-7">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-teal-400">
                    WHAT I DO
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-white">
                    My Expertise
                  </h3>
                </div>

                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-teal-400/80" />
                  <span className="h-2 w-2 rounded-full bg-cyan-400/40" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {expertise.map((item, index) => {
                  const Icon = item.Icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={reduceMotion ? false : { opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.5,
                        delay: reduceMotion ? 0 : 0.4 + index * 0.1,
                      }}
                      whileHover={reduceMotion ? undefined : { y: -4 }}
                      className="rounded-2xl border border-white/10 bg-[#17212E] p-5 transition-colors hover:border-teal-500/30"
                    >
                      <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-teal-400/15 bg-teal-500/10">
                        <Icon size={21} className="text-teal-400" />
                      </div>

                      <p className="text-xs text-slate-500">{item.title}</p>

                      <p className="mt-1 text-sm font-semibold text-white">
                        {item.value}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
                <div>
                  <p className="text-sm font-medium text-white">
                    Production Experience
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    MERN applications & deployment
                  </p>
                </div>

                <span className="rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1.5 text-xs font-medium text-teal-400">
                  MERN Stack
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
