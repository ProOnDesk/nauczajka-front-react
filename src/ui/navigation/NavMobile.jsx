import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NavMobileElement from './NavMobileElement';
import { useLocation } from 'react-router';

const navVariants = {
	visible: { x: 0 },
	hidden: { x: '100%' },
};

const burgerFirstVariants = {
	opened: {
		x: '100%',
		y: '-100%',
		rotate: '-45deg',
		width: '50%',
	},
	closed: {},
};

const burgerSecondVariants = {
	opened: { width: '100%' },
	closed: {},
};

const burgerThirdVariants = {
	opened: {
		x: '100%',
		y: '100%',
		rotate: '45deg',
		width: '50%',
	},
	closed: {},
};

function NavMobile({ appLayoutRef }) {
	const [navOpened, setNavOpened] = useState(false);
	const location = useLocation();

	function openNavHandler() {
		setNavOpened((navOpened) => !navOpened);
		const div = appLayoutRef.current;
		div.classList.toggle('bodyOverflowHidden');
	}

	useEffect(() => {
		setNavOpened(false);
	}, [location]);

	return (
		<div className=''>
			<button
				className={`flex flex-col-reverse gap-1 p-2 hover:cursor-pointer hover:bg-lighGray rounded-lg group min-w-10 ${
					navOpened && 'overflow-hidden'
				}`}
				onClick={openNavHandler}
			>
				<motion.div
					variants={burgerFirstVariants}
					animate={navOpened ? 'opened' : 'closed'}
					transition={{ duration: 0.3, type: 'tween', delay: 0.1 }}
					className='w-6 h-1 rounded-full bg-mainPurple group-hover:bg-mainPurpleHover'
				></motion.div>
				<motion.div
					variants={burgerSecondVariants}
					animate={navOpened ? 'opened' : 'closed'}
					transition={{ duration: 0.5, type: 'tween' }}
					className={`min-w-4 h-1 rounded-full bg-mainPurple group-hover:bg-mainPurpleHover`}
				></motion.div>
				<motion.div
					variants={burgerThirdVariants}
					animate={navOpened ? 'opened' : 'closed'}
					transition={{ duration: 0.3, type: 'tween', delay: 0.1 }}
					className='w-6 h-1 rounded-full bg-mainPurple group-hover:bg-mainPurpleHover'
				></motion.div>
			</button>
			<motion.div
				initial={{ x: '100%' }}
				variants={navVariants}
				animate={navOpened ? 'visible' : 'hidden'}
				transition={{ duration: 0.3, type: 'just' }}
				className='absolute top-0 left-0 bottom-0 right-0 mt-20 bg-white border-l-2 border-mainPurple z-20 flex flex-col items-center gap-10 py-20'
			>
				<NavMobileElement to=''>Strona Główna</NavMobileElement>
				<NavMobileElement to='instructors'>Korepetytorzy</NavMobileElement>
				<NavMobileElement to='login'>Logowanie</NavMobileElement>
			</motion.div>
		</div>
	);
}

export default NavMobile;
