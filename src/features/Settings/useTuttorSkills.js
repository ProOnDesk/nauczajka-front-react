import { useQuery } from '@tanstack/react-query';
import { getTutorSkills as getTutorSkillsApi } from '../../services/apiAuth';

export function useTutorSkills() {
	const {
		data: tutorSkills,
		isPending: isTutorSkillsPending,
		refetch: refetchTutorSkills,
	} = useQuery({
		queryFn: getTutorSkillsApi,
		queryKey: ['tutorSkills'],
	});
	return { tutorSkills, isTutorSkillsPending, refetchTutorSkills };
}
