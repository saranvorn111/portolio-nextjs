"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <div
                className="
                  flex h-12 w-12 items-center justify-center
                  rounded-xl
                  bg-gradient-to-tr from-violet-500 to-pink-500
                  text-lg font-bold text-white
                  shadow-lg shadow-violet-500/20
                "
              >
                VS
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">Vorn Saran</h3>

                <p className="text-sm text-slate-400">Backend Developer</p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Building scalable backend systems with Spring Boot, Microservices,
              Next.js, and modern web technologies.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Navigation</h4>

            <nav className="flex flex-col gap-3">
              {[
                {
                  name: "About",
                  href: "#about",
                },
                {
                  name: "Experience",
                  href: "#experience",
                },
                {
                  name: "Skills",
                  href: "#skills",
                },
                {
                  name: "Projects",
                  href: "#projects",
                },
                {
                  name: "Contact",
                  href: "#contact",
                },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    text-sm text-slate-400
                    transition
                    hover:text-violet-400
                  "
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Connect</h4>

            <div className="flex gap-3">
              <Link
                href="https://github.com/saranvorn111"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-xl
                  border border-slate-800
                  text-slate-400
                  transition
                  hover:border-violet-500
                  hover:text-violet-400
                "
              >
                <FiGithub size={20} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/vornsaran"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-xl
                  border border-slate-800
                  text-slate-400
                  transition
                  hover:border-violet-500
                  hover:text-violet-400
                "
              >
                <FiLinkedin size={20} />
              </Link>

              <Link
                href="https://web.facebook.com/vorn.saran.14"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-xl
                  border border-slate-800
                  text-slate-400
                  transition
                  hover:border-violet-500
                  hover:text-violet-400
                "
              >
                <FiFacebook size={20} />
              </Link>
            </div>

            <p className="mt-5 text-sm text-slate-400">
              Let&apos;s connect and build something meaningful.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-12
            border-t border-slate-800
            pt-6
            text-center
            text-sm
            text-slate-500
          "
        >
          © {new Date().getFullYear()} Vorn Saran. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
