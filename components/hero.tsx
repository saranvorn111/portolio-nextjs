"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { motion, type Variants } from "framer-motion";

import { Button } from "@/components/ui/button";

const techStack = [
  "Java",
  "Spring Boot",
  "REST API",
  "Microservices",
  "Docker",
  "PostgreSQL",
  "Next.js",
  "TypeScript",
  "PHP",
  "GraphQL",
];

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative flex items-start justify-center overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 md:min-h-screen md:items-center md:py-24">
      <motion.div
        className="relative container mx-auto px-4 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            variants={itemVariants}
            className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 text-xs text-violet-300 backdrop-blur sm:mb-8 sm:px-4 sm:py-2 sm:text-sm"
          >
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-green-400" />
            Available for Part-time Opportunities
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="whitespace-nowrap bg-linear-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">
              Vorn Saran
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="mt-4 text-xl font-semibold text-slate-300 sm:mt-6 sm:text-2xl md:text-3xl"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:mt-8 sm:text-lg sm:leading-8"
          >
            I build scalable backend applications with{" "}
            <span className="font-semibold text-white">Java Spring Boot</span>,
            REST APIs, Microservices, Docker, PostgreSQL, Next.js and cloud
            technologies.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mx-auto mt-8 flex max-w-xs flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center"
          >
            <Button asChild size="lg" className="group h-11 px-6">
              <Link href="#projects">
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="h-11 px-6">
              <a
                href="/vornsaran_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.ul
            variants={itemVariants}
            className="mt-10 flex flex-wrap justify-center gap-2 sm:mt-12 sm:gap-3"
          >
            {techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-violet-500 hover:text-white sm:px-4 sm:py-2 sm:text-sm"
              >
                {tech}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={itemVariants}
            className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-slate-800 pt-8 sm:mt-16 sm:gap-8"
          >
            {[
              {
                value: "5+",
                label: "Projects",
              },
              {
                value: "2+",
                label: "Years Experience",
              },
              {
                value: "100%",
                label: "Dedication",
              },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-slate-400 sm:mt-2 sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
