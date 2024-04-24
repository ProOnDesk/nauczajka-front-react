import { createPortal } from 'react-dom';
import { CiChat1 } from 'react-icons/ci';
import { useUserData } from '../Auth/useUserData';
import { useAllConversations } from './useAllConversations';
import ConversationsList from './ConversationsList';
import { useState } from 'react';
import { motion } from 'framer-motion';

const variants = {
	open: { x: 0 },
	closed: { x: '100%' },
};

function ChatsComponent() {
	const [isChatOpen, setIsChatOpen] = useState(false);
	const { data: userData } = useUserData();
	const { conversationsList } = useAllConversations();
	if (userData === null) return null;

	return createPortal(
		<motion.div
			initial={{ x: '100%' }}
			animate={isChatOpen ? 'open' : 'closed'}
			variants={variants}
			transition={{ ease: 'easeIn' }}
			className='absolute w-1/2 h-full right-0 top-0 bg-white shadow-myShadow border-l-2 border-mainPurple z-50 ove'
		>
			<div className='relative h-full top-0'>
				<div className='overflow-scroll max-h-full'>
					<p className='text-4xl p-10 font-roboto-mono text-gray'>Kontakty</p>
					<div>
						<ConversationsList conversationsList={conversationsList} />
					</div>
				</div>
				<button
					onClick={() => setIsChatOpen((isOpen) => !isOpen)}
					className='absolute bottom-10 rounded-l-full -left-14 bg-mainPurple p-4 hover:bg-mainPurpleHover hover:cursor-pointer duration-300 '
				>
					<span className='text-2xl text-white'>
						<CiChat1 />
					</span>
				</button>
			</div>
		</motion.div>,
		document.body
	);
}

export default ChatsComponent;
