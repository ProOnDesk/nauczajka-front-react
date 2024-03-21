import NavLinkBtn from './NavLinkBtn';

function NavDesktop() {
	return (
		<div className='flex flex-row items-center gap-12'>
			<div className='flex flex-row justify-betwee gap-6'>
				<NavLinkBtn to=''>Strona główna</NavLinkBtn>
				<NavLinkBtn to='instructors'>Korepetytorzy</NavLinkBtn>
			</div>
			<div className='flex flex-row gap-6 place-self-end main'>
				<NavLinkBtn to={'login'} color='purple'>
					Zaloguj się
				</NavLinkBtn>
			</div>
		</div>
	);
}

export default NavDesktop;
