import { useMutation } from '@tanstack/react-query';
import { createNewChat as createNewChatApi } from '../../services/apiChats';
import toast from 'react-hot-toast';

export function useCreateChat() {
	const {
		mutate: createChat,
		isPending: isChatCreating,
		isSuccess: isChatSuccess,
	} = useMutation({
		mutationFn: createNewChatApi,
		onSuccess: (data) => {
			console.log(data);
		},
		onError: (err) => {
			const error = JSON.parse(err.message);
			toast.error(error);
		},
	});
	return {
		createChat,
		isChatCreating,
		isChatSuccess,
	};
}
