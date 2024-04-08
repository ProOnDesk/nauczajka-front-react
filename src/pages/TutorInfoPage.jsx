import { useParams } from 'react-router';
import { useTutorInfo } from '../features/TutorInfo/useTutorInfo';
import { useEffect } from 'react';
import { CiCalendar, CiCircleInfo, CiStar } from 'react-icons/ci';
import Loader from '../ui/Loader';
import TutorInfoHeader from '../features/Settings/TutorInfoHeader';
import SettingsElement from '../features/Settings/SettingsElement';
import TutorInfoPageHeader from '../features/TutorInfo/TutorInfoPageHeader';
import CalendarContainer from '../features/Settings/CalendarContainer';
import StarRating from '../ui/StarRating';

function TutorInfoPage() {
	const { getTutorInfo, isTutorInfoPending, tutorInfo } = useTutorInfo();
	const { id: tutorId } = useParams();

	console.log(tutorInfo);

	useEffect(() => {
		getTutorInfo({ tutorId: tutorId });
	}, [getTutorInfo, tutorId]);

	return !isTutorInfoPending ? (
		<div className='py-10 max-w-7xl mx-auto w-full'>
			<div className='mb-14'>
				<TutorInfoPageHeader tutorInfo={tutorInfo} />
			</div>
			<div className='max-w-4xl mx-auto px-2 flex flex-col gap-16'>
				<div>
					<TutorInfoHeader icon={<CiCircleInfo />} label={'Opis'} />
					<SettingsElement onlyRead={true} hoverDisabled={true}>
						{tutorInfo?.description ? tutorInfo?.description : 'Brak'}
					</SettingsElement>
				</div>
				<div>
					<TutorInfoHeader icon={<CiCalendar />} label={'Wolne terminy'} />
					<CalendarContainer
						readOnly={true}
						tutorShedule={tutorInfo?.tutor_schedule_items}
					/>
				</div>
				<div>
					<div className='flex flex-wrap gap-4 items-center justify-between'>
						<TutorInfoHeader icon={<CiStar />} label={'Opinie'} />
						<div className=''>
							<StarRating currRating={tutorInfo?.avg_rating} readOnly={true} />
						</div>
					</div>
					<div>
						{tutorInfo?.tutor_ratings.map((rate, id) => {
							const ratingDate = new Date(rate.created_at);
							return (
								<div
									className='border-whiteHover border-2 rounded-md p-2 text-sm my-5'
									key={id}
								>
									<div className='flex sm400:flex-row flex-col gap-2 sm400:justify-between sm400:items-center mb-5'>
										<p className='text-lg font-bold'>
											{rate.student_first_name} {rate.student_last_name}
										</p>
										<StarRating currRating={rate.rating} readOnly={true} />
									</div>
									<p className='my-2'>{rate.review}</p>
									<p className='font-bold'>
										{ratingDate.getDate()}{' '}
										{ratingDate.toLocaleString('default', { month: 'long' })}{' '}
										{ratingDate.getFullYear()}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	) : (
		<Loader />
	);
}

export default TutorInfoPage;
