import { IoClose } from 'react-icons/io5';

function ConversationsHeader({ setIsChatOpen, children }) {
	return (
		<>
			{children}
			<button
				onClick={() => setIsChatOpen((isOpen) => !isOpen)}
				className='text-3xl p-1 rounded-md hover:cursor-pointer hover:bg-whiteHover'
			>
				<span>
					<IoClose />
				</span>
			</button>
		</>
	);
}

export default ConversationsHeader;
