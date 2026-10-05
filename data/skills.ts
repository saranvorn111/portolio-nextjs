import { Cloud, Code2, Database, Server } from "lucide-react";
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

export type Skill = {
  name: string;
  description: string;
  icon: IconType;
  color: string;
};

export const skillCategories: {
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

export const architectureSkills = [
  "REST API",
  "Microservices",
  "JWT Authentication",
  "System Design",
  "Clean Architecture",
  "Git Workflow",
];
