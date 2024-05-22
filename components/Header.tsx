"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function Header() {
    return (
        <div className="h-[40rem] w-full bg-slate-900 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-lg md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-700  text-center font-sans font-bold p-2">
                    Welcome to Mangalam&apos;s Portfolio
                </h1>
                <p></p>
                <p className="text-neutral-400 max-w-7xl mx-auto my-2 text-lg text-center relative z-10">
                    I am passionate about web development, particularly backend development using Node.js. During my studies, I gained a solid understanding of programming fundamentals, data structures, and algorithms, which has given me a solid foundation to build upon.
                    <br />
                    Additionally, I possess expertise in prompt engineering and crafting AI-powered solutions, contributing to innovation in the world of technology.
                </p>
            </div>
            <BackgroundBeams />
        </div>
    );
}
