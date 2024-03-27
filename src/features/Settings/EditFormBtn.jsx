function EditFormBtn({ children, onClick, type }) {
	return (
		<button
			onClick={onClick}
			type={type}
			className='w-1/3 min-w-40 bg-mainPurple hover:bg-mainPurpleHover text-white transition-colors shadow-myShadow py-3 rounded-md '
		>
			{children}
		</button>
	);
}

export default EditFormBtn;
