import toast from 'react-hot-toast';
import EditFormBtn from '../Settings/EditFormBtn';
import { useForm } from 'react-hook-form';
import Checkbox from '../../ui/Inputs/Checkbox';

function SessionMethods({ setModalVisible, filters, setFilters }) {
	const { register, handleSubmit } = useForm();

	function onSubmit(data) {
		setFilters((prevFilters) => ({
			...prevFilters,
			individualSession: data.Indywidualnie === true ? true : '',
			groupSession: data.Grupowo === true ? true : '',
			personSession: data.Stacjonarnie === true ? true : '',
			onlineSession: data.Online === true ? true : '',
		}));

		toast.success('Ustawiono filtr metodyki nauczania.');
		setModalVisible(null);
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex justify-center flex-col gap-10'
		>
			<p className='text-2xl text-center'>Wybierz Metodykę Nauczania</p>
			<div className='flex flex-wrap justify-center gap-2 md:mx-10'>
				<Checkbox
					label={'Indywidualnie'}
					defaultChecked={filters.individualSession}
					register={register}
				/>
				<Checkbox
					label={'Grupowo'}
					defaultChecked={filters.groupSession}
					register={register}
				/>
				<Checkbox
					label={'Stacjonarnie'}
					defaultChecked={filters.personSession}
					register={register}
				/>
				<Checkbox
					label={'Online'}
					defaultChecked={filters.onlineSession}
					register={register}
				/>
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

export default SessionMethods;
