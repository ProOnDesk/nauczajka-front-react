import { useCallback, useEffect, useState } from 'react';
import SearchContainer from '../features/TutorSearch/SearchContainer';
import ShowTutorsContainer from '../features/TutorSearch/ShowTutorsContainer';
import { useGetAllTutors } from '../features/TutorSearch/useGetAllTutors';

function InstructorsPage() {
	const { showTutors, allTutors: tutorList } = useGetAllTutors();
	const [search, setSearch] = useState('');
	const [skillsFilter, setSkillsFilter] = useState([]);

	const searchTutors = useCallback(() => {
		showTutors({
			searchByFullName: search,
			avgRatingGt: '',
			avgRatingLt: '',
			skills: skillsFilter,
		});
		return () => showTutors();
	}, [showTutors, search, skillsFilter]);

	useEffect(() => {
		searchTutors();
	}, [searchTutors]);

	return (
		<div className='mx-auto md:pt-10 max-w-7xl w-full'>
			<SearchContainer
				search={search}
				onSearch={setSearch}
				onClick={searchTutors}
				setSkillsFilter={setSkillsFilter}
				skillsFilter={skillsFilter}
				searchTutors={searchTutors}
			/>
			<ShowTutorsContainer tutorList={tutorList} />
		</div>
	);
}

export default InstructorsPage;
