import { CiSquareChevDown, CiSquareChevUp } from 'react-icons/ci';
import ListElement from './ListElement';

function SortList({ setFilters, filters }) {
	function handleChooseSort(sortBy) {
		if (sortBy === 'hourlyPriceDesc')
			setFilters((prevFilters) => ({
				...prevFilters,
				hourlyPrice: 'desc',
				avgRating: '',
			}));
		if (sortBy === 'hourlyPriceAsc')
			setFilters((prevFilters) => ({
				...prevFilters,
				hourlyPrice: 'asc',
				avgRating: '',
			}));
		if (sortBy === 'avgRatingDesc')
			setFilters((prevFilters) => ({
				...prevFilters,
				avgRating: 'desc',
				hourlyPrice: '',
			}));
		if (sortBy === 'avgRatingAsc')
			setFilters((prevFilters) => ({
				...prevFilters,
				avgRating: 'asc',
				hourlyPrice: '',
			}));
	}
	return (
		<>
			<ListElement
				icon={<CiSquareChevDown />}
				isActive={filters.hourlyPrice === 'desc'}
				onClick={() => handleChooseSort('hourlyPriceDesc')}
			>
				Cena
			</ListElement>
			<ListElement
				icon={<CiSquareChevUp />}
				isActive={filters.hourlyPrice === 'asc'}
				onClick={() => handleChooseSort('hourlyPriceAsc')}
			>
				Cena
			</ListElement>
			<ListElement
				icon={<CiSquareChevDown />}
				isActive={filters.avgRating === 'desc'}
				onClick={() => handleChooseSort('avgRatingDesc')}
			>
				Ocena
			</ListElement>
			<ListElement
				icon={<CiSquareChevUp />}
				isActive={filters.avgRating === 'asc'}
				onClick={() => handleChooseSort('avgRatingAsc')}
			>
				Ocena
			</ListElement>
		</>
	);
}

export default SortList;
