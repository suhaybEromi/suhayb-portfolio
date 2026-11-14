import { ArrowUpRight, ExternalLink, CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Reveal from "./Reveal";

export default function ProjectCard({ project, index = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <Reveal delay={index * 0.1}>
      <article className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#101722] transition-colors duration-300 hover:border-teal-500/30">
        {/* Top accent */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-teal-400/50 to-transparent" />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          {/* Project information */}
          <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
            <div className="mb-8 flex items-center gap-3">
              <span className="text-xs font-semibold tracking-widest text-teal-400">
                {index === 0 ? "FEATURED PROJECT" : "SELECTED PROJECT"}
              </span>

              <span className="h-px w-10 bg-teal-400/40" />

              <span className="text-xs text-slate-500">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {project.title}
              <span className="text-teal-400">.</span>
            </h3>

            <p className="mt-3 text-sm font-medium text-teal-400">
              {project.subtitle}
            </p>

            <p className="mt-6 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
              {project.description}
            </p>

            {/* Features */}
            <div className="mt-8 space-y-3">
              {project.features.map(feature => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-teal-400"
                  />

                  <span className="text-sm text-slate-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="mt-9 flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-10 flex flex-wrap gap-4">
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduceMotion ? undefined : { y: -3 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-teal-400"
              >
                Visit Live Website
                <ArrowUpRight size={17} />
              </motion.a>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-teal-400/40 hover:text-teal-400"
                >
                  View Source
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Visual side */}
          <div className="relative flex min-h-75 items-center justify-center overflow-hidden border-t border-white/10 bg-[#0B111A] p-5 sm:p-9 lg:min-h-125 lg:border-l lg:border-t-0">
            {/* Decorative grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/10 blur-[100px]" />

            {/* Browser mockup */}
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -5 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative z-10 w-full"
            >
              <img
                src={project.image}
                alt={project.imageAlt}
                loading="lazy"
                className="block h-auto w-full rounded-xl object-contain"
              />
            </motion.div>

            {/* Decorative labels */}
            <div className="absolute bottom-5 left-5 text-[10px] font-medium uppercase tracking-widest text-slate-500">
              REAL PRODUCTION PROJECT
            </div>

            <div className="absolute bottom-5 right-5 flex items-center gap-2 text-[10px] uppercase tracking-widest text-teal-400">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              LIVE WEBSITE
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
