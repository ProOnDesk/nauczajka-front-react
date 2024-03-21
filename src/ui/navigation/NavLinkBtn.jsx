import { NavLink } from 'react-router-dom';

function NavLinkBtn({ color, children, to }) {
	return (
		<NavLink
			className={`${
				color === 'purple'
					? ' bg-mainPurple hover:bg-mainPurpleHover text-white '
					: color === 'salmon'
					? ' bg-mainSalmon hover:bg-mainSalmonHover text-white '
					: ' hover:text-mainPurple '
			}bg-${color} px-4 py-3 ${
				color && ' rounded-xl shadow-md shadow-shadowBlack '
			} `}
			to={to}
		>
			{children}
		</NavLink>
	);
}

export default NavLinkBtn;
