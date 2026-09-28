"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import { FiGithub } from "react-icons/fi";

type Project = {
  id: number;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  live: string;
  repo: string;
  image?: string;
};

const projects: Project[] = [
  {
    id: 1,
    year: "2026",
    title: "CMP",
    subtitle: "Content Management Platform",
    description:
      "A centralized content management system designed for publishing, governance, and trusted information delivery.",
    tech: ["Next.js", "GraphQL", "MySQL"],
    live: "https://cmp.gov.kh/en",
    repo: "https://github.com/saranvorn111",
    image: "/images/cmp.png",
  },
  {
    id: 2,
    year: "2026",
    title: "CTM",
    subtitle: "Chaktomuk Digital Platform",
    description:
      "Chaktomuk is a digital workspace developed by the Ministry of Post and Telecommunications (MPTC) to enhance government efficiency by digitalizing workflows, fostering collaboration, and enabling more effective operations.",
    tech: ["Java", "Spring Boot", "MySQL", "Microservices", "Next.js"],
    live: "https://chaktomuk.gov.kh/en",
    repo: "https://github.com/saranvorn111",
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
    image: "/images/domnerka-logos.png",
  },

  {
    id: 4,
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
    image: "/images/developer-cambodia.png",
  },
  {
    id: 5,
    year: "2023",
    title: "PhotoStad",
    subtitle: "Photography Portfolio Platform & Certificate Generator",
    description:
      "A photography platform that allows studios to upload images, apply custom watermark logos, and generate certificates in bulk.",
    tech: ["Next.js", "Java", "Spring Framework", "MySQL", "Docker"],
    live: "#",
    repo: "https://github.com/cstadservice/photostad-api",
    image: "/images/photostart.png",
  },
];

function hostOf(url: string) {
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}

function ProjectPreview({ project }: { project: Project }) {
  const host = hostOf(project.live);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/40 light:shadow-slate-900/10 transition-transform duration-500 group-hover:-translate-y-1">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-white/5 bg-slate-900/80 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
        <span className="ml-3 truncate rounded-md bg-white/5 px-3 py-0.5 font-mono text-[11px] text-slate-500">
          {host ?? "internal project"}
        </span>
      </div>

      {/* Preview */}
      {project.image ? (
        <div className="relative aspect-16/10 bg-pure-white">
          <Image
            src={project.image}
            alt={`${project.title} logo`}
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-contain p-8 transition-transform duration-700 group-hover:scale-[1.03] sm:p-12"
          />
        </div>
      ) : (
        <div className="relative flex aspect-16/10 flex-col items-center justify-center overflow-hidden bg-linear-to-br from-ink via-violet-950 to-ink">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(139,92,246,0.25),transparent_60%)]" />
          <span className="relative text-5xl font-extrabold tracking-tight text-pure-white sm:text-6xl">
            {project.title}
          </span>
          <span className="relative mt-2 text-xs uppercase tracking-[0.3em] text-violet-100">
            {project.subtitle}
          </span>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="overflow-hidden py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto mb-5 h-1 rounded-full bg-linear-to-r from-violet-500 to-pink-500"
          />

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Portfolio
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Selected Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            A collection of applications built using Java, Spring Boot, Next.js,
            databases, cloud services, and modern software architecture.
          </p>
        </motion.div>

        <div className="space-y-14 sm:space-y-20 lg:space-y-28">
          {projects.map((project, index) => {
            const reversed = index % 2 === 1;
            const hasLive = project.live !== "#";

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                {/* PREVIEW */}
                <div className={reversed ? "lg:order-2" : ""}>
                  <ProjectPreview project={project} />
                </div>

                {/* CONTENT */}
                <div className={reversed ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em]">
                    <span className="text-violet-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-8 bg-slate-700" />
                    <span className="text-slate-500">{project.year}</span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-violet-300">
                    {project.subtitle}
                  </p>

                  <p className="mt-5 leading-7 text-slate-400">
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-white/10 bg-white/3 px-2.5 py-1 font-mono text-xs text-slate-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* ACTIONS */}
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    {hasLive ? (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-violet-200"
                      >
                        Visit Site
                        <ArrowUpRight
                          size={16}
                          className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                        />
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-lg border border-white/5 px-4 py-2.5 text-sm text-slate-500">
                        <Lock size={14} />
                        Not publicly deployed
                      </span>
                    )}

                    <Link
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-violet-500/60 hover:text-white"
                    >
                      <FiGithub size={16} />
                      Source Code
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
