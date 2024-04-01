import { addShedule as addSheduleApi } from '../../services/apiAuth';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export function useAddShedule() {
	const {
		mutate: addShedule,
		isPending: isAddingShedulePending,
		isSuccess: addingSheduleSuccess,
	} = useMutation({
		mutationFn: addSheduleApi,
		onSuccess: () => {
			toast.success('Dodano termin.');
		},
		onError: (err) => {
			const error = JSON.parse(err.message);
			toast.error(error.email[0]);
		},
	});
	return { addShedule, isAddingShedulePending, addingSheduleSuccess };
}
