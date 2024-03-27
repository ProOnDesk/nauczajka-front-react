import { useForm } from 'react-hook-form';
import TextInput from '../Auth/TextInput';
import {
	validateEmail,
	validatePassword,
	validateRepeatPassword,
} from '../../utils/isInputCorrect';

import EditFormBtn from './EditFormBtn';
import { useUpdateUser } from '../Auth/useUpdateUser';

function EditForm({ setShowModal, showModal }) {
	const { updateUser } = useUpdateUser();
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm();

	const onSubmit = (data) => {
		if (showModal === 'password') {
			updateUser({
				fieldToUpdate: 'password',
				valueToUpdate: data.newPassword,
			});
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col items-center gap-5 '
		>
			<div className='md:w-4/5 w-full flex flex-col gap-5'>
				{showModal === 'email' && (
					<TextInput
						register={register}
						error={errors?.email?.message}
						label={'E-mail'}
						field={'email'}
						type={'email'}
						validateFunction={() => validateEmail(getValues().email)}
					/>
				)}
				{showModal === 'password' && (
					<>
						<TextInput
							register={register}
							error={errors?.password?.message}
							label={'Nowe Hasło'}
							field={'newPassword'}
							type={'password'}
							validateFunction={() => validatePassword(getValues().newPassword)}
						/>

						<TextInput
							register={register}
							error={errors?.repeatPassword?.message}
							label={'Powtórz Hasło'}
							field={'repeatPassword'}
							type={'password'}
							validateFunction={() =>
								validateRepeatPassword(
									getValues().newPassword,
									getValues().repeatPassword
								)
							}
						/>
					</>
				)}

				<TextInput
					register={register}
					error={errors?.password?.message}
					label={'Aktualne Hasło'}
					field={'password'}
					type={'password'}
				/>
			</div>

			<div className='mt-6 flex flex-row flex-wrap-reverse gap-5 justify-center w-full'>
				<EditFormBtn type={'button'} onClick={() => setShowModal(null)}>
					Anuluj
				</EditFormBtn>
				<EditFormBtn type={'submit'}>Zmień E-mail</EditFormBtn>
			</div>
		</form>
	);
}

export default EditForm;
