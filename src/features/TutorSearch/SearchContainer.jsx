import { CiFilter, CiStar } from 'react-icons/ci';
import SearchInput from './SearchInput';

function SearchContainer({ search, onSearch, onClick }) {
	function handleSearch(e) {
		onSearch(e.target.value);
	}
	return (
		<div className='w-full sm400:w-3/4 md:w-1/2 px-2 mx-auto py-5 flex flex-col gap-2'>
			<SearchInput
				onChange={(e) => handleSearch(e)}
				onClick={onClick}
				placeholder={'Szukaj'}
				value={search}
			/>

			<div className='flex flex-row flex-wrap gap-2 text-sm'>
				<button className='px-2 py-1 bg-white rounded-md border-whiteHover border-2 text-gray'>
					<p className='flex items-center gap-2'>
						<span className='text-xl'>
							<CiStar />
						</span>
						Ulubione
					</p>
				</button>
				<button className='px-2 py-1 bg-white rounded-md border-whiteHover border-2 text-gray'>
					<p className='flex items-center gap-2'>
						<span className='text-xl'>
							<CiFilter />
						</span>
						Przedmioty
					</p>
				</button>
			</div>
		</div>
	);
}

export default SearchContainer;
