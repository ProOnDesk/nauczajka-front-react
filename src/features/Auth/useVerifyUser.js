import { useMutation } from '@tanstack/react-query';
import { verifyUser as verifyUserApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useVerifyUser() {
	const navigate = useNavigate();
	const { mutate: verifyUser, isPending } = useMutation({
		mutationFn: (variables) => {
			return verifyUserApi(variables);
		},
		onSuccess: () => {
			navigate('/login');
			toast.success('E-mail został zweryfikowany.');
		},
		onError: (err) => {
			const error = JSON.parse(err.message);
			toast.error(error?.Error);
		},
	});

	return { verifyUser, isPending };
}
