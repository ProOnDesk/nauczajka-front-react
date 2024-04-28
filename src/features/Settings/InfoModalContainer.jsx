import { useForm } from 'react-hook-form';
import Loader from '../../ui/Loader';
import EditFormBtn from './EditFormBtn';
import TextInput from '../Auth/TextInput';
import { useSetTutorPrice } from './useSetTutorPrice';
import { useEffect } from 'react';
import { useSetTutorLocation } from './useSetTutorLocation';

function InfoModalContainer({
	setModal,
	modal,
	tutorCurrentPrice,
	tutorCurrentLocation,
}) {
	const { setTutorPrice, isTutorPriceSetSuccess, isTutorPriceSetPending } =
		useSetTutorPrice();
	const {
		setTutorLocation,
		isTutorLocationSetSuccess,
		isTutorLocationSetPending,
	} = useSetTutorLocation();
	const isLoading = isTutorPriceSetPending || isTutorLocationSetPending;

	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm();

	const onSubmit = (data) => {
		if (modal === 'price') {
			setTutorPrice({ price: data.price });
		}
		if (modal === 'location') {
			setTutorLocation({ tutorLocation: data.location });
		}
	};

	useEffect(() => {
		if (isTutorPriceSetSuccess || isTutorLocationSetSuccess) {
			setModal(null);
		}
	}, [isTutorPriceSetSuccess, isTutorLocationSetSuccess, setModal]);

	return (
		<>
			{!isLoading ? (
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col items-center gap-5'
				>
					<div className='md:w-4/5 w-full flex flex-col gap-5'>
						{modal === 'price' && (
							<TextInput
								register={register}
								error={errors?.price?.message}
								label={'Cena'}
								field={'price'}
								type={'number'}
								validateFunction={() => {
									if (getValues().price < 0) return 'Wprowadź Dodatnią Wartość';
									else return true;
								}}
								initialValue={tutorCurrentPrice}
							/>
						)}
						{modal === 'location' && (
							<TextInput
								register={register}
								error={errors?.location?.message}
								label={'Lokalizacja'}
								field={'location'}
								type={'text'}
								initialValue={tutorCurrentLocation}
							/>
						)}
					</div>

					<div className='mt-6 flex flex-row flex-wrap-reverse gap-5 justify-center w-full'>
						<EditFormBtn type={'button'} onClick={() => setModal(null)}>
							Anuluj
						</EditFormBtn>
						<EditFormBtn type={'submit'}>
							{modal === 'price' ? 'Zmień cenę' : 'Zmień'}
						</EditFormBtn>
					</div>
				</form>
			) : (
				<Loader />
			)}
		</>
	);
}

export default InfoModalContainer;
