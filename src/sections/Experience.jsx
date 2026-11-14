import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  ArrowUpRight,
  Check,
} from "lucide-react";

import { motion, useReducedMotion } from "motion/react";
import { experiences } from "../data/experience";
import Reveal from "../components/Reveal";

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative scroll-mt-24 px-5 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-teal-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
                MY CAREER
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Professional
              <span className="text-teal-400"> Experience.</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
              My professional journey in full-stack development, website
              management, and production application deployment.
            </p>
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute bottom-5 left-3 top-4 w-px bg-linear-to-b from-teal-400/70 via-teal-400/20 to-transparent sm:left-5" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Reveal key={experience.id} delay={index * 0.1}>
                <div className="relative pl-10 sm:pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-7 flex h-6 w-6 items-center justify-center rounded-full border border-teal-500/30 bg-[#0B0F17] sm:left-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
                  </div>

                  <motion.article
                    whileHover={reduceMotion ? undefined : { y: -4 }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="group rounded-2xl border border-white/10 bg-[#101722] p-6 transition-colors duration-300 hover:border-teal-500/30 sm:p-8"
                  >
                    {/* Header */}
                    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                      <div>
                        <div className="mb-4 flex items-center gap-2">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400">
                            <BriefcaseBusiness size={19} />
                          </div>

                          {experience.current && (
                            <span className="rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-400">
                              Current Position
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl font-bold text-white sm:text-2xl">
                          {experience.position}
                        </h3>

                        <p className="mt-2 text-base font-medium text-teal-400">
                          {experience.company}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
                        <span className="inline-flex items-center gap-2">
                          <CalendarDays size={15} />
                          {experience.startDate} - {experience.endDate}
                        </span>

                        <span className="inline-flex items-center gap-2">
                          <MapPin size={15} />
                          {experience.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mt-7 space-y-3">
                      {experience.achievements.map(item => (
                        <div key={item} className="flex items-start gap-3">
                          <Check
                            size={17}
                            className="mt-1 shrink-0 text-teal-400"
                          />

                          <p className="text-sm leading-7 text-slate-300">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                      {experience.technologies.map(tech => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-teal-500/30 hover:text-teal-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-xs uppercase tracking-widest text-slate-500">
                        {experience.employmentType}
                      </span>

                      <ArrowUpRight
                        size={18}
                        className="text-slate-600 transition-colors group-hover:text-teal-400"
                      />
                    </div>
                  </motion.article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
