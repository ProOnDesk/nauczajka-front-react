function BackgroundElement({ pos, img, size }) {
	const windowHeight = window.innerHeight;
	const windowWidth = window.innerWidth;

	const position = {
		x:
			pos === 'one'
				? windowWidth / 5 - 50
				: pos === 'two'
				? (windowWidth / 2) * 1.5 + 50
				: pos === 'three'
				? windowWidth / 4 - 150
				: pos === 'four'
				? (windowWidth / 2) * 1.5 + 50
				: 0,
		y:
			pos === 'one'
				? windowHeight / 4 - 50
				: pos === 'two'
				? windowHeight / 4 - 50
				: pos === 'three'
				? (windowHeight / 2) * 1.5 - 50
				: pos === 'four'
				? (windowHeight / 2) * 1.5 - 50
				: 0,
	};

	const width = size === 'md' ? 'w-24' : size === 'lg' ? 'w-40' : 'w-20';
	const dataValue = 0.02;
	return (
		<img
			src={img}
			data-value={dataValue}
			className={`${width} w absolute moveObject`}
			style={{ top: `${position.y}px`, left: `${position.x}px` }}
		/>
	);
}

export default BackgroundElement;
