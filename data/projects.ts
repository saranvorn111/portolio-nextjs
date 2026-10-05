export type Project = {
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

export const projects: Project[] = [
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
