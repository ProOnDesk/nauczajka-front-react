function SelectInput({ register, label, onChange, checked, error }) {
	return (
		<div>
			<label className='flex gap-2 items-center'>
				<input type='radio' name='role' />
				Korepetytor
			</label>
			{error && <p>erorr</p>}
		</div>
	);
}

export default SelectInput;
