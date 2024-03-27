import { useNavigate } from 'react-router';
import Cookies from 'universal-cookie';
import { useUserData } from './useUserData';

export function useLogout() {
	const cookies = new Cookies();
	const navigate = useNavigate();
	const { refetch } = useUserData();
	function logout() {
		sessionStorage.removeItem('auth_token');
		cookies.remove('jwt_refresh');
		setTimeout(() => {
			refetch();
		}, 50);
		navigate('/');
	}

	return { logout };
}
