import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#7c3aed25,transparent_35%),radial-gradient(circle_at_bottom_left,#ec489925,transparent_35%)]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Available for Full-time Opportunities
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Hi, I am{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">
              Vorn Saran
            </span>
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-slate-300 md:text-3xl">
            Backend Developer
          </h2>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            I build scalable backend applications with
            <span className="font-semibold text-white"> Java Spring Boot</span>,
            REST APIs, Microservices, Docker, Kubernetes, PostgreSQL, Next.js,
            and cloud technologies.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="#projects">
              <Button size="lg" className="group">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Tech Stack */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {[
              "Spring Boot",
              "Java",
              "Microservices",
              "Docker",
              "PostgreSQL",
              "Next.js",
              "PHP",
              "AWS",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-slate-800 pt-8">
            <div>
              <h3 className="text-4xl font-bold text-white">5+</h3>
              <p className="mt-2 text-slate-400">Projects</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">2+</h3>
              <p className="mt-2 text-slate-400">Years works</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">100%</h3>
              <p className="mt-2 text-slate-400">Dedication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
