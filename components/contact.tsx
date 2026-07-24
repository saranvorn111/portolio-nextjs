import Link from "next/link";
import { Mail, MapPin, Briefcase, ArrowUpRight } from "lucide-react";
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
      {/* Background decoration */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="container relative mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mx-auto mb-5 h-1 w-20 rounded-full bg-violet-500" />

          <h2
            id="contact-heading"
            className="text-4xl font-extrabold sm:text-5xl"
          >
            Let us Build Something Together
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400 leading-8">
            I’m a backend developer specializing in Spring Boot, Next.js,
            Microservices, and scalable web applications. I’m open to full-time
            opportunities, freelance projects, and technical collaborations.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-slate-300">
              <Briefcase className="text-violet-400" size={22} />
              <span>Backend Developer | Spring Boot | Next.js</span>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <MapPin className="text-violet-400" size={22} />
              <span>Cambodia</span>
            </div>

            <div className="space-y-4 pt-5">
              {/* Email */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition hover:border-violet-500">
                <div className="flex items-center gap-3">
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

              {/* Github */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition hover:border-violet-500">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-violet-500/10 p-3">
                    <FiGithub className="text-violet-400" size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Github</p>

                    <Link
                      href="https://github.com/saranvorn111"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-200 hover:text-violet-400"
                    >
                      github.com/saranvorn111
                    </Link>
                  </div>
                </div>
              </div>

              {/* Linkedin */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition hover:border-violet-500">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-violet-500/10 p-3">
                    <FiLinkedin className="text-violet-400" size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">LinkedIn</p>

                    <Link
                      href="https://linkedin.com/in/vornsaran"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-200 hover:text-violet-400"
                    >
                      linkedin.com/in/vornsaran
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-5">
              <a href={mail}>
                <Button size="lg">
                  Email Me
                  <Mail className="ml-2" size={18} />
                </Button>
              </a>

              <Link href="#projects">
                <Button size="lg" variant="outline">
                  View Projects
                  <ArrowUpRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action={mail}
            method="GET"
            className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 shadow-xl backdrop-blur"
          >
            <h3 className="mb-6 text-2xl font-bold">Send Me A Message</h3>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Name
                </label>

                <input
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-700 bg-transparent px-4 py-3 text-white outline-none transition focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Email
                </label>

                <input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-slate-700 bg-transparent px-4 py-3 text-white outline-none transition focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Message
                </label>

                <textarea
                  name="body"
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-xl border border-slate-700 bg-transparent px-4 py-3 text-white outline-none transition focus:border-violet-500"
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
