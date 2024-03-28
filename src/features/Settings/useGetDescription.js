import { useQuery } from '@tanstack/react-query';
import { getDescription as getDescriptionApi } from '../../services/apiAuth';

export function useGetDescription() {
	const { data, isPending, refetch } = useQuery({
		queryFn: getDescriptionApi,
		queryKey: ['user_description'],
	});

	return { data, isPending, refetch };
}
