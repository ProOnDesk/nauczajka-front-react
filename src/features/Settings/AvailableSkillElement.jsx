function AvailableSkillElement({label}) {
	return (
		<label className='relative flex bg-white gap-2 p-2 shadow-sm shadow-black/25 rounded-md overflow-hidden'>
			<input type='checkbox' />
			<span>{label}</span>
		</label>
	);
}

export default AvailableSkillElement;