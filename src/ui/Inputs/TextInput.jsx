import { useState } from 'react';

function TextInput({ register, error, label, field, type, validateFunction }) {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<div className='relative flex flex-col gap-2 w-full'>
			<label className='pl-2'>{label}</label>
			<input
				{...register(field, {
					required: `Wprowadź ${label}`,
					validate: validateFunction,
				})}
				type={type}
				className={`w- full p-2 border-2 focus:outline-none focus:ring-0 rounded-xl ${
					isFocused
						? ' border-mainPurple '
						: error
						? ' border-mainSalmon '
						: ' border-shadowBlack '
				} `}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
			<div className='absolute -bottom-6 text-sm left-2 text-mainSalmon'>
				{error && <span>{error.toString()}</span>}
			</div>
		</div>
	);
}

export default TextInput;
