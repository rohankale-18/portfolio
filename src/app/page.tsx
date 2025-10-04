import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import ReactLenis from "lenis/react";

type Project = {
    imgSrc: string;
    title: string;
    description: string;
    techStack: string[];
    link: string;
};

const PROJECTS: Project[] = [
    {
        title: "URL Shortener",
        imgSrc: "URLShortener.png",
        description:
            "A modern, scalable URL shortening service built with Next.js, Hono, Upstash Redis, Neon PostgreSQL, Drizzle ORM, Tailwind CSS, and Shadcn UI.",
        techStack: ["Next.js", "TailwindCSS", "Hono.js", "Typescript", "NeonDB (PostgreSQL)", "Drizzle ORM", "Shadcn UI", "Upstash Redis"],
        link: "https://github.com/rohankale-18/url-shortner",
    },
    {
        title: "CF Stats Analyzer",
        imgSrc: "CFStats.png",
        description:
            "CF Stats Analyzer is a web app that helps competitive programmers track and visualize their performance on Codeforces.",
        techStack: ["React.js", "TailwindCSS", "Chart.js", "Node.js"],
        link: "https://github.com/rohankale-18/CFstats-Analyzer",
    },
    {
        title: "Digital Whiteboard",
        imgSrc: "DigitalWhiteboard.png",
        description:
            "A digital whiteboard application that allows users to draw shapes, add text, and interact with the board in real-time.",
        techStack: ["React.js", "Canvas API", "TailwindCSS"],
        link: "https://github.com/rohankale-18/Digital-Whiteboard",
    },
    {
        imgSrc: "GeneratorMaintenance.png",
        title: "Generator Maintenance Dashboard - Full Stack Web Application",
        description:
            "A full-stack web application to streamline Generator Maintenance using Machine Learning.",
        techStack: [
            "React.js",
            "TailwindCSS",
            "FastAPI",
            "Supabase (PostgreSQL)",
            "JWT Authentication",
        ],
        link: "https://github.com/rohankale-18/fyp-frontend",
    },
];

function App() {
    return (
        <ReactLenis root>
            <div className="relative w-full min-h-[100dvh] bg-gray-950/95 text-white">
                <Navbar />
                <div className="w-full flex justify-center font-poppins pb-20">
                    <main className="w-full max-w-screen-2xl">
                        <div className="w-full flex flex-col md:flex-row gap-5">
                            <div className="md:sticky md:top-24 md:w-[50%] lg:w-[40%] h-fit flex justify-center md:justify-end p-5">
                                <div className="max-w-[450px] w-2/3 md:w-full h-full text-center">
                                    <img
                                        src="/portfolio/Portfolio.jpg"
                                        alt="rohan's photo"
                                        className="rounded-full"
                                    />
                                    <div className="my-4 space-y-2.5">
                                        <p>Connect with me:</p>
                                        <div className="flex space-x-4 justify-center">
                                            <a
                                                href="https://github.com/rohankale-18"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FaGithub
                                                    size={35}
                                                    className="hover:scale-[1.05] transition-all duration-100 ease-in-out cursor-pointer active:scale-[0.99]"
                                                />
                                            </a>
                                            <a
                                                href="https://www.linkedin.com/in/rohan-kale-rk61003/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FaLinkedin
                                                    size={35}
                                                    className="hover:scale-[1.05] transition-all duration-100 ease-in-out cursor-pointer active:scale-[0.99]"
                                                />
                                            </a>
                                            <a
                                                href="https://leetcode.com/u/rohankale_18/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <SiLeetcode
                                                    size={35}
                                                    className="hover:scale-[1.05] transition-all duration-100 ease-in-out cursor-pointer active:scale-[0.99]"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-fit px-10 md:pb-20 md:w-[50%] lg:w-[60%]">
                                <section
                                    id="about"
                                    className="flex flex-col space-y-5 h-fit md:min-h-[500px] justify-center py-10"
                                >
                                    <span className="text-2xl 2xl:text-3xl font-bold">
                                        Hi, I'm Rohan Kale
                                    </span>
                                    <span className="text-lg 2xl:text-xl flex items-center gap-1">
                                        <FaLocationDot /> Pune, India.
                                    </span>
                                    <span className="text-lg 2xl:text-xl flex">
                                        A Fullstack Software Developer with
                                        specialization in frontend development
                                        using React.js/Next.js, Javascirpt,
                                        Typescript and TailwindCSS
                                    </span>
                                    <div>
                                        Technologies familiar with:
                                        <div className="flex flex-wrap gap-2 py-3">
                                            {[
                                                "React",
                                                "TailwindCSS",
                                                "Python",
                                                "C/C++",
                                                "Javascript",
                                                "HTML5",
                                                "CSS3",
                                                "Typescript",
                                            ].map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-tertiary px-3.5 py-2 rounded-full bg-gray-950 border"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </section>
                                <section
                                    id="experience"
                                    className="flex flex-col space-y-5 min-h-[500px] justify-center py-10"
                                >
                                    <span className="text-2xl 2xl:text-3xl font-bold">
                                        Experience
                                    </span>
                                    <div className="text-lg 2xl:text-xl">
                                        <span className="font-semibold">
                                            Cognimed Technologies Private
                                            Limited - Fullstack Developer Intern
                                        </span>
                                        <br />
                                        <span className="font-medium text-base 2xl:text-lg">
                                            May 2024 – Present
                                        </span>
                                        <ul className="space-y-2 py-4 font-normal text-base 2xl:text-lg list-disc list-inside">
                                            <li>
                                                Developed pixel-perfect user
                                                interfaces by translating
                                                high-fidelity designs into
                                                responsive and user-friendly web
                                                pages.
                                            </li>
                                            <li>
                                                Built and maintained reusable
                                                components for the internal UI
                                                library, improving development
                                                efficiency and scalability.
                                            </li>
                                            <li>
                                                Assisted in designing and
                                                implementing robust APIs in the
                                                backend using Python FastAPI and
                                                integrated them with the
                                                React-based frontend.
                                            </li>
                                            <li>
                                                Leveraged technologies like
                                                React.js, JavaScript,
                                                TailwindCSS, Redux Toolkit, and
                                                Python FastAPI to deliver
                                                seamless user experiences.
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <section
                            id="resume"
                            className="w-full text-center py-40"
                        >
                            <a
                                href="/portfolio/RohanResume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl font-medium text-white hover:text-primary-light hover:underline"
                            >
                                🚀 You can View or Download My Resume Here!
                            </a>
                        </section>
                        <section
                            className="w-full flex flex-col items-center gap-5"
                            id="projects"
                        >
                            <span className="text-3xl font-bold">
                                Personal Projects
                            </span>
                            {PROJECTS.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    imgSrc={project.imgSrc}
                                    title={project.title}
                                    description={project.description}
                                    techStack={project.techStack}
                                    link={project.link}
                                />
                            ))}
                        </section>
                    </main>
                </div>
            </div>
        </ReactLenis>
    );
}

export default App;
