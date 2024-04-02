import { useParams } from 'react-router';
import { useTutorInfo } from '../features/TutorInfo/useTutorInfo';
import { useEffect } from 'react';
import TutorHeader from '../ui/TutorHeader';
import Button from '../ui/Inputs/Button';
import { CiMail } from 'react-icons/ci';
import Loader from '../ui/Loader';

function TutorInfoPage() {
	const { getTutorInfo, isTutorInfoPending, tutorInfo } = useTutorInfo();
	const { id: tutorId } = useParams();

	useEffect(() => {
		getTutorInfo({ tutorId: tutorId });
	}, [getTutorInfo, tutorId]);

	return !isTutorInfoPending ? (
		<div className='py-10 max-w-7xl mx-auto w-full'>
			<div className='flex flex-col items-center justify-center md:flex-row md:justify-between px-5 gap-5 max-w-5xl mx-auto'>
				<TutorHeader tutorInfo={tutorInfo} />
				<Button
					className={'flex items-center gap-2'}
					onClick={() => console.log('napisz wiadomośc')}
				>
					<span className='text-2xl'>
						<CiMail />
					</span>
					Napisz wiadomość
				</Button>
			</div>
		</div>
	) : (
		<Loader />
	);
}

export default TutorInfoPage;
