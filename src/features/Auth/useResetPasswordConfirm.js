import { resetPasswordConfrim as resetPasswordConfrimApi } from '../../services/apiAuth';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

export function useResetPasswordConfirm() {
	const navigate = useNavigate();
	const {
		mutate: resetPasswordConfirm,
		isPending: isResetPasswordConfirmPending,
		isSuccess: isResetPasswordConfirmed,
	} = useMutation({
		mutationFn: (variables) => {
			return resetPasswordConfrimApi(variables);
		},
		onSuccess: () => {
			toast.success('Hasło zostało zmienione');
			navigate('/login');
		},
		onError: (err) => {
			const error = JSON.parse(err.message);
			toast.error(error.password.at(0));
		},
	});
	return {
		resetPasswordConfirm,
		isResetPasswordConfirmPending,
		isResetPasswordConfirmed,
	};
}
