import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NavMobileElement from './NavMobileElement';
import { useLocation } from 'react-router';
import { useUserData } from '../../features/Auth/useUserData';
import { useLogout } from '../../features/Auth/useLogout';
import { CiHome, CiLogin, CiLogout, CiUser } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';

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
	const { data: user } = useUserData();
	const { logout } = useLogout();
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
				className='absolute top-0 left-0 bottom-0 right-0 mt-20 bg-white border-l-2 border-mainPurple z-20 flex flex-col items-center py-10'
			>
				{user !== null && (
					<NavLink
						to='settings'
						className='mb-10 overflow-hidden flex flex-col justify-center items-center gap-2 hover:cursor-pointer group icon'
					>
						<img
							src='/user.png'
							alt='User Avatar'
							className='w-16 border-2 rounded-full border-white shadow-myShadow group-[.icon]:group-hover:border-mainPurple transition-colors mx-5'
						/>
						<p className='text-gray text-xl group-[.icon]:group-hover:text-mainPurple transition-colors'>
							{user?.first_name}
						</p>
					</NavLink>
				)}
				<div className='flex flex-col gap-10'>
					<NavMobileElement to='/' icon={<CiHome />}>
						Strona Główna
					</NavMobileElement>
					<NavMobileElement to='instructors' icon={<CiUser />}>
						Korepetytorzy
					</NavMobileElement>
					{user === null ? (
						<NavMobileElement to={'login'} icon={<CiLogin />}>
							Zaloguj się
						</NavMobileElement>
					) : (
						<NavMobileElement onClick={logout} icon={<CiLogout />}>
							Wyloguj się
						</NavMobileElement>
					)}
				</div>
			</motion.div>
		</div>
	);
}

export default NavMobile;
