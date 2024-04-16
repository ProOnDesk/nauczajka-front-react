import { useLocation } from 'react-router-dom';
import { useVerifyUser } from '../features/Auth/useVerifyUser';
import Button from '../ui/Inputs/Button';
import { useContext, useEffect } from 'react';
import { FooterContext } from '../context/FooterContext';

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
		<div>
			<p>Stronka Do Potwierdzania E-mail</p>
			<Button
				disabled={isPending}
				onClick={handleButton}
				className='bg-mainPurple hover:bg-mainPurpleHover'
			>
				Potwierdź
			</Button>
		</div>
	);
}

export default ConfirmEmailPage;
