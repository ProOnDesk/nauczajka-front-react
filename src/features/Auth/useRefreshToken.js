import { useMutation } from '@tanstack/react-query';
import { refreshToken as refreshTokenApi } from '../../services/apiAuth';
// import toast from 'react-hot-toast';
import Cookies from 'universal-cookie';
import toast from 'react-hot-toast';
import { useUserData } from './useUserData';
// import { jwtDecode } from 'jwt-decode';

// export function useRefreshToken() {
// 	const cookies = new Cookies();
// 	const jwt_refresh = cookies.get('jwt_refresh');
// 	const refetchInter = 1000 * 60 * 5;
// 	const { data, isSuccess, refetch, isRefetching } = useQuery({
// 		queryFn: () => refreshTokenApi(jwt_refresh),
// 		queryKey: ['jwt_auth'],
// 		refetchInterval: refetchInter,
// 	});
// 	return { data, isSuccess, refetch, isRefetching };
// }

export function useRefreshToken() {
	const cookies = new Cookies();
	const jwt_refresh = cookies.get('jwt_refresh');
	const { refetch } = useUserData();

	const { mutate: refreshToken, isPending: isRefreshPending } = useMutation({
		mutationFn: () => {
			return refreshTokenApi(jwt_refresh);
		},
		onSuccess: (data) => {
			sessionStorage.setItem('auth_token', data.access);
			refetch();
		},
		onError: (err) => {
			const error = JSON.parse(err.message);
			toast.error(error.email[0]);
		},
	});
	return { refreshToken, isRefreshPending };
}
