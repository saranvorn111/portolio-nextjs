"use client";
import Link from "next/link";
import { Mail, MapPin, Code2, ArrowUpRight } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
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
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/50
                p-8
                backdrop-blur-sm
              "
            >
              <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>

              <div className="space-y-5">
                <ContactItem
                  icon={<Code2 />}
                  title="Focus"
                  value="Backend Development"
                />

                <ContactItem
                  icon={<MapPin />}
                  title="Location"
                  value="Cambodia"
                />

                <ContactItem
                  icon={<Mail />}
                  title="Email"
                  value="Saranvorn529@gmail.com"
                  link={mail}
                />
              </div>
            </motion.div>

            {/* Social */}
            <div className="flex gap-4">
              <SocialButton
                href="https://github.com/saranvorn111"
                icon={<FiGithub size={20} />}
                text="Github"
              />

              <SocialButton
                href="https://linkedin.com/in/vornsaran"
                icon={<FiLinkedin size={20} />}
                text="LinkedIn"
              />
            </div>
          </motion.div>

          {/* Right CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="
                flex
                h-full
                flex-col
                justify-center
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/50
                p-10
                backdrop-blur-sm
              "
            >
              <h3 className="text-3xl font-bold">Open To Opportunities</h3>

              <p className="mt-4 leading-8 text-slate-400">
                I’m interested in backend developer roles where I can improve my
                engineering skills, contribute to real-world projects, and work
                with a strong development team.
              </p>

              <div className="mt-8 flex gap-3">
                <motion.div whileHover={{ y: -2 }}>
                  <a href={mail}>
                    <Button size="lg">
                      Contact Me
                      <Mail className="ml-2" size={18} />
                    </Button>
                  </a>
                </motion.div>

                <motion.div whileHover={{ y: -2 }}>
                  <Link href="#projects">
                    <Button size="lg" variant="outline">
                      Projects
                      <ArrowUpRight className="ml-2" size={18} />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  title,
  value,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="
        rounded-xl
        bg-violet-500/10
        p-3
        text-violet-400
      "
      >
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-500">{title}</p>

        {link ? (
          <a href={link} className="text-slate-200 hover:text-violet-400">
            {value}
          </a>
        ) : (
          <p className="text-slate-200">{value}</p>
        )}
      </div>
    </div>
  );
}

function SocialButton({
  href,
  icon,
  text,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <motion.div whileHover={{ y: -3 }} className="flex-1">
      <Link
        href={href}
        target="_blank"
        className="
          flex
          items-center
          justify-center
          gap-3
          rounded-xl
          border
          border-slate-800
          bg-slate-900/50
          py-4
          transition
          hover:border-violet-500
        "
      >
        {icon}
        {text}
      </Link>
    </motion.div>
  );
}
