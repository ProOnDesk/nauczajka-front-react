import { useMutation } from '@tanstack/react-query';
import { updateAvatar as updateAvatarApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';
import { useUserData } from '../Auth/useUserData';

export function useUpdateAvatar() {
	const { refetch } = useUserData();
	const {
		mutate: updateAvatar,
		isPending: isUpdatePending,
		data,
		isSuccess: isAvatarUpdated,
	} = useMutation({
		mutationFn: updateAvatarApi,
		onSuccess: () => {
			toast.success('Zaktualizowano zdjęcie');
			refetch();
		},
		onError: (err) => {
			const error = JSON.parse(err.message);
			toast.error('' + Object?.values(error)[0]);
		},
	});

	return { data, updateAvatar, isUpdatePending, isAvatarUpdated };
}
