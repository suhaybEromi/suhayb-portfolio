import {
  Bot,
  Globe2,
  FileSpreadsheet,
  CheckCircle2,
  Video,
} from "lucide-react";

import { motion, useReducedMotion } from "motion/react";
import Reveal from "../components/Reveal";

// Add more automation projects to this array in the future.
const automations = [
  {
    id: 1,
    title: "Multi-Website Data Entry",
    subtitle: "Browser Automation",
    icon: Globe2,

    description:
      "Developed automation to handle repetitive data-entry tasks across three websites, simplifying multi-platform workflows.",

    features: [
      "Automated data entry across three websites",
      "Reduced repetitive manual form entry",
      "Simplified multi-platform data management",
    ],

    technologies: ["Puppeteer", "Browser Automation", "Data Entry"],

    video: `${import.meta.env.BASE_URL}videos/automation-video.mp4`,
  },

  {
    id: 2,
    title: "Excel-Driven Website Automation",
    subtitle: "Excel Upload & Automated Data Entry",
    icon: FileSpreadsheet,

    description:
      "Built an automation workflow that accepts an uploaded Excel file and uses its data to automatically complete website data-entry tasks.",

    features: [
      "Upload an Excel file containing the required data",
      "Automatically process data from the uploaded file",
      "Enter the data into website forms",
    ],

    technologies: ["Excel", "Browser Automation", "Data Entry"],

    video: `${import.meta.env.BASE_URL}videos/excel-automation.mp4`,
  },
];

export default function Automation() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="automation"
      className="relative scroll-mt-24 px-5 pt-8 pb-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-teal-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
                AUTOMATION DEVELOPMENT
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Automation
              <span className="text-teal-400"> Solutions.</span>
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400">
              Real-world automation projects that simplify repetitive tasks and
              improve business workflows.
            </p>
          </div>
        </Reveal>

        {/* Two-column automation grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {automations.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.id} delay={index * 0.1} className="h-full">
                <motion.article
                  whileHover={reduceMotion ? undefined : { y: -5 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#101722] transition-colors duration-300 hover:border-teal-500/30"
                >
                  {/* Video preview */}
                  <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-[#0B111A]">
                    <video
                      key={item.id}
                      controls
                      preload="metadata"
                      playsInline
                      aria-label={`${item.title} demonstration`}
                      className="block h-full w-full object-contain"
                    >
                      <source src={item.video} type="video/mp4" />
                      Your browser does not support video.
                    </video>
                  </div>

                  {/* Card content */}
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    {/* Category and number */}
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400">
                        <Icon size={17} />
                        {item.subtitle}
                      </div>

                      <span className="text-xs font-medium text-slate-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                      {item.title}
                      <span className="text-teal-400">.</span>
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {item.description}
                    </p>

                    {/* Key features */}
                    <div className="mt-6 space-y-3">
                      {item.features.map(feature => (
                        <div key={feature} className="flex items-start gap-3">
                          <CheckCircle2
                            size={16}
                            className="mt-1 shrink-0 text-teal-400"
                          />

                          <span className="text-sm leading-6 text-slate-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {item.technologies.map(tech => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors duration-200 hover:border-teal-500/30 hover:text-teal-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Bottom label */}
                    <div className="mt-7 flex items-center justify-between gap-2 border-t border-white/10 pt-5">
                      <span className="flex items-center gap-2 text-xs text-slate-500">
                        <Bot size={15} />
                        Automation Project
                      </span>

                      <span className="flex items-center gap-2 text-xs font-medium text-teal-400">
                        <Video size={15} />
                        Video Demo
                      </span>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
