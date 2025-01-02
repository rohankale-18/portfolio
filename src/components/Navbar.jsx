import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import React, { useRef, useState } from 'react'

const Navbar = () => {
	const [isHidden, setIsHidden] = useState(false);
	const { scrollY } = useScroll();
	const lastYRef = useRef(0);

	useMotionValueEvent(scrollY, "change", (y) => {
		const difference = y - lastYRef.current;
		if (Math.abs(difference) > 50) {
			setIsHidden(difference > 0);

			lastYRef.current = y;
		}
	});
	return (
		<motion.div
			animate={isHidden ? "hidden" : "visible"}
			whileHover="visible"
			onFocusCapture={() => setIsHidden(false)}
			variants={{
				hidden: {
					y: "-90%",
				},
				visible: {
					y: "0%",
				},
			}}
			transition={{ duration: 0.2 }}
			className="max-w-7xl pt-4 mx-auto sticky top-0 z-10">
			<nav className='w-full bg-gray-950/50 backdrop-blur-lg rounded-full h-[52px] flex justify-center ring-1 ring-white'>
				<img src="Logo.svg" alt="" className='p-2.5'/>
			</nav>
		</motion.div>
	)
}

export default Navbar