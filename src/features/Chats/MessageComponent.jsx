import { API_KEY } from '../../services/apiAuth';

function MessageComponent({ userData, message }) {
	const createdBy = message?.created_by;

	return (
		<div
			className={`p-2 flex gap-2  ${
				createdBy?.id === userData?.id
					? 'self-end flex-row-reverse'
					: 'self-start'
			}`}
		>
			{createdBy?.id !== userData?.id && (
				<img
					src={`${API_KEY}${createdBy?.profile_image}`}
					alt='Avatar'
					className='w-10 h-10 rounded-full'
				/>
			)}
			<p
				className={`p-2 rounded-md shadow-sm shadow-whiteHover ${
					createdBy?.id === userData?.id
						? 'text-white bg-mainPurple'
						: ' bg-whiteHover'
				}`}
			>
				{message?.body}
			</p>
		</div>
	);
}

export default MessageComponent;
