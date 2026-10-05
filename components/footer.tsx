"use client";

import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";

import { navItems, site } from "@/data/site";

const resources = [
  { name: "Download CV", href: site.cv, external: true },
  { name: "Email Me", href: `mailto:${site.email}` },
];

const socials = [
  { name: "GitHub", href: site.socials.github, icon: FiGithub },
  { name: "LinkedIn", href: site.socials.linkedin, icon: FiLinkedin },
  { name: "Facebook", href: site.socials.facebook, icon: FiFacebook },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-slate-950/60">
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="container mx-auto px-4 py-14 sm:px-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="#" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-tr from-violet-600 to-pink-600 text-sm font-bold text-pure-white shadow-lg shadow-violet-600/20">
                VS
              </span>
              <span>
                <span className="block font-semibold text-white">
                  Vorn Saran
                </span>
                <span className="block text-xs text-slate-500">
                  Backend Developer
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Building scalable backend systems with Spring Boot, Microservices,
              Next.js, and modern web technologies.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              Resources
            </h4>
            <ul className="mt-4 space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              Connect
            </h4>
            <div className="mt-4 flex gap-2">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-violet-500/60 hover:text-white"
                  >
                    <Icon size={18} />
                  </Link>
                );
              })}
            </div>

            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
            >
              <Mail size={14} />
              {site.email}
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Vorn Saran. All rights reserved.
          </p>

          <Link
            href="#"
            className="group inline-flex items-center gap-2 text-xs text-slate-500 transition-colors hover:text-white"
          >
            Back to top
            <ArrowUp
              size={14}
              className="transition-transform group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
