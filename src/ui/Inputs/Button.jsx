function Button({ children, type, className, onClick, disabled }) {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`bg-mainPurple hover:bg-mainPurpleHover px-4 py-3 shadow-md shadow-shadowBlack rounded-xl text-white ${className} `}>
			{children}
		</button>
	);
}

export default Button;
