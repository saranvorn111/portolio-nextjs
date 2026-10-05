"use client";
import { motion, type Variants } from "framer-motion";

import { experiences } from "@/data/experience";


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
    x: -24,
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
    <section id="experience" className="overflow-hidden py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 sm:mb-16"
        >
          <div className="mb-4 h-1 w-16 rounded-full bg-linear-to-r from-violet-500 to-pink-500" />

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
          {/* Animated Vertical Line (centered under the 32px / 40px icons) */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute left-[15px] top-0 w-0.5 bg-linear-to-b from-violet-500 via-pink-500 to-cyan-500 sm:left-[19px]"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-6 sm:space-y-8"
          >
            {experiences.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={`${item.title}-${item.company}`}
                  variants={cardVariants}
                  className="relative pl-12 sm:pl-16"
                >
                  {/* Icon */}
                  <div className="absolute left-0 top-4 flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-950 text-violet-400 sm:top-6 sm:h-10 sm:w-10 sm:rounded-xl">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>

                  {/* Card */}
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/30 hover:shadow-[0_0_35px_rgba(139,92,246,0.12)] sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-xs font-medium uppercase tracking-wider text-violet-400 sm:text-sm sm:normal-case sm:tracking-normal">
                        {item.type}
                      </p>

                      <span className="rounded-full border border-slate-800 px-2.5 py-0.5 text-xs text-slate-500 sm:text-sm">
                        {item.period.trim()}
                      </span>
                    </div>

                    <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">
                      {item.title}
                    </h3>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 inline-block text-sm text-slate-400 transition-colors hover:text-violet-400 hover:underline sm:text-base"
                    >
                      {item.company}
                    </a>

                    <p className="mt-3 text-sm leading-6 text-slate-300 sm:mt-4 sm:text-base sm:leading-7">
                      {item.description}
                    </p>

                    {/* Skills */}
                    <ul className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
                      {item.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-full border border-slate-700 bg-slate-950 px-2.5 py-0.5 text-[11px] text-slate-300 transition-colors hover:border-violet-500/60 sm:px-3 sm:py-1 sm:text-xs"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
