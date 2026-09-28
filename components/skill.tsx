"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Cloud, Code2, Database, Layers, Server } from "lucide-react";
import type { IconType } from "react-icons";
import { DiMsqlServer } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import {
  SiDocker,
  SiGraphql,
  SiJenkins,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type Skill = {
  name: string;
  description: string;
  icon: IconType;
  color: string;
};

const skillCategories: {
  title: string;
  icon: typeof Server;
  description: string;
  skills: Skill[];
}[] = [
  {
    title: "Backend Development",
    icon: Server,
    description: "Building scalable APIs, services, and backend systems.",
    skills: [
      {
        name: "Java Spring Boot",
        description: "REST API, Security, Microservices",
        icon: SiSpringboot,
        color: "#6DB33F",
      },
      {
        name: "Node.js",
        description: "Backend runtime and API development",
        icon: SiNodedotjs,
        color: "#5FA04E",
      },
      {
        name: "NestJS",
        description: "Enterprise backend framework",
        icon: SiNestjs,
        color: "#E0234E",
      },
      {
        name: "GraphQL",
        description: "Flexible, schema-based API design",
        icon: SiGraphql,
        color: "#E10098",
      },
    ],
  },

  {
    title: "Frontend Development",
    icon: Code2,
    description: "Creating modern responsive user interfaces.",
    skills: [
      {
        name: "Next.js",
        description: "React framework with SSR",
        icon: SiNextdotjs,
        color: "var(--color-white)",
      },
      {
        name: "React",
        description: "Reusable UI components",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "TypeScript",
        description: "Type-safe development",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "Tailwind CSS",
        description: "Modern UI styling",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
    ],
  },

  {
    title: "Database",
    icon: Database,
    description: "Designing and managing application data.",
    skills: [
      {
        name: "PostgreSQL",
        description: "Relational database design",
        icon: SiPostgresql,
        color: "#4169E1",
      },
      {
        name: "MySQL",
        description: "SQL database management",
        icon: SiMysql,
        color: "#4479A1",
      },
      {
        name: "MongoDB",
        description: "NoSQL document database",
        icon: SiMongodb,
        color: "#47A248",
      },
      {
        name: "SQL Server",
        description: "Database design and querying",
        icon: DiMsqlServer,
        color: "#CC2927",
      },
    ],
  },

  {
    title: "DevOps & Cloud",
    icon: Cloud,
    description: "Deploying and maintaining applications.",
    skills: [
      {
        name: "Docker",
        description: "Containerized applications",
        icon: SiDocker,
        color: "#2496ED",
      },
      {
        name: "AWS",
        description: "Cloud infrastructure",
        icon: FaAws,
        color: "#FF9900",
      },
      {
        name: "Jenkins",
        description: "CI/CD automation",
        icon: SiJenkins,
        color: "#D24939",
      },
      {
        name: "Linux",
        description: "Server environment",
        icon: SiLinux,
        color: "#FCC624",
      },
    ],
  },
];

const architectureSkills = [
  "REST API",
  "Microservices",
  "JWT Authentication",
  "System Design",
  "Clean Architecture",
  "Git Workflow",
];

export default function Skills() {
  return (
    <section id="skills" className="overflow-hidden py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto mb-5 h-1 rounded-full bg-linear-to-r from-violet-500 to-pink-500"
          />

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Tech Stack
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Technologies & Skills
          </h2>

          <p className="mt-5 leading-7 text-slate-400 sm:text-lg">
            A collection of technologies I use to build scalable, secure, and
            maintainable software systems.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="grid gap-6 lg:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: (index % 2) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-2xl border border-white/10 bg-slate-900/50 p-4 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 sm:p-7"
              >
                {/* Card header */}
                <div className="mb-4 flex items-start justify-between gap-4 border-b border-white/5 pb-4 sm:mb-6 sm:pb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300 ring-1 ring-violet-500/20">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {category.title}
                      </h3>
                      <p className="mt-0.5 text-sm text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <span className="font-mono text-xs text-slate-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Skills */}
                <ul className="grid grid-cols-2 gap-2 sm:gap-3">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <li
                        key={skill.name}
                        className="group flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/2 p-2.5 transition-colors sm:gap-3 sm:p-3 duration-200 hover:border-white/15 hover:bg-white/4"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-slate-950 transition-transform duration-200 group-hover:scale-105">
                          <SkillIcon
                            size={20}
                            style={{ color: skill.color }}
                            aria-hidden
                          />
                        </div>

                        <div className="min-w-0">
                          <p className="text-sm font-medium text-white">
                            {skill.name}
                          </p>
                          <p className="hidden truncate text-xs text-slate-500 sm:block">
                            {skill.description}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Architecture Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mt-6 rounded-2xl border border-white/10 bg-linear-to-br from-violet-500/10 via-slate-900/50 to-pink-500/5 p-5 backdrop-blur-sm sm:p-7"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pink-500/10 text-pink-300 ring-1 ring-pink-500/20">
                <Layers size={20} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Architecture & Engineering
                </h3>
                <p className="mt-0.5 text-sm text-slate-400">
                  Designing systems with clean architecture and best practices.
                </p>
              </div>
            </div>

            <ul className="flex flex-wrap gap-x-5 gap-y-2.5 lg:max-w-md">
              {architectureSkills.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-300"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-violet-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
