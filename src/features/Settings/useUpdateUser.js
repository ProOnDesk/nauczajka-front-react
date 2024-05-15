import { useMutation } from '@tanstack/react-query';
import { updateUser as updateUserApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useUpdateUser() {
	const {
		mutate: updateUser,
		isPending: isUpdatePending,
		isSuccess: isUserUpdated,
	} = useMutation({
		mutationFn: (variables) => {
			return updateUserApi(variables);
		},
		onSuccess: () => {
			toast.success('Zaktualizowano Dane');
		},
		onError: (err) => {
			const error = JSON.parse(err.message);
			toast.error('' + Object?.values(error)[0]);
		},
	});

	return { isUserUpdated, updateUser, isUpdatePending };
}
