export const site = {
  name: "Vorn Saran",
  role: "Backend Developer",
  email: "Saranvorn529@gmail.com",
  location: "Cambodia",
  cv: "/vornsaran_cv.pdf",
  socials: {
    github: "https://github.com/saranvorn111",
    linkedin: "https://www.linkedin.com/in/vorn-saran-911485300/",
    facebook: "https://web.facebook.com/vorn.saran.14",
  },
} as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;
