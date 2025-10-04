"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import React, { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [isHidden, setIsHidden] = useState(false);
    const [open, setOpen] = useState(false);
	const { scrollY } = useScroll();
	const lastYRef = useRef(0);

	useMotionValueEvent(scrollY, "change", (y) => {
		const difference = y - lastYRef.current;
		if (Math.abs(difference) > 50) {
			setIsHidden(difference > 0);

			lastYRef.current = y;
		}
	});

    const buttonContent = [
        {
            id: "about",
            link: "#about",
            content: "About",
        },
        {
            id: "experience",
            link: "#experience",
            content: "Experience",
        },
        {
            id: "resume",
            link: "#resume",
            content: "Resume",
        },
        {
            id: "projects",
            link: "#projects",
            content: "Projects",
        },
    ];
    return (
        <>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/80 w-full h-full md:hidden backdrop-blur"
                    />
                )}
            </AnimatePresence>
            <motion.div
                animate={isHidden ? "hidden" : "visible"}
                whileHover="visible"
                onFocusCapture={() => setIsHidden(false)}
                variants={{
                    hidden: {
                        y: "-70%",
                    },
                    visible: {
                        y: "0%",
                    },
                }}
                transition={{ duration: 0.2 }}
                className="font-poppins max-w-7xl p-6 mx-auto px-4 sticky top-0 z-10"
            >
                <nav className="w-full bg-gray-950/30 shadow-lg shadow-white/5 backdrop-blur-lg rounded-full h-[52px] flex justify-between ring-1 ring-white/50 items-center z-50">
                    <img
                        src="./Logo.svg"
                        alt=""
                        className="p-2.5 h-full"
                    />
                    <div className="hidden md:flex gap-4 p-2.5">
                        {buttonContent.map((button, index) => (
                            <a
                                href={button.link}
                                key={index}
                                className={`relative px-4 py-1 rounded-full hover:bg-gray-900 transition-colors duration-100 ease-in-out`}
                            >
                                <span className="relative z-10 mix-blend-difference">
                                    {button.content}
                                </span>
                            </a>
                        ))}
                    </div>
                    <p
                        className="px-2.5 md:hidden"
                        onClick={() => setOpen(!open)}
                    >
                        <GiHamburgerMenu size={25} />
                    </p>
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute top-full z-50 mt-5 w-full h-fit gap-5 text-white flex flex-col items-center bg-gray-950 py-5 rounded-3xl border shadow shadow-white"
                            >
                                <div className="fixed inset-0 bg-black/80 w-full h-full md:hidden backdrop-blur rounded-full" />
                                <a
                                    onClick={() => setOpen(false)}
                                    href="#about"
                                    className={`px-4 py-1 rounded-full`}
                                >
                                    About
                                </a>
                                <a
                                    onClick={() => setOpen(false)}
                                    href="#experience"
                                    className={`px-4 py-1 rounded-full`}
                                >
                                    Experience
                                </a>
                                <a
                                    onClick={() => setOpen(false)}
                                    href="#resume"
                                    className={`px-4 py-1 rounded-full`}
                                >
                                    Resume
                                </a>
                                <a
                                    onClick={() => setOpen(false)}
                                    href="#projects"
                                    className={`px-4 py-1 rounded-full`}
                                >
                                    Projects
                                </a>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </motion.div>
        </>
    );
};

export default Navbar;
