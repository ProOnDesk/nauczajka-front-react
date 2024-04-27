import { useEffect, useState, useRef } from 'react';
import CustomButton from '../ui/Inputs/Button';
import useWebSocket from 'react-use-websocket';
import { API_KEY, getUserData } from '../services/apiAuth';
// powodzonka w rozszyfrowywaniu tego kodu,  niezly rozpierdol tu zrobilem ale dziala

// nie bij ze wsadzilem tu wszystko do jednego, chcialem zebys nie mial rozwalonego mojego kodu w innych plikach


function ConversationPage() {
	const messagesDiv = useRef(null);

	const token = sessionStorage.getItem('auth_token');
	const [myUser, setMyUser] = useState(null);
	const conversation_id = '365b863a-9752-4c0d-a357-675d467044eb'; // MATI musisz tu ogarnac dynamicznie pobierac konwersacje z ENDPOINTA /api/chat/conversations/

	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState('');
	const [realtimeMessages, setRealtimeMessages] = useState([]);

	// to scrolluje na dol jak sie dodaje nowa wiadomosc wkurwialo mnie jak tak sie nie robilo to tak zrobilem rob co chcesz
	const scrollToBottom = () => {
		if (messagesDiv.current) {
			messagesDiv.current.scrollTop = messagesDiv.current.scrollHeight;
		}
	};

	useEffect(() => {
		getUserData().then((userData) => {
			setMyUser(userData);
		});
	}, []);
	// this is downloading messages from the server
	useEffect(() => {
		async function fetchMessages() {
			try {
				const fetchedMessages = await getMessages(token, conversation_id);
				setMessages(fetchedMessages);
			} catch (error) {
				console.error('Error fetching messages:', error);
			}
		}
		fetchMessages();
	}, [token, conversation_id]);

	const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
		`ws://localhost:8000/ws/chat/${conversation_id}/?token=${token}`,
		{
			share: false,
			shouldReconnect: function () {
				return true;
			},
		}
	);

	useEffect(() => {
		console.log('Connection state changed', readyState);
	}, [readyState]);
	// this is handling messages from the websocket
	useEffect(() => {
		if (
			lastJsonMessage &&
			typeof lastJsonMessage === 'object' &&
			'username' in lastJsonMessage &&
			'body' in lastJsonMessage &&
			'created_by' in lastJsonMessage
		) {
			const message = {
				id: lastJsonMessage.message_id,
				body: lastJsonMessage.body,
				conversation_id: conversation_id,
				username: lastJsonMessage.username,
				created_by: lastJsonMessage.created_by,
			};
			console.log('Received message', message);

			setRealtimeMessages((realtimeMessages) => [...realtimeMessages, message]);
			console.log('BYDGOSZCZ: ' + lastJsonMessage?.message_id);
		}
	}, [lastJsonMessage]);

	// this is scrolling to the bottom of the messages
	useEffect(() => {
		scrollToBottom();
	}, [realtimeMessages]);

	// this is sending a message
	const sendMessage = () => {
		sendJsonMessage({
			event: 'chat_message',
			data: {
				body: newMessage,
				created_by: myUser?.id,
				conversation_id: conversation_id,
				username: myUser.first_name + ' ' + myUser.last_name,
			},
		});
		setNewMessage('');
	};
	return (
		<>
			<div
				ref={messagesDiv}
				className='max-h-[400px] overflow-auto flex flex-col space-y-4'
			>
				{messages.map((message, index) => (
					<div
						key={index}
						className={`w-[80%]py-4 px-6 rounded-xl ${
							message.created_by.id == myUser.id
								? 'ml-[20%] bg-blue-100'
								: 'bg-gray-200'
						}`}
					>
						<p className='font-bold text-gray-500'>{message.username}</p>
						<p>{message.body}</p>
					</div>
				))}

				{realtimeMessages.map((message, index) => (
					<div
						key={message?.id}
						className={`w-[80%]py-4 px-6 rounded-xl ${
							message.created_by == myUser.id
								? 'ml-[20%] bg-blue-200'
								: 'bg-blue-300'
						}`}
					>
						<p className='font-bold text-gray-500'>{message.username}</p>
						<p>{message.body}</p>
					</div>
				))}
			</div>

			<div className='mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl'>
				<input
					type='text'
					placeholder='Type your message...'
					className='w-full p-2 bg-gray-200 rounded-xl'
					value={newMessage}
					onChange={(e) => setNewMessage(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							sendMessage();
						}
					}}
				/>
				<CustomButton	tton onClick={sendMessage} className='w-[100px]'>
					<p>Send</p>
				</CustomButton>
			</div>
		</>
	);
}

export default ConversationPage;
