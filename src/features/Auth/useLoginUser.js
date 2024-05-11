import { useMutation } from '@tanstack/react-query';
import { loginUser as loginUserApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router';
import { useUserData } from './useUserData';

export function useLoginUser() {
	const navigate = useNavigate();
	const cookies = new Cookies();
	const { refetch } = useUserData();
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
				secure: true,
				sameSite: 'strict',
			});
			sessionStorage.setItem('auth_token', data.access);
			refetch();
			setTimeout(() => {
				navigate('/instructors');
			}, 300);
		},
		onError: (err) => {
			const error = JSON.parse(err.message);
			toast.error(error.detail);
		},
	});
	return { loginUser, isLoginPending };
}
