import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";

const projects = [
  {
    id: "ibsher",

    title: "ibsher — Storefront & Marketplace Admin",

    subtitle: "Full-Stack Multi-Vendor E-Commerce Platform",

    description:
      "Independently designed, developed, tested, and deployed ibsher, a production multi-vendor e-commerce platform. Built the customer-facing storefront, marketplace administration dashboard, REST APIs, and MongoDB database architecture. The platform connects customers, vendors, and administrators through a complete e-commerce management system.",

    image: `${import.meta.env.BASE_URL}images/ibsher.webp`,

    imageAlt:
      "ibsher customer e-commerce storefront and marketplace administration dashboard featuring product shopping, vendor management, orders, and business analytics",

    liveUrl: "https://ibsher.com",

    displayUrl: "ibsher.com",

    githubUrl: "",

    features: [
      "Customer storefront with product search, categories, deals, wishlist, and shopping cart",
      "Secure customer authentication, checkout, and order tracking",
      "Marketplace admin dashboard for products, vendors, inventory, and orders",
      "Sales analytics, commissions, vendor payments, and financial reports",
      "Multilingual support for Arabic, English, and Kurdish",
      "REST APIs, MongoDB integration, and production deployment using Nginx and PM2",
    ],

    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "JWT",
      "Tailwind CSS",
      "Nginx",
      "PM2",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <Reveal>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-teal-400">
                <span className="h-px w-8 bg-teal-400" />
                SELECTED WORK
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Projects that speak
                <br />
                <span className="text-slate-500">through real work.</span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
                A selection of applications I've built, from frontend interfaces
                to backend systems and production deployment.
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2.5">
              <BriefcaseBusiness size={17} className="text-teal-400" />

              <span className="text-sm text-slate-300">
                Production Experience
              </span>
            </div>
          </div>
        </Reveal>

        {/* Project cards */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
