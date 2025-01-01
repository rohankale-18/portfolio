import ProjectCard from "./components/ProjectCard"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, useScroll } from "motion/react"
import { FaLocationDot } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

function App() {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end']
	})

	useEffect(() => {
		const lenis = new Lenis()

		function raf(time) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	})
	return (
		<div className='relative w-full min-h-[100dvh] bg-slate-950 text-white'>
			<div className="max-w-7xl pt-4 mx-auto sticky top-0 z-10">
				<nav className='w-full bg-gray-950/50 backdrop-blur-lg rounded-full h-[50px] flex justify-center ring-1 ring-white'>

				</nav>
			</div>
			<div className='w-full flex justify-center font-poppins pb-20'>
				<main className='w-full max-w-screen-2xl bg-secondary'>
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.75 }}
						className="w-full flex flex-col md:flex-row gap-5">
						<div className='md:sticky md:top-24 md:w-[60%] h-fit flex justify-center md:justify-end p-5'>
							<div className="max-w-[450px] w-2/3 md:w-full h-full text-center">
								<img src="Portfolio.jpg" alt="rohan's photo" className="rounded-full" />
								<div className="my-4 space-y-2.5">
									<p>Connect with me:</p>
									<div className="flex space-x-4 justify-center">
										<a href="https://github.com/rohankale-18" target="_blank" rel="noopener noreferrer">
											<FaGithub size={35} className="hover:scale-[1.05] transition-all duration-100 ease-in-out cursor-pointer active:scale-[0.99]" />
										</a>
										<a href="https://www.linkedin.com/in/rohan-kale-rk61003/" target="_blank" rel="noopener noreferrer">
											<FaLinkedin size={35} className="hover:scale-[1.05] transition-all duration-100 ease-in-out cursor-pointer active:scale-[0.99]" />
										</a>
										<a href="https://leetcode.com/u/rohankale_18/" target="_blank" rel="noopener noreferrer">
											<SiLeetcode size={35} className="hover:scale-[1.05] transition-all duration-100 ease-in-out cursor-pointer active:scale-[0.99]" />
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="h-fit px-10 md:pb-20">
							<section className='flex flex-col space-y-5 h-fit md:min-h-[500px] justify-center py-10'>
								<span className="text-2xl 2xl:text-3xl font-bold">Hi, I'm Rohan Kale</span>
								<span className="text-lg 2xl:text-xl flex items-center gap-1">
									<FaLocationDot /> Pune, India.
								</span>
								<span className="text-lg 2xl:text-xl flex">
									A Fullstack Software Developer with specialization in frontend development using React.js/Next.js, Javascirpt, Typescript and TailwindCSS
								</span>
								<div>
									Technologies familiar with:
									<div className="flex flex-wrap gap-2 py-3">
										{["React", "TailwindCSS", "Python", "C/C++", "Javascript", "HTML5", "CSS3", "Typescript"].map((tech, index) => (
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
							<section className="flex flex-col space-y-5 min-h-[500px] justify-center py-10">
								<span className="text-2xl 2xl:text-3xl font-bold">Experience</span>
								<div className="text-lg 2xl:text-xl">
									<span className="font-semibold">
										Cognimed Technologies Private Limited - Fullstack Developer Intern
									</span>
									<br />
									<span className="font-medium text-base 2xl:text-lg">
										May 2024 – Present
									</span>
									<ul className="space-y-2 py-4 font-normal text-base 2xl:text-lg list-disc list-inside">
										<li>
											Developed pixel-perfect user interfaces by translating high-fidelity designs into responsive and user-friendly web pages.
										</li>
										<li>
											Built and maintained reusable components for the internal UI library, improving development efficiency and scalability.
										</li>
										<li>
											Assisted in designing and implementing robust APIs in the backend using Python FastAPI and integrated them with the React-based frontend.
										</li>
										<li>
											Leveraged technologies like React.js, JavaScript, TailwindCSS, Redux Toolkit, and Python FastAPI to deliver seamless user experiences.
										</li>
									</ul>
								</div>
							</section>
						</div>
					</motion.div>
					<div className="w-full text-center py-20">
						<a href="/portfolio/RohanResume.pdf" target="_blank" rel="noopener noreferrer" class="text-xl font-medium text-primary hover:text-primary-light hover:underline">
							🚀 You can View or Download My Resume Here!
						</a>
					</div>
					<div className="w-full flex flex-col items-center gap-10 px-10 relative mb-[100vh]">
						<div className="w-full flex flex-col items-center gap-10 sticky top-0" ref={container}>
							<ProjectCard
								title="CF Stats Analyzer"
								imgSrc={"CFStats.png"}
								description="CF Stats Analyzer is a web app that helps competitive programmers track and visualize their performance on Codeforces."
								techStack={["React.js", "TailwindCSS", "Chart.js", "Node.js"]}
								link="https://github.com/rohankale-18/CFstats-Analyzer"
								progress={scrollYProgress}
								i={0}
								targetScale={0.92}
								range={[0, 1]}
							/>
							<ProjectCard
								title="Digital Whiteboard"
								imgSrc={"DigitalWhiteboard.png"}
								description="A digital whiteboard application that allows users to draw shapes, add text, and interact with the board in real-time."
								techStack={['React.js', 'Canvas API', 'TailwindCSS']}
								link="https://github.com/rohankale-18/Digital-Whiteboard"
								progress={scrollYProgress}
								i={1}
								targetScale={0.95}
								range={[0.25, 1]}
							/>
							<ProjectCard
								imgSrc="GeneratorMaintenance.png"
								title="Generator Maintenance Dashboard - Full Stack Web Application"
								description="A full-stack web application to streamline Generator Maintenance using Machine Learning."
								techStack={['React.js', 'TailwindCSS', 'FastAPI', 'Supabase (PostgreSQL)', 'JWT Authentication']}
								link="https://github.com/rohankale-18/fyp-frontend"
								progress={scrollYProgress}
								i={2}
								targetScale={0.97}
								range={[0.5, 1]}
							/>
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}

export default App
