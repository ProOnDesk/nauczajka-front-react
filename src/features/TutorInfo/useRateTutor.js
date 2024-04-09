import { useMutation } from '@tanstack/react-query';
import { rateTutor as rateTutorApi } from '../../services/apiTutorsInfo';
import toast from 'react-hot-toast';

export function useRateTutor() {
	const {
		mutate: rateTutor,
		isPending: isTutorRating,
		isSuccess: isTutorRated,
	} = useMutation({
		mutationFn: rateTutorApi,
		onSuccess: () => {
			toast.success('Dodano opinię.');
		},
		onError: (err) => {
			const error = JSON.parse(err.message);
			toast.error(error.email[0]);
		},
	});
	return { rateTutor, isTutorRated, isTutorRating };
}
