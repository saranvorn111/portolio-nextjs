import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: {
    default: "Vorn Saran | Full-Stack Developer",
    template: "%s | Vorn Saran",
  },
  description:
    "Backend-focused Full-Stack Developer specializing in Java, Spring Boot, Next.js, Docker, PostgreSQL, and Microservices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
