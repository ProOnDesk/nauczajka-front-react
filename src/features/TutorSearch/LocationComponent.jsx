import { useEffect, useState } from 'react';

function LocationComponent({ filters, setFilters }) {
	const [input, setInput] = useState(filters.location);
	console.log(filters);

	useEffect(() => {}, []);
	return (
		<div className='w-full '>
			<input
				type='text'
				className='text-sm min-w-32 py-1 px-2  focus:border-mainPurple  w-full border-whiteHover border-2 rounded-md focus:outline-none focus:ring-0'
				placeholder='Miasto'
				onChange={(e) => {
					setFilters((prevFilters) => ({
						...prevFilters,
						location: e.target.value,
					}));
				}}
			/>
		</div>
	);
}

export default LocationComponent;
