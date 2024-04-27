import { useEffect, useState } from 'react';
import { useGetMessagesHistory } from './useMessagesHistory';
import { useUserData } from '../Auth/useUserData';
import Loader from '../../ui/Loader';
import MessageComponent from './MessageComponent';

function ChatComponent({ conversationId }) {
	const { getMessagesHistory, isMessagesHistoryPending, messagesHistory } =
		useGetMessagesHistory();
	const [messages, setMessages] = useState([]);
	const { data: userData, isPending: isUserDataPending } = useUserData();

	useEffect(() => {
		getMessagesHistory(conversationId);
	}, [getMessagesHistory, conversationId]);

	useEffect(() => {
		setMessages(messagesHistory);
	}, [messagesHistory]);

	return isMessagesHistoryPending || isUserDataPending ? (
		<div className='absolute top-0 h-screen w-full flex justify-center items-center -z-10'>
			<Loader />
		</div>
	) : (
		<div className='h-full'>
			{messages?.length > 0 ? (
				messages?.map((message) => {
					return (
						<MessageComponent
							message={message}
							userData={userData}
							key={message?.id}
						/>
					);
				})
			) : (
				<p className='text-center py-10'>Brak wiadomości</p>
			)}
		</div>
	);
}

export default ChatComponent;
