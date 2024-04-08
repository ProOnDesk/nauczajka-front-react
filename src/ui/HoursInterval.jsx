import { IoTrashBinOutline } from 'react-icons/io5';

function HoursInterval({ start, end, onClick, readOnly }) {
	return (
		<button
			onClick={() => {
				if (!readOnly) onClick();
			}}
			type='button'
			className={`relative bg-white p-2 shadow-sm shadow-black/25 rounded-md overflow-hidden cursor-default`}
		>
			<p className='flex justify-center'>
				{start} - {end}
			</p>
			{!readOnly && (
				<div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center hover:bg-mainBlue/90 opacity-0 hover:opacity-100 transition-all hover: cursor-pointer'>
					<span className='text-2xl text-white'>
						<IoTrashBinOutline />
					</span>
				</div>
			)}
		</button>
	);
}

export default HoursInterval;
