function ChatsContent({ header, children }) {
	return (
		<div className='flex flex-col justify-between h-full'>
			<div className='flex h-[10%] p-6 px-5 md:px-10 text-2xl md:text-3xl flex-row  items-center justify-between font-roboto-mono text-gray shadow-md shadow-whiteHover '>
				{header}
			</div>
			<div className='h-[90%]'>{children}</div>
		</div>
	);
}

export default ChatsContent;
