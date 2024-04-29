import { useMutation } from '@tanstack/react-query';
import { setTutorPrice as setTutorPriceApi } from '../../services/apiTutorsInfo';
import { useGetTutorPrice } from './useGetTutorPrice';
import toast from 'react-hot-toast';

export function useSetTutorPrice() {
	const { refetchTutorPrice } = useGetTutorPrice();
	const {
		mutate: setTutorPrice,
		isPending: isTutorPriceSetPending,
		isSuccess: isTutorPriceSetSuccess,
	} = useMutation({
		mutationFn: setTutorPriceApi,
		onSuccess: () => {
			toast.success('Zaktualizowano cenę.');
			refetchTutorPrice();
		},
		onError: (err) => {
			const error = JSON.parse(err.message);
			console.log(error);
		},
	});

	return { setTutorPrice, isTutorPriceSetPending, isTutorPriceSetSuccess };
}
