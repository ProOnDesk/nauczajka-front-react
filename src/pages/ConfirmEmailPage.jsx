import { useLocation } from 'react-router-dom';
import { useVerifyUser } from '../features/Auth/useVerifyUser';
import Button from '../ui/Inputs/Button';
import { useContext, useEffect } from 'react';
import { FooterContext } from '../context/FooterContext';
import { CiAt } from 'react-icons/ci';

function ConfirmEmailPage() {
	const queryParams = new URLSearchParams(useLocation().search);
	const token = queryParams.get('token');
	const { verifyUser, isPending } = useVerifyUser();
	const { changeColor } = useContext(FooterContext);

	useEffect(() => {
		changeColor('text-gray');
	}, [changeColor]);

	function handleButton(e) {
		e.preventDefault();
		verifyUser(token);
	}

	return (
		<div className='flex justify-center items-center max-w-7xl mx-auto '>
			<div className='w-full md:w-1/2 rounded-md overflow-hidden md:shadow-myShadow'>
				<div className='flex items-center justify-center w-full h-1/5 md:bg-mainPurple py-8'>
					<span className='text-5xl md:text-white '>
						<CiAt />
					</span>
				</div>
				<div className='flex flex-col items-center gap-10 p-10'>
					<p className='text-center text-base'>
						Został tylko jeden krok, aby dokończyć rejestrację. Kliknij przycisk
						i znajdź odpowiedniego dla Ciebie korepetytora!
					</p>
					<Button
						disabled={isPending}
						onClick={handleButton}
						className='bg-mainPurple hover:bg-mainPurpleHover'
					>
						Potwierdź
					</Button>
				</div>
			</div>
		</div>
	);
}

export default ConfirmEmailPage;
