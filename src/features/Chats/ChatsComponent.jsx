import { createPortal } from 'react-dom';
import { CiChat1 } from 'react-icons/ci';
import { useUserData } from '../Auth/useUserData';
import { useAllConversations } from './useAllConversations';
import ConversationsList from './ConversationsList';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ChatsContent from './ChatsContent';
import ConversationsListHeader from './ConversationsListHeader';
import { IoArrowBack } from 'react-icons/io5';

const variants = {
	open: { x: 0 },
	closed: { x: '100%' },
};

function ChatsComponent() {
	const [isChatOpen, setIsChatOpen] = useState(false);
	const [choosenUser, setChoosenUser] = useState(null);
	const { data: userData } = useUserData();
	const { conversationsList, isConversationsLoading } = useAllConversations();
	if (userData === null) return null;

	return createPortal(
		<motion.div
			initial={{ x: '100%' }}
			animate={isChatOpen ? 'open' : 'closed'}
			variants={variants}
			transition={{ ease: 'easeIn' }}
			className='absolute w-full h-screen md:w-3/5 xl:w-2/5 md:max-w-[500px] right-0 top-0 bg-white shadow-myShadow border-l-2 border-mainPurple z-50 '
		>
			<div className='relative h-full flex flex-col'>
				{choosenUser ? (
					<ChatsContent
						header={
							<ConversationsListHeader setIsChatOpen={setIsChatOpen}>
								<div className='flex flex-row items-center gap-2'>
									<button onClick={() => setChoosenUser(null)}>
										<span className='text-2xl'>
											<IoArrowBack />
										</span>
									</button>
									<p>Użytkownik</p>
								</div>
							</ConversationsListHeader>
						}
					>
						<p>lista</p>
					</ChatsContent>
				) : (
					<ChatsContent
						header={
							<ConversationsListHeader setIsChatOpen={setIsChatOpen}>
								<p>Kontakty</p>
							</ConversationsListHeader>
						}
					>
						<ConversationsList
							conversationsList={conversationsList}
							isConversationsLoading={isConversationsLoading}
							setChoosenUser={setChoosenUser}
						/>
					</ChatsContent>
				)}
				<button
					onClick={() => setIsChatOpen((isOpen) => !isOpen)}
					className='absolute bottom-10 shadow-myShadow rounded-l-full -left-14 bg-mainPurple p-4 hover:bg-mainPurpleHover hover:cursor-pointer duration-300 '
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
