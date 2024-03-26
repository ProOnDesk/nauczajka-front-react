function UserInfoBtn({ type, children, onClick }) {
	return (
		<button
			onClick={onClick}
			className={`p-4 flex flex-row justify-center transition-colors shadow-md shadow-shadowBlack rounded-md ${
				type === 'primary' &&
				' bg-mainPurple hover:bg-mainPurpleHover text-white '
			} ${
				type === 'dangerous' &&
				' hover:bg-white bg-red-500 hover:text-red-500 text-white border-2 border-red-500'
			} `}
		>
			{children}
		</button>
	);
}

export default UserInfoBtn;
