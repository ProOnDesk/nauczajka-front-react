import { registerUser as registerUserApi } from '../../services/apiAuth';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

export function useRegisterUser() {
	const navigate = useNavigate();
	const { mutate: registerUser, isPending: isRegisterPending } = useMutation({
		mutationFn: (variables) => {
			return registerUserApi(variables);
		},
		onSuccess: () => {
			toast.success('E-mail weryfikacyjny został wysłany.');
			navigate('/login');
		},
		onError: (err) => {
			const error = JSON.parse(err.message);
			toast.error(error.email[0]);
		},
	});
	return { registerUser, isRegisterPending };
}
