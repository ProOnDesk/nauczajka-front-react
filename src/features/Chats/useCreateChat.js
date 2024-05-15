import { useMutation } from '@tanstack/react-query';
import { createNewChat as createNewChatApi } from '../../services/apiChats';
import toast from 'react-hot-toast';

export function useCreateChat() {
	const {
		data: conversation,
		mutate: createChat,
		isPending: isChatCreating,
		isSuccess: isChatSuccess,
	} = useMutation({
		mutationFn: createNewChatApi,
		onError: (err) => {
			const error = JSON.parse(err.message);
			toast.error(Object.values(error)[0]);
		},
	});
	return {
		conversation,
		createChat,
		isChatCreating,
		isChatSuccess,
	};
}
