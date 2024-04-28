function InfoElement({ title, children }) {
	return (
		<div className='flex justify-between items-center relative bg-white p-2 shadow-sm shadow-black/25 rounded-md overflow-hidden w-full'>
			<p>{title}</p>
			<p className='text-end text-gray'>{children}</p>
		</div>
	);
}

export default InfoElement;
