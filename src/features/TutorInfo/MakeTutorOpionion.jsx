import { useForm } from 'react-hook-form';
import StarRating from '../../ui/StarRating';
import EditFormBtn from '../Settings/EditFormBtn';
import { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useRateTutor } from './useRateTutor';

function MakeTutorOpionion({ tutorId, getTutorInfo }) {
	const query = useQueryClient();
	const [rating, setRating] = useState(null);
	const [review, setReview] = useState('');
	const { rateTutor, isTutorRating, isTutorRated } = useRateTutor();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	function onSubmit(data) {
		if (query.getQueryData(['user']) === null)
			toast.error('Zaloguj się, aby dodać opinię.');
		else {
			rateTutor({ id: tutorId, rating: rating, review: data.review });
		}
		setRating(null);
		setReview('');
	}
	useEffect(() => {
		if (isTutorRated) getTutorInfo({ tutorId: tutorId });
	}, [getTutorInfo, isTutorRated, tutorId]);

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col my-10 py-5 gap-5  rounded-md border-whiteHover sm400:px-10 px-2'
		>
			<div className='flex flex-row flex-wrap gap-2 justify-between'>
				<p className='text-xl'>Twoja opinia</p>
				<StarRating size='xl' setCurrRating={setRating} currRating={rating} />
			</div>

			<textarea
				{...register('review', {
					required: 'Wprowadź opinię.',
				})}
				value={review}
				onChange={(e) => setReview(e.target.value)}
				placeholder='Napisz opinię'
				className='w-full p-2 border-b-2 border-gray/20 max-h-48 focus:border-mainPurple active::border-mainPurple outline-none'
			/>
			<p className='text-sm text-mainSalmon'>
				{Object.values(errors)[0]?.message}
			</p>
			<div className='flex justify-end'>
				<EditFormBtn
					type={'submit'}
					disabled={!rating || review == '' || isTutorRating}
				>
					Opublikuj
				</EditFormBtn>
			</div>
		</form>
	);
}

export default MakeTutorOpionion;
