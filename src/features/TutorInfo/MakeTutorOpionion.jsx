import { useForm } from 'react-hook-form';
import StarRating from '../../ui/StarRating';
import EditFormBtn from '../Settings/EditFormBtn';
import { useState } from 'react';

function MakeTutorOpionion() {
	const [rating, setRating] = useState(null);
	const [review, setReview] = useState('');
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	function onSubmit(data) {
		console.log(data.review, rating);
	}

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
				<EditFormBtn disabled={!rating || review == ''}>Opublikuj</EditFormBtn>
			</div>
		</form>
	);
}

export default MakeTutorOpionion;
