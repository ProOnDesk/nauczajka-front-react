import { NavLink } from 'react-router-dom';

function NavMobileElement({ children, to }) {
	return (
		<NavLink className='py-5 hover:text-mainPurple text-xl text-gray' to={to}>
			{children}
		</NavLink>
	);
}

export default NavMobileElement;
