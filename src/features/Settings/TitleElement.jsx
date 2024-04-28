function TitleElement({ logo, title }) {
	return (
		<p className='flex flex-row items-center gap-2'>
			<span className='text-2xl'>{logo}</span>
			{title}
		</p>
	);
}

export default TitleElement;
