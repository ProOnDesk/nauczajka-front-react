import { useEffect, useRef, useState } from 'react';

function ListComponent({ children, title, icon }) {
	const [isOpen, setIsOpen] = useState(false);
	const wrapperRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [setIsOpen]);

	return (
		<div
			ref={wrapperRef}
			className={`group relative  flex items-center gap-2 hover:cursor-pointer bg-white rounded-md ${
				isOpen ? 'border-mainPurple' : 'border-whiteHover'
			} border-2 text-gray hover:border-mainPurple transition-colors`}
		>
			<span
				className='flex gap-2 text-gray px-2 py-1 w-full'
				onClick={() => {
					setIsOpen((currentState) => !currentState);
				}}
			>
				<span className={`text-xl text-gray`}>{icon}</span>
				{title}
			</span>
			<div
				className={`${
					isOpen ? 'block' : 'hidden'
				} absolute bg-white min-w-full text-xl font-roboto-mono top-8 rounded-md text-gray z-50 -left-[2px] shadow-sm shadow-whiteHover`}
			>
				{children}
			</div>
		</div>
	);
}

export default ListComponent;
