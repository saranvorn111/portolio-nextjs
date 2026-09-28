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
    <html
      lang="en"
      data-theme="dark"
      className={geist.variable}
      suppressHydrationWarning
    >
      <head>
        {/* Apply the saved/system theme before first paint to avoid a flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
