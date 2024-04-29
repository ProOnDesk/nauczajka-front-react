import { CiMail } from 'react-icons/ci';
import Button from '../../ui/Inputs/Button';
import TutorHeader from '../../ui/TutorHeader';
import { useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useCreateChat } from '../Chats/useCreateChat';
import { useContext, useEffect } from 'react';
import { ChatsContext } from '../../context/ChatsContext';

function TutorInfoPageHeader({ tutorInfo }) {
	const query = useQueryClient();
	const { conversation, createChat, isChatSuccess } = useCreateChat();
	const { setIsChatOpen, setChoosenUser } = useContext(ChatsContext);

	function messageHandler() {
		if (query.getQueryData(['user']) === null) {
			toast.error('Musisz się zalogować.');
		} else {
			createChat(tutorInfo?.user_id);
		}
	}

	useEffect(() => {
		if (isChatSuccess) {
			setIsChatOpen(true);
			setChoosenUser(conversation);
		}
	}, [setIsChatOpen, isChatSuccess, setChoosenUser, conversation]);

	return (
		<div className='flex flex-col items-center justify-center md:flex-row md:justify-between px-5 gap-5 max-w-5xl mx-auto'>
			<TutorHeader tutorInfo={tutorInfo} />
			<Button className={'flex items-center gap-2'} onClick={messageHandler}>
				<span className='text-2xl'>
					<CiMail />
				</span>
				Napisz wiadomość
			</Button>
		</div>
	);
}

export default TutorInfoPageHeader;
