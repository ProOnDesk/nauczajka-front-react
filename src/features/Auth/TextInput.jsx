import { useState } from 'react';
import { IoMdInformationCircleOutline } from 'react-icons/io';
function TextInput({
	register,
	error,
	label,
	field,
	type,
	validateFunction,
	info,
}) {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<div className='relative flex flex-col gap-2 w-full'>
			<div className='relative'>
				<div className='flex flew-row gap-1 items-center'>
					<label className='pl-2'>{label}</label>
					{info && (
						<div className='relative group'>
							<span className='text-md hover:text-gray hover:cursor-help'>
								<IoMdInformationCircleOutline />
							</span>
							<p className='text-center group-hover:block opacity-0 group-hover:opacity-100 transition-all hidden absolute left-4 top-4 w-40 sm400:w-60 z-10 shadow-myShadow rounded-md p-4 text-[12px] bg-white'>
								{info}
							</p>
						</div>
					)}
				</div>
			</div>
			<input
				{...register(field, {
					required:
						field === 'repeatPassword' ? 'Powtórz Hasło' : `Wprowadź ${label}`,
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
