"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";

const projects = [
  {
    id: 1,
    year: "2023",
    title: "PhotoStad",
    subtitle: "Photography Portfolio Platform & Certificate Generator",
    description:
      "A photography platform that allows studios to upload images, apply custom watermark logos, and generate certificates in bulk.",
    tech: ["Next.js", "Java", "Spring Framework", "MySQL", "Docker"],
    live: "#",
    repo: "https://github.com/cstadservice/photostad-api",
  },

  {
    id: 2,
    year: "2023",
    title: "Developer Cambodia",
    subtitle: "Developer Community Platform",
    description:
      "A developer community platform where users can publish technical articles, join discussions, and connect with other developers.",
    tech: [
      "Next.js",
      "Spring Boot",
      "Microservices",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
    live: "#",
    repo: "https://github.com/orgs/Developers-Cambodia/repositories",
  },

  {
    id: 3,
    year: "2024",
    title: "Domnerka",
    subtitle: "Workflow Management Platform",
    description:
      "A workflow platform that digitalizes business processes with task management, approval flows, delegation, and automation.",
    tech: ["React", "TypeScript", "Spring Boot", "MySQL"],
    live: "#",
    repo: "https://github.com/saranvorn111",
  },

  {
    id: 4,
    year: "2026",
    title: "CMP",
    subtitle: "Content Management Platform",
    description:
      "A centralized content management system designed for publishing, governance, and trusted information delivery.",
    tech: ["Next.js", "GraphQL", "MySQL"],
    live: "https://cmp.gov.kh/en",
    repo: "https://github.com/saranvorn111",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto mb-5 h-1 rounded-full bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500"
          />

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Portfolio
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Selected Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            A collection of applications built using Java, Spring Boot, Next.js,
            databases, cloud services, and modern software architecture.
          </p>
        </motion.div>

        {/* PROJECTS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/50
                p-6
                sm:p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-violet-500/40
                hover:shadow-[0_0_50px_rgba(139,92,246,0.15)]
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-violet-500/5
                  via-pink-500/5
                  to-cyan-500/5
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              <div className="relative flex flex-col gap-6 md:flex-row">
                {/* NUMBER */}
                <div className="shrink-0">
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="
                      text-5xl
                      font-extrabold
                      text-slate-700
                      transition-colors
                      group-hover:text-violet-500/30
                    "
                  >
                    0{index + 1}
                  </motion.span>
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-violet-400">
                        {project.subtitle}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                        {project.title}
                      </h3>
                    </div>

                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="
                        w-fit
                        rounded-full
                        border
                        border-violet-500/30
                        bg-gradient-to-r
                        from-violet-500/10
                        to-pink-500/10
                        px-4
                        py-1
                        text-sm
                        text-violet-300
                      "
                    >
                      {project.year}
                    </motion.span>
                  </div>

                  <p className="mt-5 leading-7 text-slate-400">
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="mt-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <motion.span
                          key={item}
                          whileHover={{
                            scale: 1.08,
                            borderColor: "#8b5cf6",
                          }}
                          whileTap={{
                            scale: 0.95,
                          }}
                          className="
                            cursor-pointer
                            rounded-full
                            border
                            border-slate-700
                            bg-slate-950
                            px-3
                            py-1.5
                            text-xs
                            text-slate-300
                            sm:text-sm
                          "
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* ACTIONS */}
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                    >
                      <Link
                        href={project.live}
                        target="_blank"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-xl
                          border
                          border-slate-700
                          px-5
                          py-3
                          text-slate-300
                          transition-all
                          hover:border-violet-500
                        "
                      >
                        Live Demo
                        <ArrowUpRight size={18} />
                      </Link>
                    </motion.div>

                    <motion.div
                      whileHover={{
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                    >
                      <Link
                        href={project.repo}
                        target="_blank"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-xl
                          border
                          border-slate-700
                          px-5
                          py-3
                          text-slate-300
                          transition-all
                          hover:border-violet-500
                        "
                      >
                        <FiGithub size={18} />
                        Source Code
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
