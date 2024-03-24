import { useMutation, useQueryClient } from '@tanstack/react-query';
import { loginUser as loginUserApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router';

export function useLoginUser() {
	const navigate = useNavigate();
	const cookies = new Cookies();
	const queryClient = useQueryClient();
	const { mutate: loginUser, isPending: isLoginPending } = useMutation({
		mutationFn: (variables) => {
			return loginUserApi(variables);
		},
		onSuccess: (data) => {
			toast.success('Zalogowano.');
			const jwt_refresh = data.refresh;
			const decodedRefreshToken = jwtDecode(jwt_refresh);
			cookies.set('jwt_refresh', jwt_refresh, {
				expires: new Date(decodedRefreshToken.exp * 1000),
			});
			const jwt_auth = data.access;
			const decodedAuthToken = jwtDecode(jwt_auth);
			queryClient.setQueryData(['jwt_auth'], {
				auth_token: jwt_auth,
				exp: decodedAuthToken.exp * 1000,
			});
			navigate('/instructors');
		},
		onError: (err) => {
			const error = JSON.parse(err.message);
			toast.error(error.detail);
		},
	});
	return { loginUser, isLoginPending };
}
