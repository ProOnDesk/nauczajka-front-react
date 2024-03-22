function Button({ children, type, className }) {
	return (
		<button
			type={type}
			className={`bg-mainPurple hover:bg-mainPurpleHover px-4 py-3 shadow-md shadow-shadowBlack rounded-xl text-white ${className}`}
		>
			{children}
		</button>
	);
}

export default Button;
