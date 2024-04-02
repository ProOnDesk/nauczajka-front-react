import { CiSearch } from 'react-icons/ci';

function SearchInput({ placeholder, value, onChange, onClick }) {
	return (
		<div className='relative flex'>
			<input
				type='text'
				placeholder={placeholder}
				className='w-full border-whiteHover border-2 rounded-md p-2 focus:outline-none focus:border-mainPurple pr-8'
				value={value}
				onChange={onChange}
			/>
			<button
				type='button'
				onClick={onClick}
				className='absolute right-0 h-full flex items-center px-2 text-2xl hover:text-mainPurpleHover transition-colors'
			>
				<span>
					<CiSearch />
				</span>
			</button>
		</div>
	);
}

export default SearchInput;
