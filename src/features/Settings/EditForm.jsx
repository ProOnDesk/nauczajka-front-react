import { useForm } from 'react-hook-form';
import TextInput from '../Auth/TextInput';
import {
	validateEmail,
	validatePassword,
	validateRepeatPassword,
} from '../../utils/isInputCorrect';
import Loader from '../../ui/Loader';
import EditFormBtn from './EditFormBtn';
import { useUpdateUser } from './useUpdateUser';
import FileUploader from './FileUploader';
import { useEffect, useState } from 'react';
import { useDeleteUser } from './useDeleteUser';
import { useUpdateAvatar } from './useUpdateAvatar';
import toast from 'react-hot-toast';

function EditForm({ setShowModal, showModal }) {
	const { updateUser, isUserUpdated, isUpdatePending } = useUpdateUser();
	const { deleteAccount, isAccountDeleting } = useDeleteUser();
	const {
		updateAvatar,
		isUpdatePending: isUpdateAvatarPending,
		isAvatarUpdated,
	} = useUpdateAvatar();
	const [file, setFile] = useState(null);
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm();
	const handleChange = (file) => {
		setFile(file);
	};

	const onSubmit = (data) => {
		if (showModal === 'image') {
			if (file !== null) {
				console.log(file);
				updateAvatar(file);
			} else {
				toast.error('Wybierz zdjęcie.');
			}
		}
		if (showModal === 'email') {
			console.log('zmien email');
		}
		if (showModal === 'password') {
			updateUser({
				fieldToUpdate: 'password',
				valueToUpdate: data.newPassword,
				password: data.password,
			});
		}
		if (showModal === 'deleteAccount') {
			deleteAccount(data.password);
		}
	};

	useEffect(() => {
		if (isUserUpdated === true || isAvatarUpdated === true) {
			setShowModal(null);
		}
	}, [isUserUpdated, setShowModal, isAvatarUpdated]);

	return (
		<>
			{!isUpdateAvatarPending && !isAccountDeleting && !isUpdatePending ? (
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col items-center gap-5'
				>
					<div className='md:w-4/5 w-full flex flex-col gap-5'>
						{showModal === 'image' && (
							<div className=' mx-auto mb-2'>
								<FileUploader
									handleChange={handleChange}
									file={file}
									types={['JPG', 'PNG', 'GIF', 'JPEG']}
								/>
							</div>
						)}
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
									validateFunction={() =>
										validatePassword(getValues().newPassword)
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
											getValues().newPassword,
											getValues().repeatPassword
										)
									}
								/>
							</>
						)}

						{showModal !== 'image' && (
							<TextInput
								register={register}
								error={errors?.password?.message}
								label={'Aktualne Hasło'}
								field={'password'}
								type={'password'}
							/>
						)}
					</div>

					<div className='mt-6 flex flex-row flex-wrap-reverse gap-5 justify-center w-full'>
						<EditFormBtn type={'button'} onClick={() => setShowModal(null)}>
							Anuluj
						</EditFormBtn>
						<EditFormBtn
							disabled={
								isUpdatePending || isAccountDeleting || isUpdateAvatarPending
							}
							type={'submit'}
						>
							{showModal === 'email' && 'Zmień E-mail'}
							{showModal === 'password' && 'Zmień Hasło'}
							{showModal === 'image' && 'Zmień Obraz'}
							{showModal === 'deleteAccount' && 'Usuń Konto'}
						</EditFormBtn>
					</div>
				</form>
			) : (
				<Loader />
			)}
		</>
	);
}

export default EditForm;
