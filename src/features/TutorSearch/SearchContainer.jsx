import { CiFilter } from 'react-icons/ci';
import SearchInput from './SearchInput';
import { useEffect, useState } from 'react';
import SearchButton from './SearchButton';

import AddFilterContainer from './addFilterContainer';
import Modal from '../../ui/Modal';

function SearchContainer({ onClick, filters, setFilters }) {
	const [modalVisible, setModalVisible] = useState(null);
	const [isFilterActive, setIsFilterActive] = useState(false);
	function handleSearch(e) {
		setFilters((prevFilters) => ({
			...prevFilters,
			searchByFullName: e.target.value,
		}));
	}

	useEffect(() => {
		if (filters.skills.length > 0) setIsFilterActive(true);
		else setIsFilterActive(false);
	}, [filters, setIsFilterActive]);

	return (
		<div className='w-full sm400:w-3/4 md:w-1/2 px-2 mx-auto py-5 flex flex-col gap-2'>
			<SearchInput
				onChange={(e) => handleSearch(e)}
				onClick={onClick}
				placeholder={'Szukaj Korepetytora'}
				value={filters?.searchByFullName}
			/>
			<div className='flex flex-row flex-wrap gap-2 text-sm'>
				<SearchButton
					icon={<CiFilter />}
					isActive={isFilterActive}
					onClick={() => setModalVisible('skills')}
				>
					Przedmioty
				</SearchButton>
				<SearchButton
					icon={<CiFilter />}
					isActive={isFilterActive}
					onClick={() => setModalVisible('skills')}
				>
					Przedmioty
				</SearchButton>
			</div>
			{modalVisible && (
				<Modal>
					{modalVisible === 'skills' && (
						<AddFilterContainer
							setModalVisible={setModalVisible}
							filters={filters}
							setFilters={setFilters}
						/>
					)}
				</Modal>
			)}
		</div>
	);
}

export default SearchContainer;

{
	/* <SearchButton
					icon={<CiStar />}
					activeIcon={
						<span className='text-mainSalmonHover'>
							<CiStar />
						</span>
					}
					isActive={isFavouriteActive}
					onClick={handleFavourite}
				>
					Ulubione
				</SearchButton> */
}
