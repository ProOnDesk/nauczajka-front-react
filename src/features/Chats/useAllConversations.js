import { useQuery } from '@tanstack/react-query';

import { getAllConversations as getAllConversationsApi } from '../../services/apiChats';

export function useAllConversations() {
	const {
		data: conversationsList,
		isPending: isConversationsLoading,
		refetch: refetchAllConversations,
	} = useQuery({
		queryFn: getAllConversationsApi,
		queryKey: ['listOfConversations'],
	});
	return { conversationsList, isConversationsLoading, refetchAllConversations };
}
