"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";

const projects = [
  {
    id: 1,
    year: "2023",
    title: "PhotoStad",
    subtitle: "Photography Portfolio Platform & Certificate Generator",
    description:
      "A photography platform that allows studios to upload images, apply custom watermark logos, and generate certificates in bulk. The system improves workflow efficiency and protects digital assets.",
    tech: ["Next.js", "Java", "Spring framwork", "MySQL", "Docker"],
    live: "#",
    repo: "https://github.com/cstadservice/photostad-api",
  },

  {
    id: 2,
    year: "2023",
    title: "Developer Cambodia",
    subtitle: "Developer Community Platform",
    description:
      "A developer community platform where users can publish technical articles, join discussions, rate content, receive rewards, and connect with other developers.",
    tech: [
      "Next.js",
      "Spring Boot",
      "Microservices",
      "PostgreSQL",
      "Mysql",
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
      "A workflow platform that digitalizes business processes with task management, form submission, approval flows, delegation, and automated business processes.",
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
      "A centralized content management system designed for consistent publishing, content governance, and trusted information delivery across public institutions.",
    tech: ["Next.js", "GraphQL", "MySQL"],
    live: "https://cmp.gov.kh/en",
    repo: "https://github.com/saranvorn111",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        {/* HEADER */}

        <div className="mb-14 sm:mb-20">
          <p
            className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.3em]
            text-violet-400
            "
          >
            Portfolio
          </p>

          <h2
            className="
            mt-3
            text-3xl
            sm:text-5xl
            font-bold
            text-white
            "
          >
            Selected Projects
          </h2>

          <p
            className="
            mt-5
            max-w-2xl
            text-slate-400
            leading-7
            "
          >
            A collection of applications I have developed using Java, Spring
            Boot, Next.js, databases, and cloud technologies.
          </p>
        </div>

        {/* PROJECT LIST */}

        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="
                group
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/40
                p-6
                sm:p-8
                transition
                hover:border-violet-500/40
                "
            >
              <div
                className="
                  flex
                  flex-col
                  gap-6
                  md:flex-row
                  "
              >
                {/* NUMBER */}

                <div
                  className="
                    shrink-0
                    "
                >
                  <span
                    className="
                      text-4xl
                      sm:text-5xl
                      font-bold
                      text-slate-700
                      "
                  >
                    0{index + 1}
                  </span>
                </div>

                {/* CONTENT */}

                <div className="flex-1">
                  <div
                    className="
                      flex
                      flex-col
                      gap-3
                      sm:flex-row
                      sm:items-start
                      sm:justify-between
                      "
                  >
                    <div>
                      <p
                        className="
                          text-xs
                          uppercase
                          tracking-[0.2em]
                          text-violet-400
                          "
                      >
                        {project.subtitle}
                      </p>

                      <h3
                        className="
                          mt-2
                          text-2xl
                          sm:text-3xl
                          font-bold
                          text-white
                          "
                      >
                        {project.title}
                      </h3>
                    </div>

                    <span
                      className="
                        w-fit
                        rounded-full
                        border
                        border-violet-500/30
                        bg-violet-500/10
                        px-4
                        py-1
                        text-sm
                        text-violet-300
                        "
                    >
                      {project.year}
                    </span>
                  </div>

                  <p
                    className="
                      mt-5
                      leading-7
                      text-slate-400
                      "
                  >
                    {project.description}
                  </p>

                  {/* TECH */}

                  <div className="mt-6">
                    <p
                      className="
                        mb-3
                        text-xs
                        font-semibold
                        uppercase
                        tracking-widest
                        text-slate-500
                        "
                    >
                      Technologies
                    </p>

                    <div
                      className="
                        flex
                        flex-wrap
                        gap-2
                        "
                    >
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="
                              rounded-full
                              border
                              border-slate-700
                              bg-slate-950
                              px-3
                              py-1.5
                              text-xs
                              sm:text-sm
                              text-slate-300
                              "
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* BUTTONS */}

                  <div
                    className="
                      mt-8
                      flex
                      flex-col
                      gap-3
                      sm:flex-row
                      "
                  >
                    <Link
                      href={project.live}
                      target="_blank"
                      className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-violet-600
                        px-5
                        py-3
                        font-medium
                        text-white
                        hover:bg-violet-500
                        "
                    >
                      Live Demo
                      <ArrowUpRight size={18} />
                    </Link>

                    <Link
                      href={project.repo}
                      target="_blank"
                      className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-slate-700
                        px-5
                        py-3
                        text-slate-300
                        hover:border-violet-500
                        "
                    >
                      <FiGithub size={18} />
                      Source Code
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
