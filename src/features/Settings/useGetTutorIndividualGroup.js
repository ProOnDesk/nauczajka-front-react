import { useQuery } from '@tanstack/react-query';
import { getTutorIndividualGroup as getTutorIndividualGroupApi } from '../../services/apiTutorsInfo';

export function useGetTutorIndividualGroup() {
	const {
		data: tutorIndividualGroup,
		isPending: isTutorIndividualGroupPending,
		refetch: refetchTutorIndividualGroup,
	} = useQuery({
		queryFn: getTutorIndividualGroupApi,
		queryKey: ['tutor_idividual_group'],
	});

	return {
		tutorIndividualGroup,
		isTutorIndividualGroupPending,
		refetchTutorIndividualGroup,
	};
}
