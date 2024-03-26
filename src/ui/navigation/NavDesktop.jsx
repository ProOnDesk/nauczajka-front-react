import { useUserData } from '../../features/Auth/useUserData';
import NavLinkBtn from '../Inputs/NavLinkBtn';
import UserLogo from './UserLogo';

function NavDesktop() {
	const { data: user } = useUserData();

	return (
		<div className='flex flex-row items-center gap-12'>
			<div className='flex flex-row justify-betwee gap-6'>
				<NavLinkBtn to=''>Strona główna</NavLinkBtn>
				<NavLinkBtn to='instructors'>Korepetytorzy</NavLinkBtn>
			</div>
			<div className='flex flex-row gap-6 main'>
				{user === null ? (
					<NavLinkBtn to={'login'} color='purple'>
						Zaloguj się
					</NavLinkBtn>
				) : (
					<UserLogo user={user} />
				)}
			</div>
		</div>
	);
}

export default NavDesktop;
