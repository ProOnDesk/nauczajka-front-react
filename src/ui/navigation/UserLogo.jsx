import { useState } from 'react';
import { CiSettings } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import { useLogout } from '../../features/Auth/useLogout';
import { useUserData } from '../../features/Auth/useUserData';
import { NavLink } from 'react-router-dom';

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
					src='/user.png'
					alt='User Avatar'
					className={`w-8 border-2  ${
						userInfoShow ? ' border-mainPurple ' : ' border-white '
					} rounded-full shadow-myShadow shadow-shadowBlack hover:cursor-pointer transition-colors`}
				/>
				<p>{user?.first_name}</p>
			</div>

			{userInfoShow && (
				<div className='absolute right-0 w-48 top-18 flex flex-col justify-start shadow-myShadow shadow-shadowBlack rounded-md overflow-hidden '>
					<div className='flex flex-row items-center px-6 py-4 gap-2 hover:bg-whiteHover hover:cursor-pointer transition-colors'>
						<span className='text-xl'>
							<CiSettings />
						</span>
						<NavLink className='flex' to='settings'>
							Ustawienia
						</NavLink>
					</div>
					<div className='flex flex-row items-center px-6 py-4 gap-2 hover:bg-whiteHover hover:cursor-pointer transition-colors'>
						<span className='text-xl'>
							<CiLogout />
						</span>
						<button onClick={logout}>Wyloguj się</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default UserLogo;
