import StarRating from '../../ui/StarRating';

function TutorRatings({ tutorInfo }) {
	return (
		<div>
			{tutorInfo?.tutor_ratings.map((rate, id) => {
				const ratingDate = new Date(rate.created_at);
				const lastName = 'pawe';
				return (
					<div
						className='border-whiteHover border-2 rounded-md p-2 text-sm my-5'
						key={id}
					>
						<div className='flex sm400:flex-row flex-col gap-2 sm400:justify-between sm400:items-center mb-5'>
							{rate.student_first_name || rate.student_last_name ? (
								<p className='text-lg font-bold'>
									{rate.student_first_name} {rate.student_last_name}
								</p>
							) : (
								<p className='text-lg font-bold'>Nieznany</p>
							)}
							<StarRating currRating={rate.rating} readOnly={true} />
						</div>
						<p className='my-2 text-base'>{rate.review}</p>
						<p className='font-bold'>
							{ratingDate.getDate()}{' '}
							{ratingDate.toLocaleString('default', { month: 'long' })}{' '}
							{ratingDate.getFullYear()}
						</p>
					</div>
				);
			})}
		</div>
	);
}

export default TutorRatings;
