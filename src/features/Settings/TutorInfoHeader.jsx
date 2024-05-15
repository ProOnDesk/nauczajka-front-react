function TutorInfoHeader({ icon, label }) {
	return (
		<p className='flex flex-row gap-2 items-center text-xl mb-2'>
			<span className='text-3xl'>{icon}</span>
			{label}
		</p>
	);
}

export default TutorInfoHeader;
