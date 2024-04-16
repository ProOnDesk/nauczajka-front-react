import { useForm } from 'react-hook-form';
import BackgroundContainer from '../ui/BackgroundContainer';
import { useUserWidth } from '../hooks/useUserWidth';
import TextInput from '../features/Auth/TextInput';
import {
	validatePassword,
	validateRepeatPassword,
} from '../utils/isInputCorrect';
import Button from '../ui/Inputs/Button';
import Loader from '../ui/Loader';

import { useLocation } from 'react-router';
import { useResetPasswordConfirm } from '../features/Auth/useResetPasswordConfirm';
import { FooterContext } from '../context/FooterContext';
import { useContext, useEffect } from 'react';

function PasswordResetConfrimPage() {
	const width = useUserWidth();
	const queryParams = new URLSearchParams(useLocation().search);
	const resetToken = queryParams.get('reset_token');
	const { changeColor } = useContext(FooterContext);

	useEffect(() => {
		changeColor('text-gray');
	}, [changeColor]);

	const { resetPasswordConfirm, isResetPasswordConfirmPending } =
		useResetPasswordConfirm();

	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
		resetField,
	} = useForm();

	const onSubmit = (data) => {
		resetPasswordConfirm({ password: data.password, token: resetToken });
		resetField('password');
		resetField('repeatPassword');
	};
	return (
		<>
			{width >= 640 && <BackgroundContainer />}

			{!isResetPasswordConfirmPending ? (
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='relative flex justify-center items-center '
				>
					<div className='sm:w-[400px] md:w-[500px] w-5/6 sm400:w-2/3 sm:px-10 py-10 pb-16 bg-white sm:shadow-myShadow shadow-shadowBlack rounded-xl gap-8 flex flex-col items-center'>
						<div className='relative'>
							<p className='pb-5 text-2xl mt-4'>Resetowanie Hasła</p>
							<div className='absolute bottom-[21px] left-0 w-[240px] h-[2px] bg-mainPurple rounded-full'></div>
							<div className='absolute bottom-[21px] left-[172px] w-[76px] h-[2px] bg-mainPurple rounded-full'></div>
						</div>

						<TextInput
							register={register}
							error={errors?.password?.message}
							label={'Hasło'}
							field={'password'}
							type={'password'}
							validateFunction={() => validatePassword(getValues().password)}
							info={
								'Hasło powinno składać sie z conajmniej 8 znaków (mała litera, duża litera, cyfra, znak specjalny)'
							}
						/>

						<TextInput
							register={register}
							error={errors?.repeatPassword?.message}
							label={'Powtórz Hasło'}
							field={'repeatPassword'}
							type={'password'}
							validateFunction={() =>
								validateRepeatPassword(
									getValues().password,
									getValues().repeatPassword
								)
							}
						/>

						<div className='mt-6'>
							<Button type='submit'>Resetuj Hasło</Button>
						</div>
					</div>
				</form>
			) : (
				<Loader />
			)}
		</>
	);
}

export default PasswordResetConfrimPage;
