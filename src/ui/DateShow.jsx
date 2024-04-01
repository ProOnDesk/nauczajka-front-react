function DateShow({ date }) {
	const day = date.getDate();
	const dayOfWeek = date.toLocaleDateString('default', { weekday: 'long' });
	const month = date.toLocaleString('default', { month: 'long' });
	const year = date.getFullYear();
	return (
		<div className='flex justify-center flex-col min-w-28 gap-2'>
			<div className=''>
				<p className='text-xl text-center tracking-wide'>{dayOfWeek}</p>
			</div>
			<div className='flex flex-row  items-center justify-around'>
				<div className=''>
					<p className='text-4xl'>{day}</p>
				</div>
				<div className=' text-sm text-end'>
					<p>{month}</p>
					<p>{year}</p>
				</div>
			</div>
		</div>
	);
}

export default DateShow;
