import { useQuery } from '@tanstack/react-query';
import { getTutorSessionMethod as getTutorSessionMethodApi } from '../../services/apiTutorsInfo';

export function useGetTutorSessionMethod() {
	const {
		data: tutorSessionMethod,
		isPending: isTutorSessionMethodPending,
		refetch: refetchTutorSessionMethod,
	} = useQuery({
		queryFn: getTutorSessionMethodApi,
		queryKey: ['tutor_session_method'],
	});

	return {
		tutorSessionMethod,
		isTutorSessionMethodPending,
		refetchTutorSessionMethod,
	};
}
