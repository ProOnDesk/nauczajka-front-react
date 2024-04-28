import { useForm } from 'react-hook-form';
import Loader from '../../ui/Loader';
import EditFormBtn from './EditFormBtn';
import TextInput from '../Auth/TextInput';
import { useSetTutorPrice } from './useSetTutorPrice';
import { useEffect } from 'react';

function InfoModalContainer({ setModal, modal, tutorCurrentPrice }) {
	const isLoading = true;
	const { setTutorPrice, isTutorPriceSetSuccess } = useSetTutorPrice();
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
			console.log(data);
		}
	};

	useEffect(() => {
		if (isTutorPriceSetSuccess) {
			setModal(null);
		}
	}, [isTutorPriceSetSuccess, setModal]);

	return (
		<>
			{isLoading ? (
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
