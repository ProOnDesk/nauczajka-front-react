import { useQuery } from '@tanstack/react-query';
import { getUserData as getUserDataApi } from '../../services/apiAuth';

export function useUserData() {
	const { data, isPending, refetch } = useQuery({
		queryFn: getUserDataApi,
		queryKey: ['user'],
	});

	const userAuthenticated = data !== null;

	return { data, isPending, userAuthenticated, refetch };
}
