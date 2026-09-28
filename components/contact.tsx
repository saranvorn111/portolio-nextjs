"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Mail,
  MapPin,
} from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const email = "Saranvorn529@gmail.com";

const channels = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: email,
    href: `mailto:${email}`,
  },
  {
    icon: <FiLinkedin size={18} />,
    label: "LinkedIn",
    value: "in/vorn-saran",
    href: "https://www.linkedin.com/in/vorn-saran-911485300/",
  },
  {
    icon: <FiGithub size={18} />,
    label: "GitHub",
    value: "saranvorn111",
    href: "https://github.com/saranvorn111",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "Cambodia",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-16 sm:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-3xl bg-linear-to-br from-violet-500/40 via-white/5 to-pink-500/30 p-px shadow-2xl shadow-violet-950/30"
        >
          <div className="relative overflow-hidden rounded-3xl bg-slate-950/90 backdrop-blur-xl">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-pink-600/10 blur-3xl" />

            <div className="relative grid gap-8 p-5 sm:gap-10 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14 lg:p-14">
              {/* Left: pitch */}
              <div className="flex min-w-0 flex-col justify-center">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Open to opportunities
                </span>

                <h2
                  id="contact-heading"
                  className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
                >
                  Let’s build something{" "}
                  <span className="gradient-text">great together</span>
                </h2>

                <p className="mt-5 max-w-xl leading-7 text-slate-400">
                  I’m interested in backend developer roles where I can improve
                  my engineering skills, contribute to real-world projects, and
                  work with a strong development team. Feel free to reach out
                  for opportunities, collaborations, or technical discussions.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`mailto:${email}`}
                    className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-violet-200"
                  >
                    <Mail size={16} />
                    Send an Email
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>

                  <a
                    href="/vornsaran_cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-violet-500/60 hover:text-white"
                  >
                    <Download size={16} />
                    Download CV
                  </a>
                </div>
              </div>

              {/* Right: channels */}
              <div className="min-w-0 rounded-2xl border border-white/10 bg-white/2 p-1.5 sm:p-2">
                <ul className="divide-y divide-white/5">
                  {channels.map((channel) => {
                    const content = (
                      <>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-slate-900 text-violet-300">
                          {channel.icon}
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-xs uppercase tracking-wider text-slate-500">
                            {channel.label}
                          </p>
                          <p className="truncate text-sm font-medium text-slate-200">
                            {channel.value}
                          </p>
                        </div>
                      </>
                    );

                    return (
                      <li key={channel.label}>
                        {channel.href ? (
                          <div className="flex items-center gap-2">
                            <Link
                              href={channel.href}
                              target={
                                channel.href.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              rel="noopener noreferrer"
                              className="group flex min-w-0 flex-1 items-center gap-4 rounded-xl p-3 transition-colors hover:bg-white/4"
                            >
                              {content}
                              <ArrowUpRight
                                size={16}
                                className="shrink-0 text-slate-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300"
                              />
                            </Link>

                            {channel.label === "Email" && (
                              <button
                                type="button"
                                onClick={copyEmail}
                                aria-label="Copy email address"
                                className="mr-2 flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-violet-500/50 hover:text-white"
                              >
                                {copied ? (
                                  <Check size={16} className="text-emerald-400" />
                                ) : (
                                  <Copy size={16} />
                                )}
                              </button>
                            )}
                          </div>
                        ) : (
                          <div className="flex items-center gap-4 p-3">
                            {content}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
