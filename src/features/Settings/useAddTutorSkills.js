import { addTutorSkills as addTutorSkillsApi } from '../../services/apiAuth';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export function useAddTutorSkills() {
	const {
		mutate: addSkills,
		isPending: isAddingSkillsPending,
		onSuccess: addingSkillsSuccess,
	} = useMutation({
		mutationFn: addTutorSkillsApi,
		onSuccess: () => {
			toast.success('Dodano przedmioty.');
		},
		onError: (err) => {
			const error = JSON.parse(err.message);
			toast.error(error.email[0]);
		},
	});
	return { addSkills, isAddingSkillsPending, addingSkillsSuccess };
}
