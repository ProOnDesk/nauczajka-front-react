import SearchContainer from '../features/TutorSearch/SearchContainer';
import ShowTutorsContainer from '../features/TutorSearch/ShowTutorsContainer';

function InstructorsPage() {
	return (
		<div className='mx-auto max-w-7xl w-full'>
			<SearchContainer />
			<ShowTutorsContainer />
		</div>
	);
}

export default InstructorsPage;
