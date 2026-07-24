"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (!visible) return null;

  return (
    <button
      onClick={scrollTop}
      aria-label="Scroll to top"
      className="
        fixed
        bottom-8
        right-8
        z-50
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        bg-violet-600
        text-white
        shadow-lg
        transition
        hover:bg-violet-500
        hover:-translate-y-1
        cursor-pointer
      "
    >
      <ArrowUp size={22} />
    </button>
  );
}
