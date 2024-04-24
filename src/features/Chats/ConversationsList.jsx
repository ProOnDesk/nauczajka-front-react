import { CiFileOff } from 'react-icons/ci';

function ConversationsList({ conversationsList }) {
	return (
		<div className='flex flex-col gap-2 px-2 w-full justify-center'>
			{conversationsList?.length === 0 ? (
				<div className='flex flex-col gap-2 justify-center text-xl mx-auto text-center '>
					<span className='mx-auto text-3xl'>
						<CiFileOff />
					</span>
					<p className=''>Brak konwersacji</p>
				</div>
			) : (
				conversationsList?.map((conversation) => {
					console.log(conversation);
					return (
						<div
							className='flex flex-col md:flex-row justify-center md:justify-between border-whiteHover border-2 rounded-md p-2 gap-3 px-4 w-full mx-auto hover:bg-whiteHover group/tutorEl hover:cursor-pointer transition-colors'
							key={conversation.id}
						>
							<div className='flex flex-row gap-2 items-center'>
								<img
									// src={`${API_KEY}${tutorInfo?.profile_image}`}
									alt='Avatar'
									className='h-16 w-16 rounded-full border-whiteHover group-hover/tutorEl:border-mainPurpleHover shadow-md shadow-shadowBlack border-2 transition-colors duration-300'
								/>
								<p className='text-2xl'>
									{conversation.users[0].first_name}{' '}
									{conversation.users[0].last_name}
								</p>
							</div>
						</div>
					);
				})
			)}
		</div>
	);
}

export default ConversationsList;
