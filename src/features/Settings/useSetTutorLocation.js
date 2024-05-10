import { useMutation } from '@tanstack/react-query';
import { setTutorLocation as setTutorLocationApi } from '../../services/apiTutorsInfo';

import toast from 'react-hot-toast';
import { useGetTutorLocation } from './useGetTutorLocation';

export function useSetTutorLocation() {
	const { refetchTutorLocation } = useGetTutorLocation();
	const {
		mutate: setTutorLocation,
		isPending: isTutorLocationSetPending,
		isSuccess: isTutorLocationSetSuccess,
	} = useMutation({
		mutationFn: setTutorLocationApi,
		onSuccess: () => {
			toast.success('Zaktualizowano lokalizację.');
			refetchTutorLocation();
		},
		onError: (err) => {
			const error = JSON.parse(err.message);
			toast.error('' + Object?.values(error)[0]);
		},
	});

	return {
		setTutorLocation,
		isTutorLocationSetPending,
		isTutorLocationSetSuccess,
	};
}
