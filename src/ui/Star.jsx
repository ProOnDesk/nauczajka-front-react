import { CiStar } from 'react-icons/ci';

function Star({ fill, onHoverIn, onHoverOut, onClick, readOnly }) {
	return (
		<span
			className={`text-xl ${fill && ' text-mainSalmon '} ${
				!readOnly && ' hover:cursor-pointer '
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
