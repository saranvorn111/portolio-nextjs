"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { motion, type Variants } from "framer-motion";

import { Button } from "@/components/ui/button";

const techStack = [
  "Spring Boot",
  "Java",
  "Microservices",
  "Docker",
  "PostgreSQL",
  "Next.js",
  "PHP",
  "GraphQL",
  "AWS",
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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#7c3aed20,transparent_35%),radial-gradient(circle_at_bottom_left,#ec489920,transparent_35%)]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px]" />

      <motion.div
        className="relative container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Available for Full-time Opportunities
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">
              Vorn Saran
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="mt-6 text-2xl font-semibold text-slate-300 md:text-3xl"
          >
            Full Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400"
          >
            I build scalable backend applications with{" "}
            <span className="font-semibold text-white">Java Spring Boot</span>,
            REST APIs, Microservices, Docker, PostgreSQL, Next.js and cloud
            technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <motion.div
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
            >
              <Link href="#projects">
                <Button size="lg" className="group">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
            >
              <a
                href="/vornsaran_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            {techStack.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{
                  scale: 1.08,
                  y: -3,
                }}
                className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-violet-500 hover:text-white"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-slate-800 pt-8"
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
              <motion.div key={stat.label} whileHover={{ scale: 1.05 }}>
                <h3 className="text-4xl font-bold text-white">{stat.value}</h3>
                <p className="mt-2 text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
