import Link from "next/link";

import { JSX } from "react/jsx-runtime";
import { ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";

const projects = [
  {
    id: 1,
    year: "2023",
    title: "PhotoStad",
    subtitle: "Photography Portfolio Platform & Certificate Generator",
    description:
      "A photography platform designed for studios to upload images, apply custom watermark logos, and generate certificates in bulk, improving efficiency and protecting digital assets.",
    tech: ["Next.js", "Spring Boot", "MySQL", "Docker"],
    live: "#",
    repo: "https://github.com/cstadservice/photostad-api",
  },
  {
    id: 2,
    year: "2023",
    title: "Developer Cambodia",
    subtitle: "Developer Community Platform",
    description:
      "A modern developer platform that enables users to create technical articles, participate in global forums, rate content, receive rewards for quality contributions, and connect with the developer community.",
    tech: ["Next.js", "Spring Boot", "Microservices", "PostgreSQL"],
    live: "#",
    repo: "https://github.com/orgs/Developers-Cambodia/repositories",
  },
  {
    id: 3,
    year: "2024",
    title: "Domnerka",
    subtitle: "Workflow Platform",
    description:
      "A workflow management platform that digitalizes business processes, enabling users to complete tasks, submit forms, manage approvals, and delegate work efficiently through automated workflows.",
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
      "A centralized content management platform designed to ensure consistent publishing, efficient content governance, and trusted information delivery across ministries and public institutions.",
    tech: ["Next.js", "GraphQL", "MySQL"],
    live: "#",
    repo: "https://github.com/saranvorn111",
  },
];
export default function Projects(): JSX.Element {
  return (
    <section id="projects" className="py-28">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-20">
          <p className="text-violet-500 font-semibold uppercase tracking-widest">
            Portfolio
          </p>

          <h2 className="mt-3 text-5xl font-bold">Selected Projects</h2>

          <p className="mt-5 max-w-xl text-slate-400">
            A collection of applications I have built using Java, Spring Boot,
            Next.js and Microservices.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={project.id} className="border-t border-slate-800 pt-10">
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-2">
                  <span className="text-5xl font-bold text-slate-700">
                    0{index + 1}
                  </span>
                </div>

                <div className="lg:col-span-10 space-y-6">
                  {/* Header */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
                        {project.subtitle}
                      </p>

                      <h3 className="mt-2 text-3xl font-bold tracking-tight text-white">
                        {project.title}
                      </h3>
                    </div>

                    <span className="self-start rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-sm font-medium text-violet-300">
                      {project.year}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="max-w-3xl text-base leading-8 text-slate-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
                      Tech Stack
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300 transition hover:border-violet-500 hover:text-violet-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-6 pt-2">
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-3 font-medium text-white transition hover:bg-violet-500"
                    >
                      Live Demo
                      <ArrowUpRight size={18} />
                    </Link>

                    <Link
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 font-medium text-slate-300 transition hover:border-violet-500 hover:text-violet-300"
                    >
                      <FiGithub size={18} />
                      View Source
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
