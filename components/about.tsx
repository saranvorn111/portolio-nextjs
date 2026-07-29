"use client";

import Link from "next/link";
import {
  CheckCircle2,
  Code2,
  Database,
  Server,
  ShieldCheck,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const strengths = [
  {
    icon: Server,
    text: "Backend API development with Java & Spring Boot",
  },
  {
    icon: Database,
    text: "Database design and scalable data solutions",
  },
  {
    icon: ShieldCheck,
    text: "Secure authentication with JWT & OAuth2",
  },
  {
    icon: Code2,
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

const rightVariant = {
  hidden: {
    opacity: 0,
    x: 80,
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
    <section id="about" className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT SIDE */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mb-6">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 56 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-4 h-1 rounded-full bg-violet-500"
              />

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                About Me
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I am <span className="font-semibold text-white">Vorn Saran</span>,
              a backend-focused developer passionate about building reliable
              software systems. I specialize in designing APIs, backend
              architecture, and scalable applications using Java, Spring Boot,
              and modern web technologies.
            </p>

            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              I enjoy solving engineering problems, improving system
              performance, and creating clean architectures that are easy to
              maintain and extend.
            </p>

            {/* FEATURES */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-8 grid gap-4 sm:grid-cols-2"
            >
              {strengths.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.text}
                    variants={itemVariant}
                    whileHover={{
                      y: -5,
                      borderColor: "#8b5cf6",
                      boxShadow: "0 0 20px rgba(139,92,246,0.15)",
                    }}
                    className="
                      flex
                      gap-3
                      rounded-xl
                      border
                      border-slate-800
                      bg-slate-900/40
                      p-4
                      transition-all
                    "
                  >
                    <Icon className="mt-1 h-5 w-5 shrink-0 text-violet-400" />

                    <span className="text-sm text-slate-300">{item.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button asChild className="w-full cursor-pointer sm:w-auto">
                <Link href="#projects">View Projects</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full cursor-pointer sm:w-auto"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <Card className="border-slate-800 bg-slate-950/50 backdrop-blur transition-shadow hover:shadow-lg hover:shadow-violet-500/10">
                <CardContent className="p-6 sm:p-8">
                  {/* Header */}
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10">
                      <Code2 className="text-violet-400" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">
                        Developer Profile
                      </h3>
                      <p className="text-sm text-slate-400">
                        Backend Developer
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mb-8 grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-2xl font-bold">5+</p>
                      <span className="text-xs text-slate-400">Projects</span>
                    </div>

                    <div>
                      <p className="text-2xl font-bold">10+</p>
                      <span className="text-xs text-slate-400">
                        Technologies
                      </span>
                    </div>

                    <div>
                      <p className="text-2xl font-bold">2</p>
                      <span className="text-xs text-slate-400">Company</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <h4 className="mb-3 text-sm font-medium text-slate-300">
                    Technology Stack
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Badge variant="secondary">{skill}</Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mt-8 rounded-xl border border-slate-800 p-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-400" />
                      <span className="text-sm">
                        Focused on clean architecture
                      </span>
                    </div>

                    <div className="mt-3 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-400" />
                      <span className="text-sm">
                        Building scalable backend systems
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
