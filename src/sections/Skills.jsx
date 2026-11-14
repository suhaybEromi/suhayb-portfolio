import { Code2, Server, Bot, Wrench } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { skills } from "../data/skills";
import Reveal from "../components/Reveal";

const icons = [Code2, Server, Bot, Wrench];

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="scroll-mt-24 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-400">
            Technical Expertise
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Skills & Technologies
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Technologies and tools I use to build full-stack applications,
            automate workflows, and deploy production-ready solutions.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skills.map((group, index) => {
            const Icon = icons[index] || Code2;

            return (
              <Reveal
                key={group.category}
                delay={index * 0.08}
                className="h-full"
              >
                <motion.div
                  whileHover={reduceMotion ? undefined : { y: -5 }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                  className="group h-full rounded-2xl border border-white/10 bg-white/3 p-6 transition-colors duration-300 hover:border-teal-500/30 hover:bg-white/5"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-teal-500/20 bg-teal-500/10 text-teal-400">
                      <Icon size={23} />
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map(skill => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/10 bg-[#151D29] px-3 py-2 text-sm text-slate-300 transition-colors duration-200 hover:border-teal-500/30 hover:text-teal-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
