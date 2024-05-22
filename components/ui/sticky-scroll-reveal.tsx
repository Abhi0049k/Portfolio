"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";

export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        title: string;
        description: string;
        technologies: string[];
        frontendLink?: string;
        githubLink?: string;
        content?: React.ReactNode | any;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const containerHeight = ref.current.offsetHeight;
        const scrollHeight = ref.current.scrollHeight;
        const scrollTop = ref.current.scrollTop;
        const scrollProgress = scrollTop / (scrollHeight - containerHeight);
        const cardsBreakpoints = content.map((_, index) => (index + 0.80) / cardLength);

        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(scrollProgress - breakpoint);
                if (distance < Math.abs(scrollProgress - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );

        setActiveCard(closestBreakpointIndex);
    });

    const backgroundColors = [
        "var(--slate-900)",
        // "var(--black)",
        // "var(--neutral-900)",
    ];

    const linearGradients = [
        "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
        // "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
        // "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
    ];
    return (
        <motion.div
            animate={{
                backgroundColor: backgroundColors[activeCard % backgroundColors.length],
            }}
            className="h-[40rem] overflow-y-scroll flex justify-center relative space-x-10 p-10"
            ref={ref}
            style={{ scrollbarWidth: "none" }}
        >
            <div className="div relative flex items-start px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-20">
                            <motion.h2
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-4xl font-bold text-slate-100"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-lg text-slate-300 max-w-md mt-8"
                            >
                                {item.description}
                            </motion.p>
                            <div className="flex gap-2 flex-wrap mt-4">
                                {
                                    item.technologies.map((el, i) => {
                                        return <motion.img key={i}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                            className="rounded-md"
                                            src={el}
                                        />
                                    })
                                }
                            </div>
                            <div className="flex gap-2 mt-4">
                                <Button className="border border-white" variant={"ghost"} asChild>
                                    <motion.a href={item.frontendLink} target="_blank" initial={{ opacity: 0 }} animate={{ opacity: activeCard === index ? 1 : 0.3 }} className="text-white flex gap-2">
                                        <CgWebsite />
                                        View Live
                                    </motion.a>
                                </Button>
                                <Button className="border border-white" variant={"ghost"} asChild>
                                    <motion.a href={item.githubLink} target="_blank" initial={{ opacity: 0 }} animate={{ opacity: activeCard === index ? 1 : 0.3 }} className="text-white flex gap-2">
                                        <FaGithub />
                                        Github
                                    </motion.a>
                                </Button>
                            </div>
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>
            <motion.div
                animate={{
                    background: linearGradients[activeCard % linearGradients.length],
                }}
                className={cn(
                    "hidden lg:block h-[84%] w-[40%] rounded-md bg-white sticky top-10 overflow-hidden",
                    contentClassName
                )}
            >
                {content[activeCard].content ?? null}
            </motion.div>
        </motion.div>
    );
};
