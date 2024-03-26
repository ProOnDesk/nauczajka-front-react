import { useMutation } from '@tanstack/react-query';
import { resetPassword as resetPasswordApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useResetPassword() {
	const {
		mutate: resetPassword,
		isPending: isResetPasswordPending,
		isSuccess: isResetPasswordEmailSent,
	} = useMutation({
		mutationFn: (variables) => {
			return resetPasswordApi(variables);
		},
		onSuccess: () => {
			toast.success('E-mail do zmiany hasła został wysłany.');
		},
		onError: (err) => {
			const error = JSON.parse(err.message);
			toast.error(error.email[0]);
			// toast.error('Nie udało się wysłać e-maila weryfikacyjnego.');
		},
	});
	return { resetPassword, isResetPasswordPending, isResetPasswordEmailSent };
}
