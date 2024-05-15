import { useEffect, useRef, useState } from 'react';
import { useGetMessagesHistory } from './useMessagesHistory';
import { useUserData } from '../Auth/useUserData';
import Loader from '../../ui/Loader';
import MessageComponent from './MessageComponent';
import MessageAreaComponent from './MessageAreaComponent';

function ChatComponent({ conversationId }) {
	const {
		getMessagesHistory,
		isMessagesHistoryPending,
		messagesHistory,
		isMessagesHistorySuccess,
	} = useGetMessagesHistory();
	const { data: userData, isPending: isUserDataPending } = useUserData();
	const [messages, setMessages] = useState([]);
	const messagesContainer = useRef(null);

	useEffect(() => {
		getMessagesHistory(conversationId);
	}, [getMessagesHistory, conversationId]);

	useEffect(() => {
		setMessages(messagesHistory);
	}, [messagesHistory]);

	const scrollToBottom = () => {
		if (messagesContainer.current) {
			messagesContainer.current.scrollTop =
				messagesContainer.current.scrollHeight;
		}
	};

	useEffect(() => {
		if (messagesContainer.current) {
			const { scrollTop, scrollHeight, clientHeight } =
				messagesContainer.current;
			const isScrolledToBottom = scrollHeight - scrollTop - clientHeight < 100;
			if (isScrolledToBottom) {
				scrollToBottom();
			}
		}
	}, [messages]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			scrollToBottom();
		}, 1);

		return () => clearTimeout(timeout);
	}, [isMessagesHistorySuccess]);

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
