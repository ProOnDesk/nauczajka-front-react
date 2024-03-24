import { useMutation } from '@tanstack/react-query';
import { loginUser as loginUserApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useLoginUser() {
	const { mutate: loginUser, isPending: isLoginPending } = useMutation({
		mutationFn: (variables) => {
			return loginUserApi(variables);
		},
		onSuccess: (data) => {
			toast.success('Zalogowano.');
			console.log(data);
			// navigate('/login');
		},
		onError: (err) => {
			const error = JSON.parse(err.message);
			toast.error(error.detail);
		},
	});
	return { loginUser, isLoginPending };
}
