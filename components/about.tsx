"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  MapPin,
  Server,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const strengths = [
  {
    icon: Server,
    title: "Backend APIs",
    text: "Backend API development with Java & Spring Boot",
  },
  {
    icon: Database,
    title: "Data Design",
    text: "Database design and scalable data solutions",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    text: "Secure authentication with JWT & OAuth2",
  },
  {
    icon: Code2,
    title: "Full-Stack",
    text: "Modern full-stack applications with Next.js",
  },
];

const skills = [
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "Next.js",
  "REST API",
  "AWS",
  "GraphQL",
];

const stats = [
  { value: "5+", label: "Projects" },
  { value: "10+", label: "Technologies" },
  { value: "2", label: "Companies" },
];

const highlights = [
  "Focused on clean architecture",
  "Building scalable backend systems",
];

const leftVariant = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariant = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-32 top-1/3 -z-10 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Left Content */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mb-6">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-4 h-1 rounded-full bg-linear-to-r from-violet-500 to-pink-500"
              />

              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
                Get to know me
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                About <span className="gradient-text">Me</span>
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I am <span className="font-semibold text-white">Vorn Saran</span>,
              a backend-focused developer passionate about building reliable
              software systems. I specialize in designing APIs, backend
              architecture, and scalable applications using{" "}
              <span className="text-violet-300">Java</span>,{" "}
              <span className="text-violet-300">Spring Boot</span>, and modern
              web technologies.
            </p>

            <p className="mt-4 max-w-2xl border-l-2 border-violet-500/40 pl-4 leading-7 text-slate-400">
              I enjoy solving engineering problems, improving system
              performance, and creating clean architectures that are easy to
              maintain and extend.
            </p>

            {/* Strengths */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-10 grid gap-4 sm:grid-cols-2"
            >
              {strengths.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.text}
                    variants={itemVariant}
                    whileHover={{ y: -5 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/3 p-4 transition-colors duration-300 hover:border-violet-500/40 hover:bg-violet-500/5"
                  >
                    {/* Hover glow */}
                    <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-500/0 blur-2xl transition-colors duration-500 group-hover:bg-violet-500/20" />

                    <div className="relative flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-violet-500/20 to-pink-500/10 ring-1 ring-violet-500/20 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5 text-violet-300" />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-400">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button
                asChild
                className="btn-glow group h-11 w-full cursor-pointer px-6 bg-linear-to-r from-violet-600 to-pink-600 text-pure-white transition-all hover:from-violet-500 hover:to-pink-500 sm:w-auto"
              >
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-11 w-full cursor-pointer border-white/10 bg-transparent px-6 hover:border-violet-500/50 hover:bg-violet-500/10 sm:w-auto"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group relative rounded-3xl bg-linear-to-br from-violet-500/40 via-white/5 to-pink-500/30 p-px shadow-2xl shadow-violet-900/20"
            >
              <div className="relative overflow-hidden rounded-3xl bg-slate-950/90 p-5 backdrop-blur-xl sm:p-8">
                {/* Top glow */}
                <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-violet-600/25 blur-3xl" />

                {/* Header */}
                <div className="relative mb-8 flex items-center gap-4">
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-violet-600 to-pink-600 text-lg font-bold text-pure-white shadow-lg shadow-violet-600/30">
                      VS
                    </div>
                    <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-slate-950 bg-emerald-400" />
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Vorn Saran
                    </h3>
                    <p className="text-sm text-violet-300">Backend Developer</p>
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-500">
                      <MapPin className="h-3 w-3" />
                      Cambodia
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="relative mb-8 grid grid-cols-3 divide-x divide-white/5 rounded-2xl border border-white/5 bg-white/2 py-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="gradient-text text-2xl font-extrabold sm:text-3xl">
                        {stat.value}
                      </p>
                      <span className="text-[11px] uppercase tracking-wider text-slate-500">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Technology Stack
                </h4>

                <div className="flex flex-wrap items-center gap-2">
                  {skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.08, y: -2 }}
                      transition={{ duration: 0.15 }}
                      className="cursor-default rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200 transition-colors hover:border-violet-400/50 hover:bg-violet-500/20"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="mt-8 space-y-3 border-t border-white/5 pt-6">
                  {highlights.map((text) => (
                    <div key={text} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                      <span className="text-sm text-slate-300">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
