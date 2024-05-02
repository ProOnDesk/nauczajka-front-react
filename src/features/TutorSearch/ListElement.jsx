function ListElement({ children, icon, isActive, onClick }) {
	return (
		<button
			className={`flex items-center gap-2 text-lg py-1 px-8  w-full hover:border-mainPurple first-of-type:rounded-t-md last-of-type:rounded-b-md border-transparent border-2 border-whiteHover border-b-0 border-t-0 first-of-type:border-t-2 last-of-type:border-b-2 transition-colors duration-200`}
			onClick={onClick}
		>
			<span className={`text-2xl ${isActive && ' text-mainSalmon '}`}>
				{icon}
			</span>
			{children}
		</button>
	);
}

export default ListElement;
