import ProjectCard from "./components/ProjectCard"
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
	return (
		<div className='relative w-full min-h-[100svh] bg-slate-950 text-white'>
			{/* <nav className='w-full bg-tertiary bg-opacity-[0.97] h-[8vh] flex justify-center sticky top-0 z-10'>
				<div className='w-full max-w-screen-2xl'>

				</div>
			</nav> */}
			<div className='w-full flex justify-center font-poppins pb-20'>
				<main className='w-full max-w-screen-2xl bg-secondary'>
					<div className="w-full flex gap-10">
						<div className='sticky top-20 w-[60%] h-fit flex justify-end'>
							<div className="max-w-[450px] w-full h-full">
								{/* <div className="size-40 bg-blue-500">
								
								</div> */}
								<img src="Portfolio.jpg" alt="" />

								<div className="my-4">
									<p>Connect with me:</p>
									<div className="flex space-x-4">
										<a href="https://github.com/rohankale-18" target="_blank" rel="noopener noreferrer">
											<FaGithub size={35} className="hover:scale-[1.05] transition-all duration-100 ease-in-out cursor-pointer active:scale-[0.99]" />
											</a>
											<a href="https://www.linkedin.com/in/rohan-kale-rk61003/" target="_blank" rel="noopener noreferrer">
											<FaLinkedin size={35} className="hover:scale-[1.05] transition-all duration-100 ease-in-out cursor-pointer active:scale-[0.99]" />
											</a>
									</div>
								</div>
							</div>
						</div>
						<div className="h-fit px-10 pb-20">
							<section className='flex flex-col space-y-5 min-h-[500px] justify-center py-10'>
								<span className="text-2xl 2xl:text-3xl font-bold">Hi, I'm Rohan Kale</span>
								<span className="text-lg 2xl:text-xl"> from Pune, India.<br />A Fullstack Software Developer with specialization in frontend development using React.js/Next.js, Javascirpt, Typescript and TailwindCSS</span>
								<div>
									Technologies familiar with:
									React, TailwindCSS, Python, C/C++, Javascript, HTML5, CSS3, Typescript
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
									<ul className="space-y-2 py-4 text-base 2xl:text-lg list-disc list-inside">
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
					</div>
					<div className="w-full flex flex-col items-center gap-10 px-10">
						<p className="w-full text-center text-4xl font-bold">Personal Projects</p>
						{/* <ProjectCard title="Quizify" /> */}
						<ProjectCard
							title="CF Stats Analyzer"
							imgSrc={"CFStats.png"}
							description="CF Stats Analyzer is a web app that helps competitive programmers track and visualize their performance on Codeforces."
							techStack={["React.js", "TailwindCSS", "Chart.js", "Node.js"]}
							link="https://github.com/rohankale-18/CFstats-Analyzer" />
						<ProjectCard
							title="Digital Whiteboard"
							imgSrc={"DigitalWhiteboard.png"}
							description="A digital whiteboard application that allows users to draw shapes, add text, and interact with the board in real-time."
							techStack={['React.js', 'Canvas API', 'TailwindCSS']}
							link="https://github.com/rohankale-18/Digital-Whiteboard"
						/>
						<ProjectCard
							imgSrc="GeneratorMaintenance.png"
							title="Generator Maintenance Dashboard - Full Stack Web Application"
							description="A full-stack web application to streamline Generator Maintenance using Machine Learning."
							techStack={['React.js', 'TailwindCSS', 'FastAPI', 'Supabase (PostgreSQL)', 'JWT Authentication']}
							link="https://github.com/rohankale-18/fyp-frontend"
						/>
					</div>
				</main>
			</div>
		</div>
	)
}

export default App
