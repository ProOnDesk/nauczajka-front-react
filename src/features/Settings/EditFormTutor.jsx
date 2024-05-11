import { useForm } from 'react-hook-form';
import Loader from '../../ui/Loader';
import EditFormBtn from './EditFormBtn';
import { useEffect } from 'react';
import { useUpdateDescription } from './useUpdateDescription';

function EditFormTutor({ setShowModal, showModal, description }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const {
		isDescriptionUpdated,
		updateDescription,
		isUpdateDescriptionPending,
	} = useUpdateDescription();

	const onSubmit = (data) => {
		if (showModal === 'description') {
			updateDescription(data.description);
		}
	};

	useEffect(() => {
		if (isDescriptionUpdated === true) setShowModal(null);
	}, [isDescriptionUpdated, setShowModal]);

	return (
		<>
			{!isUpdateDescriptionPending ? (
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col items-center gap-5 w-full '
				>
					<div className='relative w-full flex flex-col justify-center sm:px-10'>
						{showModal === 'description' && (
							<>
								<textarea
									{...register('description', {
										required: 'Wprowadź Opis',
									})}
									className='w-full p-2 border-2 border-gray/20 rounded-md min-h-48 focus:border-mainPurple active::border-mainPurple ring-0 outline-none max-h-80'
									defaultValue={description}
								/>
								<p className='text-red-400 ml-2'>
									{errors?.description?.message}
								</p>
								<p className='text-gray mt-2 text-sm text-center'>
									W opisie zalecamy podkreślenie swojego doświadczenia i
									umiejętności w sposób przekonujący dla potencjalnych klientów.
								</p>
							</>
						)}
					</div>

					<div className='mt-6 flex flex-row flex-wrap-reverse gap-5 justify-center w-full'>
						<EditFormBtn type={'button'} onClick={() => setShowModal(null)}>
							Anuluj
						</EditFormBtn>
						<EditFormBtn type={'submit'} disabled={isUpdateDescriptionPending}>
							{showModal === 'description' && 'Zmień Opis'}
						</EditFormBtn>
					</div>
				</form>
			) : (
				<Loader />
			)}
		</>
	);
}

export default EditFormTutor;
