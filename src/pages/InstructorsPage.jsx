import { useCallback, useContext, useEffect, useState } from 'react';
import SearchContainer from '../features/TutorSearch/SearchContainer';
import ShowTutorsContainer from '../features/TutorSearch/ShowTutorsContainer';
import { useGetAllTutors } from '../features/TutorSearch/useGetAllTutors';
import { FooterContext } from '../context/FooterContext';

function InstructorsPage() {
	const {
		showTutors,
		allTutors: tutorList,
		isShowingTutors,
	} = useGetAllTutors();
	const [filters, setFilters] = useState({
		searchByFullName: '',
		skills: [],
		
		individualSession: '',
		groupSession: '',
		personSession: '',
		onlineSession: '',
		
		avgRatingGt: '',
		avgRatingLt: '',
		priceGt: '',
		priceLt: '',
		
		hourlyPrice: '',
		avgRating: '',
		
		location: '',
	});
	const { changeColor } = useContext(FooterContext);

	useEffect(() => {
		changeColor('text-gray');
	}, [changeColor]);

	const searchTutors = useCallback(
		(signal) => {
			showTutors({
				signal: signal,
				...filters,
			});
			return () => showTutors();
		},
		[showTutors, filters]
	);

	function btnSearchTutors() {
		searchTutors();
	}

	useEffect(() => {
		const controller = new AbortController();
		searchTutors(controller.signal);
		return () => controller.abort();
	}, [searchTutors]);

	return (
		<div className='mx-auto md:pt-10 max-w-7xl w-full'>
			<SearchContainer
				onClick={btnSearchTutors}
				filters={filters}
				setFilters={setFilters}
			/>
			<ShowTutorsContainer
				tutorList={tutorList}
				isShowingTutors={isShowingTutors}
			/>
		</div>
	);
}

export default InstructorsPage;
