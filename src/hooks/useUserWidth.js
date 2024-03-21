import { useState, useEffect } from 'react';

export function useUserWidth() {
	const [width, setWidth] = useState(0);

	useEffect(() => {
		function getUserWidth() {
			setWidth(window.innerWidth);
		}
		getUserWidth();
		window.addEventListener('resize', getUserWidth);
		return () => {
			window.removeEventListener('resize', getUserWidth);
		};
	}, []);

	return width;
}
