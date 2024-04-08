import { useState } from 'react';
import Star from './Star';

function StarRating({
	maxRating = 5,
	currRating,
	setCurrRating,
	readOnly,
	size = 'md',
}) {
	const [tempRating, setTempRating] = useState(null);

	return (
		<div className={`flex items-center gap-2 `}>
			<div className='flex'>
				{Array.from({ length: maxRating }, (_, i) =>
					!readOnly ? (
						<Star
							key={i}
							fill={tempRating ? i < tempRating : i < Math.floor(currRating)}
							onHoverIn={() => setTempRating(i + 1)}
							onHoverOut={() => setTempRating(null)}
							onClick={() => setCurrRating(i + 1)}
						/>
					) : (
						<Star
							key={i}
							fill={i < Math.floor(currRating)}
							readOnly={true}
							size={size}
						/>
					)
				)}
			</div>
		</div>
	);
}

export default StarRating;
