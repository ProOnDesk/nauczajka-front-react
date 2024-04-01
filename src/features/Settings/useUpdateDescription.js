import { useMutation } from '@tanstack/react-query';
import { updateDescription as updateDescriptionApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';
import { useGetDescription } from './useGetDescription';

export function useUpdateDescription() {
	const { refetch } = useGetDescription();
	const {
		mutate: updateDescription,
		isPending: isUpdateDescriptionPending,
		isSuccess: isDescriptionUpdated,
	} = useMutation({
		mutationFn: updateDescriptionApi,
		onSuccess: () => {
			toast.success('Zaktualizowano Opis');
			refetch();
		},
		onError: (err) => {
			const error = JSON.parse(err.message);
			console.log(err);
			toast.error('' + Object?.values(error)[0]);
		},
	});

	return {
		updateDescription,
		isUpdateDescriptionPending,
		isDescriptionUpdated,
	};
}
