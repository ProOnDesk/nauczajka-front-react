import { useMutation } from '@tanstack/react-query';
import { getTutorInfo as getTutorInfoApi } from '../../services/apiTutorsInfo';
import toast from 'react-hot-toast';

export function useTutorInfo() {
	const {
		data: tutorInfo,
		mutate: getTutorInfo,
		isPending: isTutorInfoPending,
		isSuccess: isTutorInfoSuccess,
	} = useMutation({
		mutationFn: getTutorInfoApi,
		onError: (err) => {
			const error = JSON.parse(err.message);
			toast.error(error.email[0]);
		},
	});
	return { tutorInfo, getTutorInfo, isTutorInfoPending, isTutorInfoSuccess };
}
