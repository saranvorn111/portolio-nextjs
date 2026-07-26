import Link from "next/link";
import { Mail, MapPin, Code2, ArrowUpRight } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const mail = "mailto:Saranvorn529@gmail.com";

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28"
      aria-labelledby="contact-heading"
    >
      {/* Background */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="container relative mx-auto max-w-5xl px-4">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mx-auto mb-5 h-1 w-20 rounded-full bg-violet-600" />

          <h2
            id="contact-heading"
            className="text-4xl font-extrabold sm:text-5xl"
          >
            Let’s Connect
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            I’m currently focused on backend development and building scalable
            applications. Feel free to connect with me for opportunities,
            collaborations, or technical discussions.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Information */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8">
              <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-violet-500/10 p-3">
                    <Code2 className="text-violet-400" size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Focus</p>

                    <p className="text-slate-200">Backend Development</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-violet-500/10 p-3">
                    <MapPin className="text-violet-400" size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Location</p>

                    <p className="text-slate-200">Cambodia</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-violet-500/10 p-3">
                    <Mail className="text-violet-400" size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Email</p>

                    <a
                      href={mail}
                      className="text-slate-200 hover:text-violet-400"
                    >
                      Saranvorn529@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Link
                href="https://github.com/saranvorn111"
                target="_blank"
                className="flex flex-1 items-center justify-center gap-3 rounded-xl border border-slate-800 bg-slate-900/50 py-4 transition hover:border-violet-500"
              >
                <FiGithub size={20} />
                Github
              </Link>

              <Link
                href="https://linkedin.com/in/vornsaran"
                target="_blank"
                className="flex flex-1 items-center justify-center gap-3 rounded-xl border border-slate-800 bg-slate-900/50 py-4 transition hover:border-violet-500"
              >
                <FiLinkedin size={20} />
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Right CTA */}
          <div className="flex flex-col justify-center rounded-3xl border border-slate-800 bg-slate-900/50 p-10">
            <h3 className="text-3xl font-bold">Open To Opportunities</h3>

            <p className="mt-4 leading-8 text-slate-400">
              I’m interested in backend developer roles where I can improve my
              engineering skills, contribute to real-world projects, and work
              with a strong development team.
            </p>

            <div className="mt-8 flex gap-3">
              <a href={mail}>
                <Button size="lg" className="cursor-pointer">
                  Contact Me
                  <Mail className="ml-2" size={18} />
                </Button>
              </a>

              <Link href="#projects">
                <Button size="lg" variant="outline" className="cursor-pointer">
                  Projects
                  <ArrowUpRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
