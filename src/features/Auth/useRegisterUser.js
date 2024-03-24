// import { useNavigate } from 'react-router';
import { registerUser as registerUserApi } from '../../services/apiAuth';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export function useRegisterUser() {
	// const navigate = useNavigate();
	const { mutate: registerUser, isPending: isRegisterPending } = useMutation({
		mutationFn: (variables) => {
			console.log(variables);
			return registerUserApi(variables);
		},
		onSuccess: (data) => {
			// navigate('/login');
			console.log('gicik');
			toast.success('E-mail weryfikacyjny został wysłany.');
		},
		onError: (err) => {
			console.log('nie gicik');
			const error = JSON.parse(err.message);
			console.log(error);
		},
		onSettled: () => {
			console.log('settled');
		},
	});
	return { registerUser, isRegisterPending };
}
