import { motion } from "framer-motion";

function Img404() {
	return (
		<>
			<motion.div
				animate={{ translateY: 0, opacity: 1 }}
				initial={{ translateY: "200px", opacity: 0 }}
				transition={{ ease: "easeInOut", duration: 0.3 }}
				className="lg:flex flex-col absolute  object-left-bottom  h-[200px] bottom-0 left-12 -z-10 hidden">
				<img className="h-full w-full" src="./mathmeme.png" alt="meme" />
			</motion.div>
			<motion.div
				animate={{ translateY: 0, opacity: 1 }}
				initial={{ translateY: "-200px", opacity: 0 }}
				transition={{ ease: "easeInOut", duration: 0.3 }}
				className="lg:flex flex-col absolute  object-left-bottom  h-[120px] right-[150px] top-[25px] hidden">
				<img className="h-full w-full" src="./questions.png" alt="meme" />
			</motion.div>
		</>
	);
}

export default Img404;
