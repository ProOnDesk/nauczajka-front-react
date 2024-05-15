import BackgroundElement from './BackgroundElement';

function BackgroundContainer() {
	document.addEventListener('mousemove', parallax);
	function parallax(e) {
		document.querySelectorAll('.moveObject').forEach(function (move) {
			let moving_value = move.getAttribute('data-value');
			let x = e.clientX * moving_value;
			let y = e.clientY * moving_value;
			move.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)';
		});
	}

	return (
		<div className='absolute left-0 right-0 top-0 bottom-0 -z-20 overflow-hidden'>
			<BackgroundElement pos='one' img={'/chemia.png'} size={'md'} />
			<BackgroundElement pos='two' img={'/atom.png'} size={'md'} />
			<BackgroundElement pos='three' img={'/math3.png'} size={'lg'} />
			<BackgroundElement pos='four' img={'/compass.png'} size={'lg'} />
		</div>
	);
}

export default BackgroundContainer;
