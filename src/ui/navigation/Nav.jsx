import { NavLink } from 'react-router-dom';
import { useUserWidth } from '../../hooks/useUserWidth';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import { BsBook } from 'react-icons/bs';

function Nav({ appLayoutRef }) {
	const width = useUserWidth();

	return (
		<div className='bg-white'>
			<nav className=' h-20 max-w-7xl mx-auto w-full flex justify-between items-center px-4 sm:px-10 group bg-white z-10'>
				<NavLink
					to=''
					className='text-mainPurple hover:text-mainPurpleHover hover:cursor-pointer py-2'
				>
					<p className='flex flex-row items-center gap-2 font-roboto-mono  text-2xl '>
						<span>
							<BsBook />
						</span>
						Nauczajka
					</p>
				</NavLink>
				{width < 800 ? (
					<NavMobile appLayoutRef={appLayoutRef} />
				) : (
					<NavDesktop />
				)}
			</nav>
		</div>
	);
}

export default Nav;
