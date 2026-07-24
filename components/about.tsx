// components/about.tsx

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { JSX } from "react/jsx-runtime";

export default function About(): JSX.Element {
  return (
    <section id="about" aria-labelledby="about-heading" className="pt-32 pb-24">
      <div className="container mx-auto">
        <div className="grid gap-12 items-start lg:grid-cols-2">
          <div>
            <div className="mb-4">
              <div
                className="h-1 w-16 rounded-full bg-violet-500 mb-3"
                aria-hidden
              />
              <h2 id="about-heading" className="text-4xl font-extrabold">
                About Me
              </h2>
            </div>

            <p className="text-lg text-slate-300 leading-8 max-w-3xl">
              I’m Vorn Saran — a Backend Developer at MPTC focusing on building
              resilient, high-performance backend systems using Java and Spring
              Boot. I design scalable APIs, microservices, and workflow-driven
              platforms that power business-critical applications.
            </p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300">
              <li className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 text-violet-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414L8.414 15 4.293 10.879a1 1 0 011.414-1.414L8.414 12.172l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>APIs & Microservices (Spring Boot)</span>
              </li>

              <li className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 text-violet-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414L8.414 15 4.293 10.879a1 1 0 011.414-1.414L8.414 12.172l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Cloud Native & Containerization (Docker, K8s)</span>
              </li>

              <li className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 text-violet-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414L8.414 15 4.293 10.879a1 1 0 011.414-1.414L8.414 12.172l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Security: JWT, OAuth2, Secure APIs</span>
              </li>

              <li className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 text-violet-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414L8.414 15 4.293 10.879a1 1 0 011.414-1.414L8.414 12.172l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>BPMN Workflow Systems & Process Automation</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#projects" aria-label="View projects">
                <Button size="lg">See Projects</Button>
              </Link>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open resume"
              >
                <Button variant="outline" size="lg">
                  Resume
                </Button>
              </a>

              <Link href="#contact" aria-label="Contact">
                <Button variant="ghost" size="lg">
                  Contact
                </Button>
              </Link>
            </div>
          </div>

          <Card className="glass border-slate-800">
            <CardContent className="p-10">
              <h3 className="text-2xl font-semibold mb-4">Snapshot</h3>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">2+</div>
                  <div className="text-xs text-slate-400">Years</div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-white">5+</div>
                  <div className="text-xs text-slate-400">Projects</div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-white">1</div>
                  <div className="text-xs text-slate-400">Companies</div>
                </div>
              </div>

              <h4 className="text-sm font-medium mb-2 text-slate-300">
                Core Skills
              </h4>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>Java</Badge>
                <Badge>Spring Boot</Badge>
                <Badge>REST</Badge>
                <Badge>Microservices</Badge>
                <Badge>Docker</Badge>
                <Badge>GraphQL</Badge>
                <Badge>Nextjs</Badge>
              </div>

              <p className="text-sm text-slate-400 mb-4">
                I focus on maintainable architecture, observable systems, and
                pragmatic engineering that delivers business value.
              </p>

              <div className="flex gap-3">
                <Link href="#projects">
                  <Button size="sm">Explore Work</Button>
                </Link>

                <Link href="#contact">
                  <Button variant="outline" size="sm">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
