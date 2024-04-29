import { useQuery } from '@tanstack/react-query';
import { getTutorLocation as getTutorLocationApi } from '../../services/apiTutorsInfo';

export function useGetTutorLocation() {
	const {
		data: tutorLocation,
		isPending: isTutorLocationPending,
		refetch: refetchTutorLocation,
	} = useQuery({
		queryFn: getTutorLocationApi,
		queryKey: ['tutor_location'],
	});

	return { tutorLocation, isTutorLocationPending, refetchTutorLocation };
}
