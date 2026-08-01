"use client";
import {
  GraduationCap,
  Briefcase,
  Code2,
  BookOpen,
  Cloud,
  Brain,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const experiences = [
  {
    icon: Briefcase,
    type: "Work Experience",
    title: "Full Stack Developer",
    company: "Ministry of Post and Telecommunications (MPTC)",
    link: "https://mptc.gov.kh/",
    period: "2025 - Present",
    description:
      "Developing enterprise backend systems, REST APIs, workflow automation, authentication systems, and microservices architecture.",
    skills: [
      "Java",
      "Spring Boot",
      "REST API",
      "Microservices",
      "Docker",
      "GraphQL",
    ],
  },
  {
    icon: BookOpen,
    type: "Teaching",
    title: "Part-time Instructor",
    company: "University of Cambodia",
    link: "https://web.facebook.com/universityofcambodia",
    period: "2025 - Present",
    description:
      "Teaching programming fundamentals, backend development, database, and software engineering practices.",
    skills: [
      "Programming",
      "Java",
      "Backend Development",
      "Database",
      "Software Engineering",
    ],
  },
  {
    icon: Briefcase,
    type: "Work Experience",
    title: "Backend Developer",
    company: "Digital Government Committee",
    link: "https://dgc.gov.kh/",
    period: "2024 - 2025",
    description:
      "Worked on backend services, API development, database integration, and enterprise application solutions.",
    skills: ["Backend API", "Database", "Java", "System Design"],
  },
  {
    icon: Code2,
    type: "Short Course",
    title: "ITE Generation 1 Student",
    company: "ISTAD",
    link: "https://web.facebook.com/istad.co",
    period: "2023 - 2024",
    description:
      "Completed intensive software development training covering backend development and software engineering.",
    skills: ["Java", "Web Development", "Database", "Software Engineering"],
  },
  {
    icon: GraduationCap,
    type: "Education",
    title: "Bachelor Degree",
    company: "University of Cambodia",
    link: "https://www.uc.edu.kh/",
    period: "2020 - 2024",
    description:
      "Studied computer science fundamentals, software development concepts, algorithms, and databases.",
    skills: ["Computer Science", "Programming", "Software Development"],
  },
  {
    icon: Brain,
    type: "Short Course",
    title: "Machine Learning",
    company: "C-DAC India",
    link: "https://www.cdac.in/",
    period: " Completed 2 Weeks",
    description:
      "Completed machine learning training covering AI concepts, model training, and data processing.",
    skills: [
      "Machine Learning",
      "Python",
      "AI Fundamentals",
      "Data Processing",
      "Analytics",
    ],
  },
  {
    icon: Cloud,
    type: "Short Course",
    title: "Cloud Architecture Short Course",
    company: "AUPP",
    link: "https://www.aupp.edu.kh/",
    period: "6 Months",
    description:
      "Learned cloud architecture, deployment strategies, scalability, and security principles.",
    skills: [
      "Cloud Architecture",
      "AWS",
      "docker",
      "Kubernetes",
      "Jenkins",
      "Deployment",
      "Security",
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Experience & Journey
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            My journey from software development student to backend developer,
            combining professional experience, continuous learning, and
            knowledge sharing.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute left-5 top-0 w-[2px] bg-gradient-to-b from-violet-500 via-pink-500 to-cyan-500"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-10"
          >
            {experiences.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={`${item.title}-${item.company}`}
                  variants={cardVariants}
                  className="relative pl-14 sm:pl-16"
                >
                  {/* Animated Icon */}
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      absolute
                      left-0
                      top-0
                      flex
                      h-10
                      w-10
                      sm:h-12
                      sm:w-12
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-slate-700
                      bg-slate-950
                      text-violet-400
                    "
                  >
                    <Icon size={20} />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.01,
                      boxShadow: "0 0 35px rgba(139,92,246,0.15)",
                    }}
                    transition={{ duration: 0.2 }}
                    className="
                      rounded-2xl
                      border
                      border-slate-800
                      bg-slate-900/50
                      backdrop-blur-sm
                      p-5
                      sm:p-6
                    "
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-sm text-violet-400">{item.type}</p>

                        <h3 className="mt-1 text-xl font-semibold text-white">
                          {item.title}
                        </h3>

                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            mt-1
                            inline-block
                            text-slate-400
                            transition-all
                            duration-300
                            hover:text-violet-400
                            hover:underline
                          "
                        >
                          {item.company}
                        </a>
                      </div>

                      <span className="text-sm text-slate-500">
                        {item.period}
                      </span>
                    </div>

                    <p className="mt-4 leading-7 text-slate-300">
                      {item.description}
                    </p>

                    {/* Skills */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{
                            scale: 1.08,
                            borderColor: "#8b5cf6",
                            backgroundColor: "#1e1b4b",
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="
                            cursor-pointer
                            rounded-full
                            border
                            border-slate-700
                            bg-slate-950
                            px-3
                            py-1
                            text-xs
                            text-slate-300
                            transition-all
                          "
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
