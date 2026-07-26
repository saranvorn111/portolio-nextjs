// components/about.tsx

import Link from "next/link";
import {
  CheckCircle2,
  Code2,
  Database,
  Server,
  ShieldCheck,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const strengths = [
  {
    icon: Server,
    text: "Backend API development with Java & Spring Boot",
  },
  {
    icon: Database,
    text: "Database design and scalable data solutions",
  },
  {
    icon: ShieldCheck,
    text: "Secure authentication with JWT & OAuth2",
  },
  {
    icon: Code2,
    text: "Modern full-stack applications with Next.js",
  },
];

const skills = [
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "Next.js",
  "REST API",
  "AWS",
  "GraphQL",
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="mb-6">
              <div className="h-1 w-14 rounded-full bg-violet-500 mb-4" />

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                About Me
              </h2>
            </div>

            <p className="text-base sm:text-lg leading-8 text-slate-300 max-w-2xl">
              I am <span className="text-white font-semibold">Vorn Saran</span>,
              a backend-focused developer passionate about building reliable
              software systems. I specialize in designing APIs, backend
              architecture, and scalable applications using Java, Spring Boot,
              and modern web technologies.
            </p>

            <p className="mt-4 text-slate-400 leading-7 max-w-2xl">
              I enjoy solving engineering problems, improving system
              performance, and creating clean architectures that are easy to
              maintain and extend.
            </p>

            {/* FEATURES */}
            <div
              className="
              mt-8
              grid
              gap-4
              sm:grid-cols-2
            "
            >
              {strengths.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="
                      flex
                      gap-3
                      rounded-xl
                      border
                      border-slate-800
                      bg-slate-900/40
                      p-4
                    "
                  >
                    <Icon className="h-5 w-5 text-violet-400 mt-1 shrink-0" />

                    <span className="text-sm text-slate-300">{item.text}</span>
                  </div>
                );
              })}
            </div>

            {/* BUTTONS */}
            <div
              className="
              mt-8
              flex
              flex-col
              sm:flex-row
              gap-3
            "
            >
              <Link href="#projects">
                <Button className="w-full sm:w-auto cursor-pointer">
                  View Projects
                </Button>
              </Link>

              <Link href="#contact">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto cursor-pointer"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT CARD */}
          <Card
            className="
              border-slate-800
              bg-slate-950/50
              backdrop-blur
            "
          >
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="
                    h-12
                    w-12
                    rounded-xl
                    bg-violet-500/10
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Code2 className="text-violet-400" />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Developer Profile</h3>

                  <p className="text-sm text-slate-400">Backend Developer</p>
                </div>
              </div>

              <div
                className="
                grid
                grid-cols-3
                gap-4
                mb-8
                "
              >
                <div>
                  <p className="text-2xl font-bold">5+</p>
                  <span className="text-xs text-slate-400">Projects</span>
                </div>

                <div>
                  <p className="text-2xl font-bold">10+</p>
                  <span className="text-xs text-slate-400">Technologies</span>
                </div>

                <div>
                  <p className="text-2xl font-bold">2</p>
                  <span className="text-xs text-slate-400">Company</span>
                </div>
              </div>

              <h4 className="mb-3 text-sm font-medium text-slate-300">
                Technology Stack
              </h4>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div
                className="
                  mt-8
                  rounded-xl
                  border
                  border-slate-800
                  p-4
                "
              >
                <div className="flex gap-2 items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />

                  <span className="text-sm">Focused on clean architecture</span>
                </div>

                <div className="flex gap-2 items-center mt-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />

                  <span className="text-sm">
                    Building scalable backend systems
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
