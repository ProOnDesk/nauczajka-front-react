import { CiFilter } from 'react-icons/ci';
import SearchInput from './SearchInput';
import { useEffect, useState } from 'react';
import SearchButton from './SearchButton';

import AddFilterContainer from './addFilterContainer';
import Modal from '../../ui/Modal';
import SessionMethods from './SessionMethods';
import PriceReview from './PriceReview';

function SearchContainer({ onClick, filters, setFilters }) {
	const [modalVisible, setModalVisible] = useState(null);
	const [isFilterActive, setIsFilterActive] = useState({
		skills: false,
		sessionMethods: false,
		price_review: false,
	});
	function handleSearch(e) {
		setFilters((prevFilters) => ({
			...prevFilters,
			searchByFullName: e.target.value,
		}));
	}

	useEffect(() => {
		if (filters.skills.length > 0)
			setIsFilterActive((prevFilters) => ({ ...prevFilters, skills: true }));
		else
			setIsFilterActive((prevFilters) => ({ ...prevFilters, skills: false }));

		if (
			filters.individualSession === true ||
			filters.groupSession === true ||
			filters.personSession === true ||
			filters.onlineSession === true
		)
			setIsFilterActive((prevFilters) => ({
				...prevFilters,
				sessionMethods: true,
			}));
		else
			setIsFilterActive((prevFilters) => ({
				...prevFilters,
				sessionMethods: false,
			}));

		if (
			filters.avgRatingGt !== '' ||
			filters.avgRatingLt !== '' ||
			filters.priceGt !== '' ||
			filters.priceLt !== ''
		) {
			setIsFilterActive((prevFilters) => ({
				...prevFilters,
				price_review: true,
			}));
		} else {
			setIsFilterActive((prevFilters) => ({
				...prevFilters,
				price_review: false,
			}));
		}
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
					isActive={isFilterActive.skills}
					onClick={() => setModalVisible('skills')}
				>
					Przedmioty
				</SearchButton>
				<SearchButton
					icon={<CiFilter />}
					isActive={isFilterActive.sessionMethods}
					onClick={() => setModalVisible('sessionMethods')}
				>
					Metodyka
				</SearchButton>
				<SearchButton
					icon={<CiFilter />}
					isActive={isFilterActive.price_review}
					onClick={() => setModalVisible('price_review')}
				>
					Opinia/Cena
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
					{modalVisible === 'sessionMethods' && (
						<SessionMethods
							setModalVisible={setModalVisible}
							filters={filters}
							setFilters={setFilters}
						/>
					)}
					{modalVisible === 'price_review' && (
						<PriceReview
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
