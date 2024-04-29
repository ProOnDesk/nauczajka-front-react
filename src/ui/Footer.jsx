import { useContext } from 'react';
import { FooterContext } from '../context/FooterContext';

function Footer() {
	const currentYear = new Date().getFullYear();
	const colorContext = useContext(FooterContext);

	return (
		<footer className={`py-4 flex justify-center ${colorContext.color}`}>
			<p>{currentYear} &copy; Nauczajka</p>
		</footer>
	);
}

export default Footer;
