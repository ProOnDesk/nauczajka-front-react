import { useMutation } from '@tanstack/react-query';
import { setTutorSessionMethod as setTutorSessionMethodApi } from '../../services/apiTutorsInfo';
import toast from 'react-hot-toast';
import { useGetTutorSessionMethod } from './useGetTutorSessionMethod';

export function useSetTutorSessionMethod() {
	const { refetchTutorSessionMethod } = useGetTutorSessionMethod();
	const {
		mutate: setTutorSessionMethod,
		isPending: isTutorSessionMethodSetPending,
		isSuccess: isTutorSessionMethodSetSuccess,
	} = useMutation({
		mutationFn: setTutorSessionMethodApi,
		onSuccess: () => {
			toast.success('Zaktualizowano sposób prowadzenia zajęć.');
			refetchTutorSessionMethod();
		},
		onError: (err) => {
			const error = JSON.parse(err.message);
			console.log(error);
		},
	});

	return {
		setTutorSessionMethod,
		isTutorSessionMethodSetPending,
		isTutorSessionMethodSetSuccess,
	};
}
