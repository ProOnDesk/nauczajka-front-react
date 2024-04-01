import { useEffect, useState } from 'react';
import SearchContainer from '../features/TutorSearch/SearchContainer';
import ShowTutorsContainer from '../features/TutorSearch/ShowTutorsContainer';
import { useGetAllTutors } from '../features/TutorSearch/useGetAllTutors';

function InstructorsPage() {
	const { showTutors, allTutors } = useGetAllTutors();
	const [search, setSearch] = useState('');

	useEffect(() => {
		showTutors({
			searchByFullName: '',
			avgRatingGt: '',
			avgRatingLt: '',
			skills: [],
		});
	}, [showTutors]);

	function searchTutors() {
		showTutors({
			searchByFullName: '',
			avgRatingGt: '',
			avgRatingLt: '',
			skills: [],
		});
		return () => showTutors();
	}

	return (
		<div className='mx-auto max-w-7xl w-full'>
			<SearchContainer
				search={search}
				onSearch={setSearch}
				onClick={searchTutors}
			/>
			<ShowTutorsContainer />
		</div>
	);
}

export default InstructorsPage;
