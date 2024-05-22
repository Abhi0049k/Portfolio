import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mangalam's Showcase",
  description: "I'm deeply passionate about web development, with a strong focus on backend development using Node.js. My academic background has equipped me with a solid understanding of programming, data structures, and algorithms. My journey into backend development began at Masai School, where I was introduced to Node.js, and I was immediately captivated by its potential for creating fast and scalable web applications. I'm known for being a quick learner and for excelling in collaborative teams, where I enthusiastically take on complex challenges with unwavering determination. Additionally, I possess expertise in prompt engineering and crafting AI-powered solutions, contributing to innovation in the world of technology.",
  icons: {
    icon: [
      { url: './fevicon.ico' },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
