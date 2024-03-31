function HoursInterval({ start, end, onClick }) {
	return (
		<button
			onClick={onClick}
			type='button'
			className={`flex p-2 rounded-md shadow-md shadow-shadowBlack justify-center ${
				onClick && 'hover:bg-whiteHover'
			}`}
		>
			<p className='flex justify-center'>
				{start} - {end}
			</p>
		</button>
	);
}

export default HoursInterval;
