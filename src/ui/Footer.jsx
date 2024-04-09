import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Footer() {
	const currentYear = new Date().getFullYear();
	const { pathname } = useLocation();
	const [styles, setStyles] = useState('text-gray');

	useEffect(() => {
		if (pathname === '/') {
			setStyles('text-white bg-mainPurple');
		} else {
			setStyles('text-gray');
		}
	}, [pathname]);

	return (
		<footer className={`py-4 flex justify-center ${styles}`}>
			<p>{currentYear} &copy; Nauczajka</p>
		</footer>
	);
}

export default Footer;
