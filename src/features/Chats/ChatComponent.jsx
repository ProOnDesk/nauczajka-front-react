import { useEffect, useRef, useState } from 'react';
import { useGetMessagesHistory } from './useMessagesHistory';
import { useUserData } from '../Auth/useUserData';
import Loader from '../../ui/Loader';
import MessageComponent from './MessageComponent';
import MessageAreaComponent from './MessageAreaComponent';

function ChatComponent({ conversationId }) {
	const { getMessagesHistory, isMessagesHistoryPending, messagesHistory } =
		useGetMessagesHistory();
	const { data: userData, isPending: isUserDataPending } = useUserData();

	const [messages, setMessages] = useState([]);

	const messagesContainer = useRef(null);
	const scrollToBottom = () => {
		if (messagesContainer.current) {
			messagesContainer.current.scrollTop =
				messagesContainer.current.scrollHeight;
		}
	};
	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	useEffect(() => {
		getMessagesHistory(conversationId);
	}, [getMessagesHistory, conversationId]);

	useEffect(() => {
		setMessages(messagesHistory);
	}, [messagesHistory]);

    console.log(messages);

	return isMessagesHistoryPending || isUserDataPending ? (
		<div className='absolute top-0 h-screen w-full flex justify-center items-center -z-10'>
			<Loader />
		</div>
	) : (
		<>
			<div
				ref={messagesContainer}
				className='flex flex-col py-2 h-[90%] overflow-y-scroll'
			>
				{messages?.length === 0 && (
					<p className='text-center py-5 text-gray'>
						Teraz możecie ze sobą pisać
					</p>
				)}
				{messages?.map((message) => {
					return (
						<MessageComponent
							message={message}
							userData={userData}
							key={message?.id}
						/>
					);
				})}
			</div>
			<MessageAreaComponent
				conversationId={conversationId}
				scrollToBottom={scrollToBottom}
				setMessages={setMessages}
				
				userData={userData}
			/>
		</>
	);
}

export default ChatComponent;
