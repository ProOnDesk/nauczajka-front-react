import TutorElement from './TutorElement';

function ShowTutorsContainer({ tutorList }) {
	return (
		<div className='w-full mx-auto py-5 flex flex-col gap-2 '>
			<div className='flex gap-2 flex-col p-2 rounded-md'>
				{tutorList?.map((listEl) => (
					<TutorElement tutorInfo={listEl} key={listEl.id} />
				))}
			</div>
		</div>
	);
}

export default ShowTutorsContainer;
