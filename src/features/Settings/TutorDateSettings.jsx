import EditFormBtn from './EditFormBtn';
import { useState } from 'react';
import DateShow from '../../ui/DateShow';
import { useForm } from 'react-hook-form';

function TutorDateSettings({ setChoosenDate, choosenDate }) {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const [startTime, setStartTime] = useState('08:00');
	const [endTime, setEndTime] = useState('09:00');
	const day = choosenDate.getDate();
	const month = choosenDate.getMonth() + 1;
	const year = choosenDate.getFullYear();

	function setStartTimeHandler(time) {
		if (time > endTime) return;
		setStartTime(time);
	}

	function setEndTimeHandler(time) {
		if (time < startTime) return;
		setEndTime(time);
	}

	const onSubmit = (data) => console.log(data);

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex justify-center flex-col w-full'
		>
			<div className='flex flex-col items-center justify-around gap-8 '>
				<DateShow date={choosenDate} />
				<div className='flex flex-col gap-2 mb-6'>
					<label className='flex items-center gap-2'>
						Czas rozpoczęcia:
						<input
							{...register('startTime')}
							type='time'
							value={startTime}
							onChange={(e) => setStartTimeHandler(e.target.value)}
						/>
					</label>
					<label className='flex items-center gap-2'>
						Czas zakończenia
						<input
							{...register('endTime')}
							type='time'
							value={endTime}
							onChange={(e) => setEndTimeHandler(e.target.value)}
						/>
					</label>
				</div>
			</div>
			<div className='mt-6 flex flex-row flex-wrap-reverse gap-5 justify-center w-full'>
				<EditFormBtn onClick={() => setChoosenDate(null)} type={'button'}>
					Anuluj
				</EditFormBtn>
				<EditFormBtn type={'submit'}>Zatwierdź</EditFormBtn>
			</div>
		</form>
	);
}

export default TutorDateSettings;
