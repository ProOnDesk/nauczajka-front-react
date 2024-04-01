import { useQuery } from '@tanstack/react-query';
import { showShedules as showShedulesApi } from '../../services/apiAuth';

export function useShowShedule() {
	const {
		data: tutorShedule,
		isPending: isTutorShedulePending,
		refetch: refetchShedule,
	} = useQuery({
		queryFn: showShedulesApi,
		queryKey: ['tutorShedule'],
	});

	return { tutorShedule, isTutorShedulePending, refetchShedule };
}
