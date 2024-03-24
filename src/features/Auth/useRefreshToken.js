import { useMutation, useQueryClient } from '@tanstack/react-query';
import { refreshToken as refreshTokenApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';
import Cookies from 'universal-cookie';
import { jwtDecode } from 'jwt-decode';

export function useRefreshToken() {
	const cookies = new Cookies();
	const jwt_refresh = cookies.get('jwt_refresh');
	const queryClient = useQueryClient();
	const { mutate: refreshToken, isPending: isRefreshPending } = useMutation({
		mutationFn: () => {
			return refreshTokenApi(jwt_refresh);
		},
		onSuccess: (data) => {
			toast.success('Zaktualizowano token');
			const jwt_auth = data.access;
			const decodedAuthToken = jwtDecode(jwt_auth);
			queryClient.setQueryData(['jwt_auth'], {
				auth_token: jwt_auth,
				exp: decodedAuthToken.exp * 1000,
			});
		},
		onError: (err) => {
			const error = JSON.parse(err.message);
			toast.error(error.email[0]);
		},
	});
	return { refreshToken, isRefreshPending };
}
