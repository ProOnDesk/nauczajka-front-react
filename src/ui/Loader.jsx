import { motion } from 'framer-motion';
import { FiLoader } from 'react-icons/fi';

function Loader() {
	return (
		<div className='relative flex justify-center items-center'>
			<div className='absolute top-0 right-0 left-0 bottom-0 bg-gray/5 flex justify-center items-center'>
				<motion.span
					animate={{
						rotate: [0, 360],
					}}
					transition={{
						repeat: Infinity,
						duration: 1.6,
						ease: 'linear',
					}}
					className='text-4xl text-gray'
				>
					<FiLoader />
				</motion.span>
			</div>
		</div>
	);
}

export default Loader;
