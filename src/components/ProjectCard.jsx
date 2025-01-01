import { motion, useScroll, useTransform } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

const ProjectCard = ({ imgSrc, title, description, techStack, link, i, progress, range, targetScale }) => {
	const ref = useRef(null); // Ref for the card
	const scale = useTransform(progress, range, [1, targetScale]);
	return (
		<div ref={ref} className="flex flex-col items-center justify-center sticky top-0">
			<p className={`font-bold text-2xl md:text-4xl mt-[15vh] ${i!==0 && "opacity-0"}`}>Personal Projects</p>
			<motion.div
				className="bg-gray-900 min-h-[300px] -mt-[10vh] relative rounded-lg shadow-2xl overflow-hidden max-w-4xl w-full mx-auto flex flex-col md:flex-row"
				transition={{ duration: 0.25 }}
				style={{ top: `calc(15vh + ${i * 25}px)`, scale }}
			>
				<a
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					className="relative transition-all duration-200 ease-in-out w-full md:w-1/2"
				>
					<img src={imgSrc} alt={title} className="w-full h-full object-cover" />
					<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-50"></div>
				</a>
				<div className="p-6 text-white w-full md:w-1/2">
					<h3 className="text-xl font-semibold mb-2">{title}</h3>
					<p className="text-sm text-gray-300 mb-4 line-clamp-3">{description}</p>
					<div className="flex flex-wrap mb-4 gap-2">
						{techStack.map((tech, index) => (
							<span
								key={index}
								className="bg-tertiary text-xs px-3.5 py-2 rounded-full bg-black/20"
							>
								{tech}
							</span>
						))}
					</div>
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block py-2 px-4 bg-primary text-white font-semibold rounded-md hover:bg-primary-light transition-colors"
					>
						View Project
					</a>
				</div>
			</motion.div>
		</div>
	);
};

export default ProjectCard;
