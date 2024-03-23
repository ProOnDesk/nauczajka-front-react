import { useForm } from 'react-hook-form';
import BackgroundContainer from '../ui/BackgroundContainer';
import { useUserWidth } from '../hooks/useUserWidth';
import NavLinkBtn from '../ui/Inputs/NavLinkBtn';
import TextInput from '../features/Auth/TextInput';
import Button from '../ui/Inputs/Button';
import toast from 'react-hot-toast';
import { validateEmail, validatePassword } from '../utils/isInputCorrect';

function LoginPage() {
	const width = useUserWidth();
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<>
			{width > 800 && <BackgroundContainer />}
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='relative flex justify-center items-center md:py-10 '
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
						<button
							className={`flex hover:text-mainPurple hover:cursor-pointer absolute text-[12px] text-center right-2 -bottom-6 ${
								errors.password &&
								' w-6 left-36 -bottom-10 sm:w-full sm:left-44 sm:-bottom-6'
							}`}
							onClick={() => toast('Przypomnij hasło')}
							type='button'
						>
							Zapomniałem hasła
						</button>
					</div>

					<div className='mt-5'>
						<Button type='submit'>Zaloguj się</Button>
					</div>

					<NavLinkBtn to='/register'>Zarejestruj się</NavLinkBtn>
				</div>
				<div className=''></div>
			</form>
		</>
	);
}

export default LoginPage;
