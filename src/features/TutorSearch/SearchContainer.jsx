import { CiFilter, CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa6';
import SearchInput from './SearchInput';
import { useEffect, useState } from 'react';
import SearchButton from './SearchButton';

import AddFilterContainer from './addFilterContainer';
import Modal from '../../ui/Modal';

function SearchContainer({
	search,
	onSearch,
	onClick,
	setSkillsFilter,
	skillsFilter,
	searchTutors,
}) {
	const [modalVisible, setModalVisible] = useState(false);
	const [isFilterActive, setIsFilterActive] = useState(false);
	function handleSearch(e) {
		onSearch(e.target.value);
	}

	useEffect(() => {
		if (skillsFilter.length > 0) setIsFilterActive(true);
		else setIsFilterActive(false);
	}, [skillsFilter, setIsFilterActive]);

	return (
		<div className='w-full sm400:w-3/4 md:w-1/2 px-2 mx-auto py-5 flex flex-col gap-2'>
			<SearchInput
				onChange={(e) => handleSearch(e)}
				onClick={onClick}
				placeholder={'Szukaj'}
				value={search}
			/>
			<div className='flex flex-row flex-wrap gap-2 text-sm'>
				{/* <SearchButton
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
				</SearchButton> */}
				<SearchButton
					icon={<CiFilter />}
					isActive={isFilterActive}
					onClick={() => setModalVisible(true)}
				>
					Przedmioty
				</SearchButton>
			</div>
			{modalVisible && (
				<Modal>
					<AddFilterContainer
						setModalVisible={setModalVisible}
						skillsFilter={skillsFilter}
						setSkillsFilter={setSkillsFilter}
						searchTutors={searchTutors}
					/>
				</Modal>
			)}
		</div>
	);
}

export default SearchContainer;
