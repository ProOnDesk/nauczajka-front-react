import { createContext, useState } from 'react';

export const FooterContext = createContext({
	color: '',
	changeColor: (color) => {},
});

function ColorProvider({ children }) {
	const [footerColor, setFooterColor] = useState('text-gray');
	//text-gray
	//text-white bg-mainPurple

	function changeColor(color) {
		setFooterColor(color);
	}

	const value = { color: footerColor, changeColor: changeColor };
	return (
		<FooterContext.Provider value={value}>{children}</FooterContext.Provider>
	);
}

export default ColorProvider;
