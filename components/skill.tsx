"use client";

import { Card } from "@/components/ui/card";
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
        name: "Redis",
        description: "Caching and performance",
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

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Technologies & Skills
          </h2>

          <p className="mt-5 text-lg text-slate-400">
            A collection of technologies I use to build scalable, secure, and
            maintainable software systems.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid gap-8 lg:grid-cols-2">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <Card
                key={category.title}
                className="
                  border-slate-800
                  bg-slate-900/60
                  p-8
                  backdrop-blur
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-violet-500/40
                "
              >
                {/* Category */}
                <div className="mb-6 flex items-center gap-4">
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

                    <p className="text-sm text-slate-400">
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
                      bg-slate-950/60
                      p-4
                      transition
                      hover:border-violet-500/50
                      "
                    >
                      <h4 className="font-semibold text-white">{skill.name}</h4>

                      <p className="mt-1 text-sm text-slate-400">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Architecture Section */}
        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/50 p-8">
          <div className="flex items-center gap-4">
            <div
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
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                Architecture & Engineering
              </h3>

              <p className="text-slate-400">
                Designing systems with clean architecture and best practices.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "REST API",
              "Microservices",
              "JWT Authentication",
              "System Design",
              "Clean Architecture",
              "Git Workflow",
            ].map((item) => (
              <span
                key={item}
                className="
                rounded-full
                border
                border-slate-700
                bg-slate-950
                px-4
                py-2
                text-sm
                text-slate-300
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
