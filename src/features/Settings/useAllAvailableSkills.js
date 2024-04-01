import { useQuery } from '@tanstack/react-query';
import { getAllAvailableSkills as getAllAvailableSkillsApi } from '../../services/apiAuth';

export function useAllAvailableSkills() {
	const {
		data: availableSkills,
		isPending: isAvailableSkillsPending,
		refetch: refetchAvailableSkills,
	} = useQuery({
		queryFn: getAllAvailableSkillsApi,
		queryKey: ['avaiableSkills'],
	});
	return { availableSkills, isAvailableSkillsPending, refetchAvailableSkills };
}
