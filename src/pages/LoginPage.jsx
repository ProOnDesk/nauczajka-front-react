import { useForm } from 'react-hook-form';
import BackgroundContainer from '../ui/BackgroundContainer';
import { useUserWidth } from '../hooks/useUserWidth';
import NavLinkBtn from '../ui/Inputs/NavLinkBtn';
import TextInput from '../features/Auth/TextInput';
import Button from '../ui/Inputs/Button';
import { validateEmail } from '../utils/isInputCorrect';
import { useLoginUser } from '../features/Auth/useLoginUser';
import { NavLink } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { FooterContext } from '../context/FooterContext';

function LoginPage() {
	const { loginUser, isLoginPending } = useLoginUser();
	const width = useUserWidth();
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm();
	const { changeColor } = useContext(FooterContext);

	useEffect(() => {
		changeColor('text-gray');
	}, [changeColor]);

	const onSubmit = (data) => {
		loginUser({ email: data.email, password: data.password });
	};

	return (
		<>
			{width >= 640 && <BackgroundContainer />}
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='relative flex justify-center items-center md:py-10 '
			>
				<div className='sm:w-[400px] md:w-[500px] w-5/6 sm400:w-2/3 sm:px-10 pb-6 pt-5 bg-white sm:shadow-myShadow shadow-shadowBlack rounded-xl gap-8 flex flex-col items-center'>
					<div className='relative'>
						<p className='pb-5 text-2xl mt-4'>Logowanie</p>
						<div className='absolute bottom-[21px] left-0 w-[28px] h-[2px] bg-mainPurple rounded-full'></div>
						<div className='absolute bottom-[21px] left-11 w-[86px] h-[2px] bg-mainPurple rounded-full'></div>
					</div>

					<TextInput
						register={register}
						error={errors?.email?.message}
						label={'E-mail'}
						field={'email'}
						type={'email'}
						validateFunction={() => validateEmail(getValues().email)}
					/>

					<div className='relative w-full'>
						<TextInput
							register={register}
							error={errors?.password?.message}
							label={'Hasło'}
							field={'password'}
							type={'password'}
						/>
						<NavLink
							className={`flex hover:text-mainPurple hover:cursor-pointer absolute text-[12px] text-center  ${
								!errors.password && ' right-2 -bottom-6 '
							} ${
								errors.password &&
								' w-6 right-16 -bottom-[40px] sm:w-full sm:left-44 sm:-bottom-6'
							}`}
							to={'/account/reset'}
						>
							Zapomniałem hasła
						</NavLink>
					</div>

					<div className='mt-6'>
						<Button type='submit' disabled={isLoginPending}>
							{isLoginPending ? 'Logowanie...' : 'Zaloguj się'}
						</Button>
					</div>

					<NavLinkBtn to='/register'>Zarejestruj się</NavLinkBtn>
				</div>
			</form>
		</>
	);
}

export default LoginPage;
