import { createPortal } from 'react-dom';
import { CiChat1 } from 'react-icons/ci';
import { useUserData } from '../Auth/useUserData';
import ConversationsList from './ConversationsList';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import ChatsContent from './ChatsContent';
import ConversationsListHeader from './ConversationsListHeader';
import { IoArrowBack } from 'react-icons/io5';
import { ChatsContext } from '../../context/ChatsContext';
import ChatComponent from './ChatComponent';

const variants = {
	open: { x: 0 },
	closed: { x: '100%' },
};

function ChatsComponent() {
	const { choosenUser, isChatOpen, setChoosenUser, setIsChatOpen } =
		useContext(ChatsContext);
	const { data: userData } = useUserData();
	if (userData === null) return null;

	return createPortal(
		<motion.div
			initial={{ x: '100%' }}
			animate={isChatOpen ? 'open' : 'closed'}
			variants={variants}
			transition={{ ease: 'easeIn' }}
			className='absolute w-full h-screen md:w-3/5 xl:w-2/5 md:max-w-[500px] right-0 top-0 bottom-0 bg-white shadow-myShadow border-l-2 border-mainPurple z-50 '
		>
			<div className='relative h-full flex flex-col'>
				{choosenUser ? (
					<ChatsContent
						header={
							<ConversationsListHeader setIsChatOpen={setIsChatOpen}>
								<div className='flex flex-row items-center gap-2'>
									<button onClick={() => setChoosenUser(null)}>
										<span className='text-xl sm400:text-2xl'>
											<IoArrowBack />
										</span>
									</button>
									<p className='text-xl sm400:text-2xl'>
										{choosenUser?.users[1].first_name}{' '}
										{choosenUser?.users[1].last_name}
									</p>
								</div>
							</ConversationsListHeader>
						}
					>
						<ChatComponent conversationId={choosenUser?.id} />
					</ChatsContent>
				) : (
					<ChatsContent
						header={
							<ConversationsListHeader setIsChatOpen={setIsChatOpen}>
								<p>Kontakty</p>
							</ConversationsListHeader>
						}
					>
						<ConversationsList />
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
