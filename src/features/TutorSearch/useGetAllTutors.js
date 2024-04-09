import { useMutation } from '@tanstack/react-query';
import { getAllTutors as getAllTutorsApi } from '../../services/apiTutorsInfo';
import toast from 'react-hot-toast';

export function useGetAllTutors() {
	const {
		data: allTutors,
		mutate: showTutors,
		isPending: isShowingTutors,
		isSuccess: isTutorsShowed,
	} = useMutation({
		mutationFn: getAllTutorsApi,
		onError: (err) => {
			const error = JSON.parse(err.message);
			toast.error(error.email[0]);
		},
	});

	return { allTutors, showTutors, isShowingTutors, isTutorsShowed };
}
