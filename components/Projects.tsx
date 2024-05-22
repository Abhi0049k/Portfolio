"use client"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "Everyday Needs",
        description: "Clone of an e-commerce website called DailyObjects, which basically focuses on selling mobile covers, backpacks, and watchbands",
        technologies: [
            "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
            "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
            "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
            "https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7",
            "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
            "https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white",
            "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens",
            "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
            "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
            "https://img.shields.io/badge/TypeScript-%233178C6.svg?style=for-the-badge&logo=typescript&logoColor=white",
            "https://img.shields.io/badge/React.js-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white",
            "https://img.shields.io/badge/Tailwind_CSS-%231a202c.svg?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC",
            "https://img.shields.io/badge/Redux-%23764ABC.svg?style=for-the-badge&logo=redux&logoColor=white",
            "https://img.shields.io/badge/Electron-9B59B6?style=for-the-badge&logo=electron&logoColor=white"
        ],
        githubLink: "https://github.com/Abhi0049k/Everyday-Needs",
        frontendLink: "https://inquisitive-froyo-761ed8.netlify.app/",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right, var(--cyan-500), var(--emerald-500))] flex items-center justify-center text-white">
                <Image width={600} height={600} src="https://github.com/Abhi0049k/Everyday-Needs/blob/main/frontend/icon/Everyday%20needs-logo.jpeg?raw=true" alt="EverydayNeeds" />
            </div>
        )
    },
    {
        title: "Talkative Tribe",
        description: "One of the key features of Talkative Tribe is the ability to create dedicated chat rooms.",
        technologies: [
            "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
            "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
            "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
            "https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7",
            "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
            "https://img.shields.io/badge/passport.js-%34526.svg?style=for-the-badge&logo=passport&logoColor=white",
            "https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white",
            "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens",
            "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
            "https://img.shields.io/badge/mongodb-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
            "https://img.shields.io/badge/nodemailer-%230159c1.svg?style=for-the-badge&logo=nodemailer&logoColor=white",
            "https://img.shields.io/badge/google%20oauth-%234285f4.svg?style=for-the-badge&logo=google&logoColor=white",
            "https://img.shields.io/badge/render-%23000000.svg?style=for-the-badge&logo=render&logoColor=white",
            "https://img.shields.io/badge/axios-%23000000.svg?style=for-the-badge&logo=axios&logoColor=white",
            "https://img.shields.io/badge/googleapis-%234285f4.svg?style=for-the-badge&logo=google&logoColor=white"
        ],
        githubLink: "https://github.com/Abhi0049k/Talkative-Tribe",
        frontendLink: "https://cute-croissant-2a6b2d.netlify.app/",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right, var(--cyan-500), var(--emerald-500))] flex items-center justify-center text-white">
                <Image alt="Talkative Tribe" width={600} height={600} src="https://cdn.dribbble.com/users/267404/screenshots/3713416/talkup.png" />
            </div>
        )
    },
    {
        title: "Tripping.com",
        description: "Your Tripping.com is a clone of TripVillas which is a web-based platform that allows users to discover and book vacation rental properties for their getaways globally.",
        technologies: [
            "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
            "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
            "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
            "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
            "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
            "https://img.shields.io/badge/mongodb-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
            "https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white",
            "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens",
            "https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7",
            "https://img.shields.io/badge/render-%23000000.svg?style=for-the-badge&logo=render&logoColor=white"
        ],
        githubLink: "https://github.com/Abhi0049k/ready-lock-9044",
        frontendLink: "https://nimble-starburst-6bbdd4.netlify.app/",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right, var(--cyan-500), var(--emerald-500))] flex items-center justify-center text-white">
                <Image alt="Tripping.com" width={600} height={600} src="https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/Pimal2-1.2d5d237dbd32.jpg" />
            </div>
        )
    },
    {
        title: "Code Converter",
        description: "Seamlessly convert code snippets between multiple programming languages. Identify and troubleshoot bugs with step-by-step debugging and stack trace analysis. Ensure code adheres to industry best practices and coding standards.",
        technologies: [
            "https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white",
            "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
            "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
            "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
            "https://img.shields.io/badge/OpenAI-FF4A52?style=for-the-badge&logo=openai&logoColor=white"
        ],
        githubLink: "https://github.com/Abhi0049k/Code-Converter-Debugger-QualityChecker",
        frontendLink: "https://code-converter-debugger-quality-checker-frontend.vercel.app/",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right, var(--cyan-500), var(--emerald-500))] flex items-center justify-center text-white">
                <Image alt="CodeConverter" width={600} height={600} src="https://i1.wp.com/convertcodes.com/wp-content/uploads/2018/10/convertcodes-2.png?fit=2820%2C1200&ssl=1" />
            </div>
        )
    },
    {
        title: "URL Shortener",
        description: "URL shortener is a cutting-edge and user-friendly URL shortening service designed to simplify and optimize your web experience.",
        technologies: [
            "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
            "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
            "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
            "https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7",
            "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
            "https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white",
            "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
            "https://img.shields.io/badge/redis-%23DC382D.svg?style=for-the-badge&logo=redis&logoColor=white",
            "https://img.shields.io/badge/cyclic.sh-%23000000.svg?style=for-the-badge&logo=cyclic&logoColor=white"
        ],
        githubLink: "https://github.com/Abhi0049k/URL-Shortener",
        frontendLink: "https://gilded-croquembouche-6f562a.netlify.app/",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right, var(--cyan-500), var(--emerald-500))] flex items-center justify-center text-white">
                <Image alt="URL Shortener" width={600} height={600} src="https://d19fbfhz0hcvd2.cloudfront.net/PR/wp-content/uploads/2016/09/10_UsingURLShorteners-777x437.jpg" />
            </div>
        )
    },
    {
        title: "Task Management System",
        description: "Task Management App is a Application which helps the user to manage his/her tasks and increase their productivity.",
        technologies: [
            "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
            "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
            "https://img.shields.io/badge/react.js-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white",
            "https://img.shields.io/badge/mongodb-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
            "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
        ],
        githubLink: "https://github.com/Abhi0049k/Task-Management-App",
        frontendLink: "https://guileless-cobbler-8ed7bb.netlify.app/",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right, var(--cyan-500), var(--emerald-500))] flex items-center justify-center text-white">
                <Image alt="Task Management System" width={600} height={600} src="https://www.pngitem.com/pimgs/m/245-2456104_png-transparent-icon-todo-list-png-download.png" />
            </div>
        )
    },
    {
        title: "Beauty Bliss",
        description: "Clone of an e-commerce website called Sugar Cosmetics, which basically focuses on selling cosmetics",
        technologies: [
            "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
            "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
            "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
            "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
        ],
        githubLink: "https://github.com/Sonu-Shettiyar/SugarCosmetics-Clone",
        frontendLink: "https://gleeful-lily-870fcb.netlify.app/",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right, var(--cyan-500), var(--emerald-500))] flex items-center justify-center text-white">
                <Image alt="Beauty Bliss" width={600} height={600} src="https://1000logos.net/wp-content/uploads/2020/07/SUGAR-Cosmetics-Logo.jpg" />
            </div>
        )
    },
    {
        title: "Portfolio",
        description: "Welcome to my portfolio! Explore my projects and reach out to connect and collaborate.",
        technologies: [
            "https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white",
            "https://img.shields.io/badge/Typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
            "https://img.shields.io/badge/Tailwind_CSS-%231a202c.svg?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC"
        ],
        githubLink: "https://github.com/Abhi0049k/Abhi0049k.github.io",
        frontendLink: "https://abhi0049k.github.io/",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right, var(--cyan-500), var(--emerald-500))] flex items-center justify-center text-white">
                <Image alt="Portfolio" layout="fill"
                    objectFit="cover" src="https://fontawesome.com/social/code?f=classic&s=&v=5" />
            </div>
        )
    }
];


export default function Projects() {

    return (
        <div>
            <StickyScroll content={content} />
        </div>
    );
}
