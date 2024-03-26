import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

export function useCheckToken() {
	const [isExpired, setIsExporired] = useState();
	const queryClient = useQueryClient();

	useEffect(() => {
		function checkIsExpired() {
			const cookies = new Cookies();
			const jwt_auth = queryClient.getQueryData(['jwt_auth']);

			const jwt_refresh = cookies.get('jwt_refresh');
			if (!jwt_refresh) {
				console.log('Sesja wygasła');
			}
			if (!jwt_auth) {
				console.log(jwt_auth?.exp);
				setIsExporired(true);
			}
		}
		checkIsExpired();
	}, [queryClient]);

	return { isExpired };
}
