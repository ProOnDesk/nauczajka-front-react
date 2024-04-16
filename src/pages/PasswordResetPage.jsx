import { useForm } from 'react-hook-form';
import BackgroundContainer from '../ui/BackgroundContainer';
import { useUserWidth } from '../hooks/useUserWidth';
import TextInput from '../features/Auth/TextInput';
import { validateEmail } from '../utils/isInputCorrect';
import Button from '../ui/Inputs/Button';
import { useResetPassword } from '../features/Auth/useResetPasword';
import Loader from '../ui/Loader';
import { GiConfirmed } from 'react-icons/gi';
import { useContext, useEffect } from 'react';
import { FooterContext } from '../context/FooterContext';

function PasswordReset() {
	const width = useUserWidth();
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
		resetField,
	} = useForm();
	const { resetPassword, isResetPasswordPending, isResetPasswordEmailSent } =
		useResetPassword();

	const onSubmit = (data) => {
		resetPassword(data.email);
		resetField('email');
	};
	const { changeColor } = useContext(FooterContext);

	useEffect(() => {
		changeColor('text-gray');
	}, [changeColor]);

	return (
		<>
			{width >= 640 && <BackgroundContainer />}
			{!isResetPasswordEmailSent ? (
				<>
					{!isResetPasswordPending ? (
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
									error={errors?.email?.message}
									label={'E-mail'}
									field={'email'}
									type={'email'}
									validateFunction={() => validateEmail(getValues().email)}
								/>

								<div className='mt-6'>
									<Button type='submit' disabled={isResetPasswordPending}>
										Resetuj Hasło
									</Button>
								</div>
							</div>
						</form>
					) : (
						<Loader />
					)}
				</>
			) : (
				<div className='flex justify-center items-center gap-10 flex-col'>
					<span className='text-4xl'>
						<GiConfirmed />
					</span>
					<p className='text-xl'>E-mail weryfikacyjny został wysłany.</p>
				</div>
			)}
		</>
	);
}

export default PasswordReset;
