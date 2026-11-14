import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Copy,
  Check,
} from "lucide-react";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Reveal from "../components/Reveal";

const email = "suhaibmohammed425@gmail.com";

const contactLinks = [
  {
    name: "Email",
    value: email,
    href: `mailto:${email}`,
    icon: Mail,
  },
  {
    name: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/9647500484170",
    icon: FaWhatsapp,
  },
  {
    name: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/suhayb-mohammed-2797172a7/",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    value: "Explore my repositories",
    href: "https://github.com/suhaybEromi",
    icon: FaGithub,
  },
];

export default function Contact() {
  const reduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const updateField = event => {
    const { name, value } = event.target;

    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const subject = encodeURIComponent(form.subject.trim());

    const body = encodeURIComponent(
      `Name: ${form.name.trim()}\n` +
        `Email: ${form.email.trim()}\n\n` +
        form.message.trim(),
    );

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(email)}` +
      `&su=${subject}` +
      `&body=${body}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="relative scroll-mt-24 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-teal-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
                GET IN TOUCH
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let's build something
              <span className="text-teal-400"> great.</span>
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400">
              I'm interested in full-stack development, automation, and software
              engineering opportunities. Have a position or project in mind? I'd
              be happy to hear from you.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left contact information */}
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[#101722] p-6 sm:p-8">
              <div>
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-teal-400" />

                  <span className="text-xs font-medium text-teal-400">
                    OPEN TO OPPORTUNITIES
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  Let's connect.
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Reach out through email, WhatsApp, or my professional
                  profiles.
                </p>

                {/* Contact links */}
                <div className="mt-8 space-y-3">
                  {contactLinks.map(item => {
                    const Icon = item.icon;

                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        target={item.name === "Email" ? undefined : "_blank"}
                        rel={
                          item.name === "Email"
                            ? undefined
                            : "noopener noreferrer"
                        }
                        whileHover={reduceMotion ? undefined : { x: 4 }}
                        className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/3 p-4 transition-colors hover:border-teal-500/30 hover:bg-teal-500/5"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400">
                          <Icon size={19} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-xs text-slate-500">{item.name}</p>

                          <p className="mt-1 break-all text-sm font-medium text-white">
                            {item.value}
                          </p>
                        </div>

                        <ArrowUpRight
                          size={17}
                          className="shrink-0 text-slate-500 transition-colors group-hover:text-teal-400"
                        />
                      </motion.a>
                    );
                  })}
                </div>

                {/* Copy email */}
                <button
                  type="button"
                  onClick={handleCopy}
                  className="cursor-pointer mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-teal-400"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}

                  {copied ? "Email copied" : "Copy email address"}
                </button>
              </div>

              <div className="mt-10 flex items-center gap-2 border-t border-white/10 pt-6 text-sm text-slate-400">
                <MapPin size={17} className="text-teal-400" />
                Erbil, Iraq
              </div>
            </div>
          </Reveal>

          {/* Right contact form */}
          <Reveal delay={0.12}>
            <div className="rounded-3xl border border-white/10 bg-[#101722] p-6 sm:p-8">
              <div className="mb-8">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400">
                  <MessageCircle size={23} />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  Send a message
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Fill out the details below to compose an email using your
                  email application.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Your Name
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={updateField}
                      required
                      maxLength={100}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/10 bg-[#0B111A] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-teal-500/60"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Email Address
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={updateField}
                      required
                      maxLength={254}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/10 bg-[#0B111A] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-teal-500/60"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={updateField}
                    required
                    maxLength={200}
                    placeholder="Job opportunity / Project inquiry"
                    className="w-full rounded-xl border border-white/10 bg-[#0B111A] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-teal-500/60"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={updateField}
                    required
                    rows={6}
                    maxLength={3000}
                    placeholder="Tell me about your opportunity or project..."
                    className="w-full resize-y rounded-xl border border-white/10 bg-[#0B111A] px-4 py-3.5 text-sm leading-7 text-white outline-none transition-colors placeholder:text-slate-600 focus:border-teal-500/60"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={reduceMotion ? undefined : { y: -3 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  className="cursor-pointer inline-flex w-full items-center justify-center gap-3 rounded-xl bg-teal-500 px-6 py-4 text-sm font-semibold text-slate-950 transition-colors hover:bg-teal-400"
                >
                  <Send size={18} />
                  Compose Email
                  <ArrowUpRight size={17} />
                </motion.button>

                <p className="text-center text-xs leading-5 text-slate-500">
                  This opens Gmail with your message ready to send. Please click
                  Send in Gmail to complete your message.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
