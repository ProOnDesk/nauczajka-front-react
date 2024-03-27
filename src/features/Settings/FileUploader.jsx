import { useState } from 'react';
import toast from 'react-hot-toast';
import { IoImagesOutline } from 'react-icons/io5';

function FileUploader({ handleChange, file, types }) {
	const [isDragOver, setIsDragOver] = useState(false);
	const [imageSrc, setImageSrc] = useState('');
	const dragStyle = isDragOver ? ' bg-whiteHover  ' : '';

	function handleFile(fileObj) {
		const fileExtension = fileObj.type.split('/')[1].toUpperCase();
		if (types.includes(fileExtension)) {
			handleChange(fileObj);

			const reader = new FileReader();
			reader.onload = () => {
				const result = reader.result;
				setImageSrc(result);
			};
			reader.readAsDataURL(fileObj);
		} else {
			toast.error('Zły typ pliku.');
		}
	}

	function handleDrop(e) {
		e.preventDefault();
		const fileObj = e.dataTransfer?.files[0];
		if (fileObj) {
			handleFile(fileObj);
			setIsDragOver(false);
		}
	}

	function handleInputChange(e) {
		const fileObj = e.target.files && e.target.files[0];
		if (fileObj) {
			handleFile(fileObj);
		}
	}

	return (
		<div
			className=' flex items-center justify-center w-full  mx-auto'
			onDragOver={(e) => {
				e.preventDefault();
				setIsDragOver(true);
			}}
			onDrop={handleDrop}
			onDragLeave={() => {
				!file && setIsDragOver(false);
			}}
			onMouseEnter={() => setIsDragOver(true)}
			onMouseLeave={() => setIsDragOver(false)}
		>
			<label
				htmlFor='dropzone-file'
				className={`relative  overflow-hidden flex flex-col items-center justify-center w-full px-2 h-64 border-2 border-main border-dashed rounded-lg cursor-pointer  hover:bg-whiteHover w text-center ${dragStyle}`}
			>
				<div className='flex flex-col items-center justify-center pt-5 pb-6'>
					<svg
						className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 20 16'
					>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
						/>
					</svg>
					<p className='mb-2 text-sm'>
						<span className='font-semibold'>Click to upload</span> or drag and
						drop
					</p>
					<p className='text-xs'>SVG, PNG, JPG or GIF</p>
				</div>
				<input
					id='dropzone-file'
					type='file'
					name='file'
					className='hidden'
					onChange={handleInputChange}
				/>
				{file && (
					<img
						src={imageSrc}
						alt='Your image'
						className={`absolute w-full h-full bg-white p-2 ${dragStyle}`}
					/>
				)}
				{file && isDragOver && (
					<p
						className='absolute h-full w-full z-30 flex justify-center items-center transition-all text-main text-6xl bg-whiteHover'
						onDragEnter={() => {
							setIsDragOver(true);
						}}
						onDragLeave={() => {
							setIsDragOver(false);
						}}
					>
						<span>
							<IoImagesOutline />
						</span>
					</p>
				)}
			</label>
		</div>
	);
}

export default FileUploader;
