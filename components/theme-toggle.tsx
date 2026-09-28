"use client";

import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem("theme", theme);
  } catch {}
}

export default function ThemeToggle({ className }: { className?: string }) {
  const toggle = () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next: Theme = current === "light" ? "dark" : "light";

    // Cross-fade between themes where the View Transitions API is supported
    if (
      document.startViewTransition &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      document.startViewTransition(() => applyTheme(next));
    } else {
      applyTheme(next);
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      title="Toggle theme"
      className={cn(
        "relative flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-violet-500/50 hover:text-white",
        className,
      )}
    >
      {/* Both icons render; CSS picks one from data-theme so SSR never mismatches */}
      <Sun
        size={17}
        className="absolute transition-all duration-500 dark:rotate-0 dark:scale-100 dark:opacity-100 light:-rotate-90 light:scale-0 light:opacity-0"
      />
      <Moon
        size={17}
        className="absolute transition-all duration-500 dark:rotate-90 dark:scale-0 dark:opacity-0 light:rotate-0 light:scale-100 light:opacity-100"
      />
    </button>
  );
}
