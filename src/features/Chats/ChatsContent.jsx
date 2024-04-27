function ChatsContent({ header, children }) {
	return (
		<div className='flex flex-col h-full'>
			<div className='flex p-6 px-5 md:px-10 text-2xl md:text-3xl flex-row  items-center justify-between font-roboto-mono text-gray shadow-md shadow-whiteHover '>
				{header}
			</div>
			<div className='overflow-scroll h-full'>{children}</div>
		</div>
	);
}

export default ChatsContent;
