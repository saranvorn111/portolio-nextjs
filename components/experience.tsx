import {
  GraduationCap,
  Briefcase,
  Code2,
  BookOpen,
  Cloud,
  Brain,
} from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    type: "Work Experience",
    title: "Backend Developer",
    company: "Ministry of post and Telecommunications (MPTC)",
    link: "https://mptc.gov.kh/",
    period: "Present",
    description:
      "Developing enterprise backend systems, REST APIs, workflow automation, authentication systems, and cloud-ready applications. Focused on building reliable and maintainable software solutions.",
    skills: ["Java", "Spring Boot", "REST API", "Microservices", "Docker"],
  },

  {
    icon: BookOpen,
    type: "Teaching",
    title: "Part-time Instructor",
    company: "University of Cambodia",
    link: "https://web.facebook.com/universityofcambodia",
    period: "2025 - Present",
    description:
      "Teaching programming fundamentals, backend development, and software engineering practices. Helping students understand software development through practical examples.",
    skills: [
      "Programming",
      "Java",
      "Backend Development",
      "Software Engineering",
    ],
  },

  {
    icon: Briefcase,
    type: "Work Experience",
    title: "Backend Developer",
    company: "Digital Government Committee",
    link: "https://dgc.gov.kh/",
    period: "2025",
    description:
      "Worked on backend services, API development, database integration, and enterprise application solutions while improving software engineering skills.",
    skills: ["Backend API", "Database", "Java", "System Design"],
  },

  {
    icon: Code2,
    type: "Training",
    title: "ITE Generation 1 Student",
    company: "Institute of Science and Technology Advanced Development (ISTAD)",
    link: "https://web.facebook.com/istad.co",
    period: "1 Year",
    description:
      "Completed an intensive software development program covering programming fundamentals, backend development, databases, web technologies, and software engineering practices.",
    skills: ["Java", "Web Development", "Database", "Software Engineering"],
  },

  {
    icon: GraduationCap,
    type: "Education",
    title: "Bachelor Degree",
    company: "University of Cambodia",
    link: "https://www.uc.edu.kh/",
    period: "Graduated 2024",
    description:
      "Studied computer science fundamentals, software development concepts, algorithms, databases, and information technology.",
    skills: ["Computer Science", "Programming", "Software Development"],
  },

  {
    icon: Brain,
    type: "Training",
    title: "Machine Learning Student Program",
    company: "Center for Development of Advanced Computing (C-DAC India)",
    link: "https://www.cdac.in/",
    period: "2 Weeks",
    description:
      "Completed an intensive machine learning program covering data processing, model training, and practical artificial intelligence applications.",
    skills: ["Machine Learning", "Python", "AI Fundamentals"],
  },

  {
    icon: Cloud,
    type: "Training",
    title: "Cloud Architecture Short Course",
    company: "American University of Phnom Penh (AUPP)",
    link: "https://www.aupp.edu.kh/",
    period: "6 Months",
    description:
      "Learned cloud architecture concepts including infrastructure design, deployment strategies, scalability, and cloud security principles.",
    skills: ["Cloud Architecture", "AWS", "Deployment", "Security"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16">
          <div
            className="
            mb-4
            h-1
            w-16
            rounded-full
            bg-gradient-to-r
            from-violet-500
            to-pink-500
            "
          />

          <h2
            className="
            text-3xl
            sm:text-4xl
            font-bold
            text-white
            "
          >
            Experience & Journey
          </h2>

          <p
            className="
            mt-4
            max-w-2xl
            leading-7
            text-slate-400
            "
          >
            My journey from software development student to backend developer,
            combining professional experience, continuous learning, and
            knowledge sharing.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div
            className="
            absolute
            left-5
            top-0
            h-full
            w-px
            bg-slate-800
            "
          />

          <div className="space-y-10">
            {experiences.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={`${item.title}-${item.company}`}
                  className="
                  relative
                  pl-14
                  sm:pl-16
                  "
                >
                  {/* Icon */}
                  <div
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
                  </div>

                  {/* Card */}
                  <div
                    className="
                    rounded-2xl
                    border
                    border-slate-800
                    bg-slate-900/50
                    p-5
                    sm:p-6
                    transition
                    hover:border-violet-500/40
                    "
                  >
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
                        <p className="text-sm text-violet-400">{item.type}</p>

                        <h3
                          className="
                          mt-1
                          text-xl
                          font-semibold
                          text-white
                          "
                        >
                          {item.title}
                        </h3>

                        {/* Clickable Company */}
                        <div className="mt-1">
                          {item.link ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="
                              text-slate-400
                              transition
                              hover:text-violet-400
                              hover:underline
                              "
                            >
                              {item.company}
                            </a>
                          ) : (
                            <p className="text-slate-400">{item.company}</p>
                          )}
                        </div>
                      </div>

                      <span
                        className="
                        text-sm
                        text-slate-500
                        "
                      >
                        {item.period}
                      </span>
                    </div>

                    <p
                      className="
                      mt-4
                      leading-7
                      text-slate-300
                      "
                    >
                      {item.description}
                    </p>

                    {/* Skills */}
                    <div
                      className="
                      mt-5
                      flex
                      flex-wrap
                      gap-2
                      "
                    >
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="
                          rounded-full
                          border
                          border-slate-700
                          bg-slate-950
                          px-3
                          py-1
                          text-xs
                          text-slate-300
                          "
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
