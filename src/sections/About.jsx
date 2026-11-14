import {
  ArrowUpRight,
  GraduationCap,
  MapPin,
  Download,
  Code2,
  Bot,
  BriefcaseBusiness,
} from "lucide-react";

import { motion, useReducedMotion } from "motion/react";
import Reveal from "../components/Reveal";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building complete web applications, from frontend interfaces to backend APIs and databases.",
  },
  {
    icon: Bot,
    title: "Business Automation",
    description:
      "Creating browser and desktop automation solutions to simplify repetitive workflows.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Production Experience",
    description:
      "Developing, deploying, and maintaining real-world applications for businesses.",
  },
];

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative scroll-mt-24 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-teal-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
                GET TO KNOW ME
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              About <span className="text-teal-400">Me.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left - Personal introduction */}
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[#101722] p-6 sm:p-9">
              <div>
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-2 text-xs font-medium text-teal-400">
                  <MapPin size={14} />
                  Erbil, Iraq
                </div>

                <h3 className="text-2xl font-semibold leading-snug text-white sm:text-3xl">
                  Developer focused on building
                  <span className="text-teal-400"> real-world solutions.</span>
                </h3>

                <div className="mt-6 space-y-5 text-sm leading-8 text-slate-400 sm:text-base">
                  <p>
                    I'm Suhayb Mohammed, a Full-Stack Developer based in Erbil,
                    Iraq. I specialize in developing web applications using
                    React, Node.js, Express, MongoDB, and MySQL.
                  </p>

                  <p>
                    At First Tech Point, I independently developed the ibsher
                    e-commerce platform, including its customer storefront,
                    multi-vendor administration dashboard, and backend REST
                    APIs.
                  </p>

                  <p>
                    I also work with automation tools such as Puppeteer,
                    Playwright, and Microsoft Power Automate to simplify
                    repetitive tasks and business workflows.
                  </p>

                  <p>
                    I enjoy solving practical problems, learning new
                    technologies, and building applications that people can use.
                  </p>
                </div>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <motion.a
                  href={`${import.meta.env.BASE_URL}CV.pdf`}
                  download="Suhayb-Mohammed-CV.pdf"
                  whileHover={reduceMotion ? undefined : { y: -3 }}
                  className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-teal-400"
                >
                  <Download size={17} />
                  Download CV
                </motion.a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-teal-400/40 hover:text-teal-400"
                >
                  Contact Me
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right - Highlights and education */}
          <div className="flex flex-col gap-5">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-white/10 bg-[#101722] p-6 sm:p-8">
                <h3 className="mb-7 text-lg font-semibold text-white">
                  What I Focus On
                </h3>

                <div className="space-y-7">
                  {highlights.map(item => {
                    const Icon = item.icon;

                    return (
                      <div key={item.title} className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-teal-500/20 bg-teal-500/10 text-teal-400">
                          <Icon size={22} />
                        </div>

                        <div>
                          <h4 className="font-semibold text-white">
                            {item.title}
                          </h4>

                          <p className="mt-2 text-sm leading-6 text-slate-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="flex-1">
              <motion.div
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[#101722] p-6 transition-colors hover:border-teal-500/30 sm:p-8"
              >
                <div>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-teal-500/20 bg-teal-500/10 text-teal-400">
                    <GraduationCap size={24} />
                  </div>

                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal-400">
                    EDUCATION
                  </p>

                  <h3 className="text-xl font-semibold text-white">
                    Diploma in Information Technology
                  </h3>

                  <p className="mt-3 text-sm text-slate-300">
                    Xabat Polytechnic Institute
                  </p>
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-sm text-slate-400">2021 – 2023</span>

                  <GraduationCap size={19} className="text-teal-400" />
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
