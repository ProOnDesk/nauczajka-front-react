import { CiFileOff } from 'react-icons/ci';
import Loader from '../../ui/Loader';
import { useContext } from 'react';
import { ChatsContext } from '../../context/ChatsContext';
import { useAllConversations } from './useAllConversations';

function ConversationsList() {
	const { setChoosenUser } = useContext(ChatsContext);
	const { conversationsList, isConversationsLoading, refetchAllConversations } =
		useAllConversations();

	refetchAllConversations();

	return isConversationsLoading ? (
		<div className='absolute top-0 h-screen w-full flex justify-center items-center -z-10'>
			<Loader />
		</div>
	) : (
		<>
			<div className='px-2 md:px-10 w-full overflow-y-scroll py-10'>
				{conversationsList?.length === 0 ? (
					<div className='flex flex-col gap-2 justify-center text-xl mx-auto text-center '>
						<span className='mx-auto text-3xl'>
							<CiFileOff />
						</span>
						<p className=''>Brak konwersacji</p>
					</div>
				) : (
					conversationsList?.map((conversation) => {
						const user = conversation?.users[1];

						return (
							<button
								onClick={() => {
									setChoosenUser(conversation);
								}}
								className='flex flex-col md:flex-row mb-2 justify-center md:justify-between border-whiteHover border-2 rounded-md p-2 gap-3 px-4 w-full mx-auto hover:bg-whiteHover group/tutorEl hover:cursor-pointer transition-colors'
								key={conversation.id}
							>
								<div className='flex flex-row gap-2 items-center'>
									<img
										src={`${user?.profile_image}`}
										alt='Avatar'
										className='h-16 w-16 rounded-full border-whiteHover group-hover/tutorEl:border-mainPurpleHover shadow-md shadow-shadowBlack border-2 transition-colors duration-300'
									/>
									<p className='text-2xl'>
										{user?.first_name} {user?.last_name}
									</p>
								</div>
							</button>
						);
					})
				)}
			</div>
		</>
	);
}

export default ConversationsList;
