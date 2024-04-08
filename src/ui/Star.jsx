import { CiStar } from 'react-icons/ci';

function Star({ fill, onHoverIn, onHoverOut, onClick, readOnly, size }) {
	return (
		<span
			className={` ${fill && ' text-mainSalmon '} ${
				!readOnly && ' hover:cursor-pointer '
			} ${
				size === 'md' ? ' text-lg ' : size === 'xl' ? ' text-2xl ' : null
			} transition-colors`}
			onMouseEnter={onHoverIn}
			onMouseLeave={onHoverOut}
			onClick={onClick}
		>
			<CiStar />
		</span>
	);
}

export default Star;
