"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ArrowUpRight, FileText } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";
import { navItems, site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="whitespace-nowrap text-xl font-bold text-white transition hover:text-violet-400"
        >
          Vorn Saran
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Button variant="outline" asChild>
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>

            <Button asChild>
              <a
                href={site.cv}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="border-l border-slate-800 bg-slate-950 p-0"
            >
              <SheetHeader className="border-b border-slate-800 px-6 py-6">
                <SheetTitle className="text-left text-xl text-white">
                  Vorn Saran
                </SheetTitle>
              </SheetHeader>

              <div className="flex h-full flex-col justify-between px-6 py-8">
                <nav className="space-y-3">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.08,
                      }}
                      className="group flex items-center justify-between rounded-xl px-4 py-4 text-lg font-medium text-slate-300 transition hover:bg-slate-900 hover:text-white"
                    >
                      {item.label}

                      <ArrowUpRight className="h-5 w-5 opacity-0 transition group-hover:opacity-100" />
                    </motion.a>
                  ))}
                </nav>

                <div className="space-y-3">
                  <Button
                    className="w-full justify-center"
                    variant="outline"
                    asChild
                  >
                    <a
                      href={site.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub className="mr-2 h-5 w-5" />
                      GitHub
                    </a>
                  </Button>

                  <Button className="w-full justify-center" asChild>
                    <a href={site.cv} download>
                      <FileText className="mr-2 h-5 w-5" />
                      Download Resume
                    </a>
                  </Button>

                  <p className="pt-6 text-center text-xs text-slate-500">
                    © 2026 Vorn Saran
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
