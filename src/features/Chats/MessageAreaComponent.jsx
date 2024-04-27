import { useEffect, useState } from 'react';
import { CiPaperplane } from 'react-icons/ci';
import useWebSocket from 'react-use-websocket';

function MessageAreaComponent({ conversationId, userData, setMessages }) {
	const [message, setMessage] = useState('');
	const token = sessionStorage.getItem('auth_token');
	const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
		`ws://localhost:8000/ws/chat/${conversationId}/?token=${token}`
	);

	const sendMessage = () => {
		console.log('slij');
		sendJsonMessage({
			event: 'chat_message',
			data: {
				body: message,
				id: 1,
				conversation: conversationId,
				created_at: new Date(),
				created_by: {
					first_name: 'pawel',
					id: userData?.id,
					last_name: 'ochalek',
					profile_image: userData?.profile_image,
				},
			},
		});
		setMessage('');
	};
	useEffect(() => {
		const newMessage = {
			body: lastJsonMessage?.body,
			id: lastJsonMessage?.message_id,
			conversation: lastJsonMessage?.conversation,
			created_at: lastJsonMessage?.created_at,
			created_by: {
				first_name: lastJsonMessage?.created_by.first_name,
				id: lastJsonMessage?.created_by.id,
				last_name: lastJsonMessage?.created_by.last_name,
				profile_image: lastJsonMessage?.created_by.profile_image,
			},
		};
		// setMessages((messages) => [...messages, newMessage]);
		console.log(newMessage);
	}, [lastJsonMessage, setMessages, conversationId]);

	useEffect(() => {
		console.log(readyState);
	}, [readyState]);

	function handleSendMessage(e) {
		if (e.which === 13 && !e.shiftKey && message !== '') {
			e.preventDefault();
			console.log(message);
			sendMessage();
			setMessage('');
		} else return;
	}

	return (
		<form
			onSubmit={handleSendMessage}
			className='flex flex-row h-[10%] p-2 shadow-whiteHover shadow-md '
		>
			<textarea
				placeholder='Napisz wiadomość'
				id='usermsg'
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				onKeyDown={(e) => handleSendMessage(e)}
				className='resize-none bg-whiteHover rounded-md w-full min-h-full max-h-full p-2 focus:outline-none focus:ring-0 border-2 border-transparent focus:border-mainPurple '
			></textarea>
			<button
				type='button'
				onClick={handleSendMessage}
				className='flex items-center p-2 focus:outline-none focus:ring-0 border-2 border-transparent rounded-md focus:text-mainPurple'
			>
				<span className='text-2xl hover:text-mainPurple hover:cursor-pointer'>
					<CiPaperplane />
				</span>
			</button>
		</form>
	);
}

export default MessageAreaComponent;
