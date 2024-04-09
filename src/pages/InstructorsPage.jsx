import { useCallback, useEffect, useState } from 'react';
import SearchContainer from '../features/TutorSearch/SearchContainer';
import ShowTutorsContainer from '../features/TutorSearch/ShowTutorsContainer';
import { useGetAllTutors } from '../features/TutorSearch/useGetAllTutors';

function InstructorsPage() {
	const {
		showTutors,
		allTutors: tutorList,
		isShowingTutors,
	} = useGetAllTutors();
	const [search, setSearch] = useState('');
	const [skillsFilter, setSkillsFilter] = useState([]);

	const searchTutors = useCallback(
		(signal) => {
			showTutors({
				searchByFullName: search,
				avgRatingGt: '',
				avgRatingLt: '',
				skills: skillsFilter,
				signal: signal,
			});
			return () => showTutors();
		},
		[showTutors, search, skillsFilter]
	);

	useEffect(() => {
		const controller = new AbortController();
		searchTutors(controller.signal);
		return () => controller.abort();
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
			<ShowTutorsContainer
				tutorList={tutorList}
				isShowingTutors={isShowingTutors}
			/>
		</div>
	);
}

export default InstructorsPage;
