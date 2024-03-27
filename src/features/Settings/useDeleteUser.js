import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { deleteUser } from '../../services/apiAuth';
import { useLogout } from '../Auth/useLogout';

export function useDeleteUser() {
	const { logout } = useLogout();
	const { mutate: deleteAccount, isPending:isAccountDeleting } = useMutation({
		mutationFn: deleteUser,
		onSuccess: () => {
			toast.success('Konto zostało usunięte.');
			logout();
		},
		onError: (err) => {
			toast.error(err.message);
		},
	});

	return { deleteAccount, isAccountDeleting };
}
