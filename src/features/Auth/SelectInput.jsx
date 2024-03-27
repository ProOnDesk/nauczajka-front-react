function SelectInput({ register, label, field, value, error, onChange }) {
	return (
		<div>
			<label className='flex gap-2 items-center'>
				<input
					type='radio'
					name={field}
					value={value}
					{...register(field)}
					onChange={onChange}
				/>
				{label}
			</label>
			{error && <p>{error.toString()}</p>}
		</div>
	);
}

export default SelectInput;
