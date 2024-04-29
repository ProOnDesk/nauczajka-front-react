import { useQuery } from '@tanstack/react-query';
import { getTutorPrice as getTutorPriceApi } from '../../services/apiTutorsInfo';

export function useGetTutorPrice() {
	const {
		data: tutorPrice,
		isPending: isTutorPricePending,
		refetch: refetchTutorPrice,
	} = useQuery({
		queryFn: getTutorPriceApi,
		queryKey: ['tutor_price_per_hour'],
	});

	return { tutorPrice, isTutorPricePending, refetchTutorPrice };
}
