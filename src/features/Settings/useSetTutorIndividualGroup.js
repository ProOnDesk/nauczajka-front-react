import { useMutation } from '@tanstack/react-query';
import { setTutorIndividualGroup as setTutorIndividualGroupApi } from '../../services/apiTutorsInfo';
import toast from 'react-hot-toast';
import { useGetTutorIndividualGroup } from './useGetTutorIndividualGroup';

export function useSetTutorIndividualGroup() {
	const { refetchTutorIndividualGroup } = useGetTutorIndividualGroup();
	const {
		mutate: setTutorIndividualGroup,
		isPending: isTutorIndividualGroupSetPending,
		isSuccess: isTutorIndividualGroupSetSuccess,
	} = useMutation({
		mutationFn: setTutorIndividualGroupApi,
		onSuccess: () => {
			toast.success('Zaktualizowano sposób prowadzenia zajęć.');
			refetchTutorIndividualGroup();
		},
		onError: (err) => {
			const error = JSON.parse(err.message);
			console.log(error);
		},
	});

	return {
		setTutorIndividualGroup,
		isTutorIndividualGroupSetPending,
		isTutorIndividualGroupSetSuccess,
	};
}
