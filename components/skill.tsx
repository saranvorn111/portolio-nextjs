"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code2, Database, Cloud, Server, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Backend Development",
    icon: Server,
    description: "Building scalable APIs, services, and backend systems.",
    skills: [
      {
        name: "Java Spring Boot",
        description: "REST API, Security, Microservices",
      },
      {
        name: "Node.js",
        description: "Backend runtime and API development",
      },
      {
        name: "NestJS",
        description: "Enterprise backend framework",
      },
      {
        name: "GraphQL",
        description:
          "Designing flexible APIs with efficient data querying and schema-based architecture",
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
      },
      {
        name: "React",
        description: "Reusable UI components",
      },
      {
        name: "TypeScript",
        description: "Type-safe development",
      },
      {
        name: "Tailwind CSS",
        description: "Modern UI styling",
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
      },
      {
        name: "MySQL",
        description: "SQL database management",
      },
      {
        name: "MongoDB",
        description: "NoSQL document database",
      },
      {
        name: "SQL Server",
        description: "Database design and querying",
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
      },
      {
        name: "AWS",
        description: "Cloud infrastructure",
      },
      {
        name: "Jenkins",
        description: "CI/CD automation",
      },
      {
        name: "Linux",
        description: "Server environment",
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

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto mb-4 h-1 rounded-full bg-gradient-to-r from-violet-500 to-pink-500"
          />

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Technologies & Skills
          </h2>

          <p className="mt-5 text-lg text-slate-400">
            A collection of technologies I use to build scalable, secure, and
            maintainable software systems.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 lg:grid-cols-2"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  y: -1,
                }}
              >
                <Card
                  className="
            h-full
            rounded-2xl
            border
            border-slate-800
            bg-slate-900/60
            backdrop-blur-sm
            transition-all
            duration-300
            hover:border-violet-500/30
            hover:shadow-xl
          "
                >
                  <div className="p-8">
                    {/* Header */}
                    <div className="mb-8 flex items-center gap-4">
                      <div
                        className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-violet-500/10
                  text-violet-400
                "
                      >
                        <Icon size={24} />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {category.title}
                        </h3>

                        <p className="mt-1 text-sm text-slate-400">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="grid gap-3 sm:grid-cols-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="
                    rounded-xl
                    border
                    border-slate-800
                    bg-slate-950/50
                    p-4
                  "
                        >
                          <h4 className="font-medium text-white">
                            {skill.name}
                          </h4>

                          <p className="mt-2 text-sm leading-relaxed text-slate-400">
                            {skill.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Architecture Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="
            mt-10
            rounded-3xl
            border
            border-slate-800
            bg-slate-900/50
            p-8
            backdrop-blur
          "
        >
          <div className="flex items-center gap-4">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-pink-500/10
                text-pink-400
              "
            >
              <Layers size={24} />
            </motion.div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                Architecture & Engineering
              </h3>

              <p className="text-slate-400">
                Designing systems with clean architecture and best practices.
              </p>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-6 flex flex-wrap gap-3"
          >
            {architectureSkills.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2 text-sm text-slate-300 transition-all duration-200 hover:border-violet-500/30 hover:bg-slate-900 hover:text-white cursor-pointer
  "
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
