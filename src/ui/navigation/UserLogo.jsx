import { useState } from 'react';
import { CiSettings } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import { useLogout } from '../../features/Auth/useLogout';
import { useUserData } from '../../features/Auth/useUserData';
import { NavLink } from 'react-router-dom';
import { API_KEY } from '../../services/apiAuth';

function UserLogo() {
	const { data: user } = useUserData();
	const [userInfoShow, setUserInfoShow] = useState(false);
	const { logout } = useLogout();

	return (
		<div
			className='relative group hover:cursor-pointer'
			onMouseEnter={() => setUserInfoShow(true)}
			onMouseLeave={() => setUserInfoShow(false)}
		>
			<div className='h-20 flex justify-center flex-col items-center'>
				<img
					src={`${API_KEY}${user?.profile_image}`}
					alt='User Avatar'
					className={`w-8 h-8 border-2  ${
						userInfoShow ? ' border-mainPurple ' : ' border-white '
					} rounded-full shadow-myShadow shadow-shadowBlack hover:cursor-pointer transition-colors`}
				/>
				<p>{user?.first_name}</p>
			</div>

			{userInfoShow && (
				<div className='absolute right-0 w-48 top-18 flex flex-col justify-start shadow-myShadow shadow-shadowBlack rounded-md overflow-hidden bg-white '>
					<NavLink
						to='settings'
						className='flex flex-row items-center px-6 py-4 gap-2 hover:bg-whiteHover hover:cursor-pointer'
					>
						<span className='text-xl'>
							<CiSettings />
						</span>
						<button className='flex'>Ustawienia</button>
					</NavLink>
					<button
						onClick={logout}
						className='flex flex-row items-center px-6 py-4 gap-2 hover:bg-whiteHover hover:cursor-pointer'
					>
						<span className='text-xl'>
							<CiLogout />
						</span>
						<p>Wyloguj się</p>
					</button>
				</div>
			)}
		</div>
	);
}

export default UserLogo;
