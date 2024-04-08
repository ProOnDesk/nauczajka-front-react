function EditFormBtn({ children, onClick, type, disabled }) {
	return (
		<button
			onClick={onClick}
			type={type}
			disabled={disabled}
			className='w-1/3 min-w-40 bg-mainPurple hover:bg-mainPurpleHover text-white transition-colors shadow-myShadow py-3 rounded-md disabled:opacity-60'
		>
			{children}
		</button>
	);
}

export default EditFormBtn;
