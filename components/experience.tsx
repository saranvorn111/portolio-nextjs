// components/experience.tsx

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto">
        <h2 className="mb-12 text-4xl font-bold">Experience</h2>

        <div className="grid gap-8">
          {/* Education */}
          <div className="border-l border-slate-700 pl-6">
            <h3 className="text-2xl font-semibold">Education</h3>

            <p className="text-violet-400">
              University of Cambodia — Graduate, 2024
            </p>
          </div>
          {/* ISTAD Training */}
          <div className="border-l border-slate-700 pl-6">
            <h3 className="text-2xl font-semibold">ITE Generation 1 Student</h3>

            <p className="text-violet-400">
              Institute of Science and Technology Advanced Development (ISTAD) —
              1 Year
            </p>

            <p className="mt-4 text-muted-foreground">
              Completed a one-year intensive software development program
              focusing on programming fundamentals, backend development,
              database management, web technologies, and software engineering
              practices.
            </p>
          </div>

          {/* Backend Developer DGC */}
          <div className="border-l border-slate-700 pl-6">
            <h3 className="text-2xl font-semibold">Backend Developer</h3>

            <p className="text-violet-400">DGC — 2025 (1 year)</p>

            <p className="mt-4 text-muted-foreground">
              Worked on backend services and API development, contributing to
              scalable systems, database integration, and enterprise application
              solutions.
            </p>
          </div>

          {/* Backend Developer MPTC */}
          <div className="border-l border-slate-700 pl-6">
            <h3 className="text-2xl font-semibold">Backend Developer</h3>

            <p className="text-violet-400">MPTC — Present</p>

            <p className="mt-4 text-muted-foreground">
              Developing enterprise systems, REST APIs, workflow automation
              solutions, authentication systems, and cloud-native applications.
            </p>
          </div>

          {/* Instructor */}
          <div className="border-l border-slate-700 pl-6">
            <h3 className="text-2xl font-semibold">Instructor</h3>

            <p className="text-violet-400">
              University of Cambodia — 2025 - Present (Part-time)
            </p>

            <p className="mt-4 text-muted-foreground">
              Teaching programming fundamentals, backend development, and
              software engineering concepts to university students.
            </p>
          </div>

          {/* Machine Learning Training */}
          <div className="border-l border-slate-700 pl-6">
            <h3 className="text-2xl font-semibold">
              Machine Learning Student Program
            </h3>

            <p className="text-violet-400">India — 2 Weeks</p>

            <p className="mt-4 text-muted-foreground">
              Completed an intensive machine learning program covering
              fundamental concepts, data processing, model training, and
              practical applications of artificial intelligence.
            </p>
          </div>

          {/* Cloud Architecture Course */}
          <div className="border-l border-slate-700 pl-6">
            <h3 className="text-2xl font-semibold">
              Cloud Architecture Short Course
            </h3>

            <p className="text-violet-400">
              American University of Phnom Penh (AUPP) — 6 Months
            </p>

            <p className="mt-4 text-muted-foreground">
              Studied cloud architecture concepts including cloud infrastructure
              design, deployment strategies, scalability, security, and modern
              cloud-based solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
