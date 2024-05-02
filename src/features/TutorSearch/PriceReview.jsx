import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import EditFormBtn from '../Settings/EditFormBtn';

function PriceReview({ setModalVisible, filters, setFilters }) {
	const { register, handleSubmit } = useForm();

	function onSubmit(data) {
		if (data.avgRatingGt !== '' && data.avgRatingLt !== '')
			if (data.avgRatingLt < data.avgRatingGt) {
				toast.error('Minimalna ocena musi być większa od maksymalnej.');
				return null;
			}
		if (data.priceLt !== '' && data.priceGt !== '')
			if (data.priceLt < data.priceGt) {
				toast.error('Minimalna cena musi być większa od maksymalnej.');
				return null;
			}

		setFilters((prevFilters) => ({
			...prevFilters,
			avgRatingGt: data.avgRatingGt !== '' ? data.avgRatingGt : '',
			avgRatingLt: data.avgRatingLt !== '' ? data.avgRatingLt : '',
			priceGt: data.priceGt !== '' ? data.priceGt : '',
			priceLt: data.priceLt !== '' ? data.priceLt : '',
		}));
		toast.success('Ustawiono filtr.');
		setModalVisible(null);
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex justify-center flex-col gap-10'
		>
			<div className='flex flex-col  justify-center gap-5  md:mx-10'>
				<p className='text-xl ml-2 sm:ml-6 md:ml-7 lg:ml-9'>Ocena</p>
				<div className='flex flex-row flex-wrap justify-center gap-5 mb-6'>
					<input
						min={1}
						max={5}
						type='number'
						placeholder='Ocena Od'
						className='w-full sm:w-5/12 p-2 border-2 border-whiteHover text-gray focus:outline-none focus:ring-0 rounded-xl focus:border-mainPurple'
						{...register('avgRatingGt')}
						defaultValue={filters.avgRatingGt}
					/>
					<input
						min={1}
						max={5}
						type='number'
						placeholder='Ocena Do'
						className='w-full sm:w-5/12 p-2 border-2 border-whiteHover text-gray focus:outline-none focus:ring-0 rounded-xl focus:border-mainPurple'
						{...register('avgRatingLt')}
						defaultValue={filters.avgRatingLt}
					/>
				</div>
				<p className='text-xl ml-2 sm:ml-6 md:ml-7 lg:ml-9'>Cena</p>
				<div className='flex flex-row flex-wrap justify-center gap-5 '>
					<input
						min={0}
						max={1000}
						type='number'
						placeholder='Cena Od'
						className='w-full sm:w-5/12 p-2 border-2 border-whiteHover text-gray focus:outline-none focus:ring-0 rounded-xl focus:border-mainPurple'
						{...register('priceGt')}
						defaultValue={filters.priceGt}
					/>
					<input
						min={0}
						max={1000}
						type='number'
						placeholder='Cena Do'
						className='w-full sm:w-5/12 p-2 border-2 border-whiteHover text-gray focus:outline-none focus:ring-0 rounded-xl focus:border-mainPurple'
						{...register('priceLt')}
						defaultValue={filters.priceLt}
					/>
				</div>
			</div>
			<div className='mt-6 flex flex-row flex-wrap-reverse gap-5 justify-center w-full'>
				<EditFormBtn onClick={() => setModalVisible(null)} type={'button'}>
					Anuluj
				</EditFormBtn>
				<EditFormBtn type={'submit'}>Zatwierdź</EditFormBtn>
			</div>
		</form>
	);
}

export default PriceReview;
