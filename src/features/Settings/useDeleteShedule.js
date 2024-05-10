import { useMutation } from '@tanstack/react-query';
import { deleteShedule as deleteSheduleApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useDeleteShedule() {
	const {
		mutate: deleteShedule,
		isPending: isDeletingShedule,
		isSuccess: isSheduleDeleted,
	} = useMutation({
		mutationFn: deleteSheduleApi,
		onSuccess: () => {
			toast.success('Usunięto termin.');
		},
		onError: (err) => {
			const error = JSON.parse(err.message);
			toast.error('' + Object?.values(error)[0]);
		},
	});

	return { deleteShedule, isDeletingShedule, isSheduleDeleted };
}
