function TitleElement({ logo, title }) {
	return (
		<span className='flex flex-row items-center gap-2'>
			<span className='text-2xl'>{logo}</span>
			{title}
		</span>
	);
}

export default TitleElement;
