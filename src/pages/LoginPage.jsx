import { useForm } from 'react-hook-form';
import BackgroundContainer from '../features/login/BackgroundContainer';
import { useUserWidth } from '../hooks/useUserWidth';
import NavLinkBtn from '../ui/Inputs/NavLinkBtn';
import TextInput from '../ui/Inputs/TextInput';
import Button from '../ui/Inputs/Button';

function LoginPage() {
	const width = useUserWidth();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<>
			{width > 800 && <BackgroundContainer />}
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex justify-center items-center md:py-10 '
			>
				<div className='sm:w-96 px-5 sm:px-10 pb-10 pt-5 bg-white sm:shadow-lg shadow-shadowBlack rounded-xl gap-8 flex flex-col items-center'>
					<div className='relative'>
						<p className='pb-5 text-2xl'>Logowanie</p>
						<div className='absolute bottom-[21px] left-0 w-[28px] h-[2px] bg-mainPurple rounded-full'></div>
						<div className='absolute bottom-[21px] left-11 w-[86px] h-[2px] bg-mainPurple rounded-full'></div>
					</div>

					<TextInput
						register={register}
						error={errors?.email?.message}
						label={'E-mail'}
						field={'email'}
						type={'e-mail'}
					/>

					<TextInput
						register={register}
						error={errors?.password?.message}
						label={'Hasło'}
						field={'password'}
						type={'text'}
					/>

					<div className='mt-5'>
						<Button type='submit'>Zaloguj się</Button>
					</div>

					<NavLinkBtn to='/register'>Zarejestruj się</NavLinkBtn>
				</div>
			</form>
		</>
	);
}

export default LoginPage;
