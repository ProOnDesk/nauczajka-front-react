import { CiFileOff } from 'react-icons/ci';
import TutorElement from './TutorElement';
import Loader from '../../ui/Loader';

function ShowTutorsContainer({ tutorList, isShowingTutors }) {
	return !isShowingTutors ? (
		<div className='w-full mx-auto py-5 flex flex-col gap-2 '>
			<div className='flex gap-2 flex-col p-2 rounded-md'>
				{!isShowingTutors && tutorList?.length > 0 ? (
					tutorList?.map((listEl) => (
						<TutorElement tutorInfo={listEl} key={listEl.id} />
					))
				) : (
					<div className='flex w-full flex-col gap-2 justify-center items-center'>
						<span className='text-2xl'>
							<CiFileOff />
						</span>
						<p className='text-center'>Brak korepetytorów na liście.</p>
					</div>
				)}
			</div>
		</div>
	) : (
		<div className='absolute flex justify-center items top-0 left-0 right-0 bottom-0 '>
			<Loader />
		</div>
	);
}

export default ShowTutorsContainer;
