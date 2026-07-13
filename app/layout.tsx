import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sharad Pawar Saini — Founder, EHP · AI/ML & Full-Stack Engineer",
  description:
    "Portfolio of Sharad Pawar Saini. Founder of EHP (Emergency Health Profile), Data Science Intern at Prodigy InfoTech, and B.Tech CS undergrad at Graphic Era Hill University. Building AI-native products and full-stack applications. Open to AI/ML, GenAI, and SDE roles.",
  keywords: [
    "Sharad Pawar Saini",
    "AI ML Engineer",
    "GenAI",
    "Full Stack Developer",
    "EHP Emergency Health Profile",
    "React",
    "Next.js",
    "Python",
    "Machine Learning",
    "Graphic Era Hill University",
  ],
  authors: [{ name: "Sharad Pawar Saini" }],
  creator: "Sharad Pawar Saini",
  openGraph: {
    title: "Sharad Pawar Saini — AI/ML & Full-Stack Engineer",
    description:
      "Founder of EHP, Data Science Intern at Prodigy InfoTech. Building AI-native products. Open to placement roles.",
    url: "https://sharad-pawar-saini.vercel.app",
    siteName: "Sharad Pawar Saini Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharad Pawar Saini — AI/ML & Full-Stack Engineer",
    description:
      "Founder of EHP, building AI-native products and full-stack applications. Open to placement roles.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={outfit.className}>
        {children}
      </body>
    </html>
  );
}
