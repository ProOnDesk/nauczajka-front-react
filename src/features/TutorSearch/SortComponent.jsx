import { CiSquareChevDown, CiSquareChevUp } from 'react-icons/ci';
import { BsSortAlphaDown } from 'react-icons/bs';
import SortElement from './SortElement';
import { useState } from 'react';

function SortComponent({ filters, setFilters }) {
	const [isOpen, setIsOpen] = useState(false);

	//avgRating
	//hourlyPrice
	// asc , desc

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
		<div
			className={`group relative px-2 py-1 flex items-center gap-2 bg-white rounded-md ${
				isOpen ? 'border-mainPurple' : 'border-whiteHover'
			} border-2 text-gray hover:border-mainPurple hover:cursor-default transition-colors`}
			onClick={() => {
				setIsOpen((currentState) => !currentState);
			}}
		>
			<span className='flex gap-2 text-gray'>
				<span className={`text-xl text-gray`}>
					<BsSortAlphaDown />
				</span>
				Sortuj
			</span>
			<div
				className={`${
					isOpen ? 'block' : 'hidden'
				} absolute bg-white text-xl font-roboto-mono top-8 rounded-md text-gray p-0 -left-[2px] shadow-sm shadow-whiteHover`}
			>
				<SortElement
					icon={<CiSquareChevDown />}
					isActive={filters.hourlyPrice === 'desc'}
					onClick={() => handleChooseSort('hourlyPriceDesc')}
				>
					Cena
				</SortElement>
				<SortElement
					icon={<CiSquareChevUp />}
					isActive={filters.hourlyPrice === 'asc'}
					onClick={() => handleChooseSort('hourlyPriceAsc')}
				>
					Cena
				</SortElement>
				<SortElement
					icon={<CiSquareChevDown />}
					isActive={filters.avgRating === 'desc'}
					onClick={() => handleChooseSort('avgRatingDesc')}
				>
					Ocena
				</SortElement>
				<SortElement
					icon={<CiSquareChevUp />}
					isActive={filters.avgRating === 'asc'}
					onClick={() => handleChooseSort('avgRatingAsc')}
				>
					Ocena
				</SortElement>
			</div>
		</div>
	);
}

export default SortComponent;
