import EditFormBtn from './EditFormBtn';
import { useEffect, useState } from 'react';
import DateShow from '../../ui/DateShow';
import { useForm } from 'react-hook-form';
import { useAddShedule } from './useAddShedule';
import HoursInterval from '../../ui/HoursInterval';
import { useDeleteShedule } from './useDeleteShedule';

function TutorDateSettings({
	setChoosenDate,
	choosenDate,
	tutorShedule,
	refetchShedule,
	readOnly,
}) {
	const { addShedule, addingSheduleSuccess } = useAddShedule();

	const { deleteShedule, isSheduleDeleted } = useDeleteShedule();
	const { register, handleSubmit } = useForm();
	const [startTime, setStartTime] = useState('08:00');
	const [endTime, setEndTime] = useState('09:00');
	const currShedule = tutorShedule?.filter((curr) => {
		const today = new Date(choosenDate);
		const start = new Date(curr.start_time);
		return (
			today.getFullYear() === start.getFullYear() &&
			today.getMonth() === start.getMonth() &&
			today.getDate() === start.getDate()
		);
	});
	currShedule?.sort((a, b) => new Date(a.start_time) - new Date(b.start_time));

	function setStartTimeHandler(time) {
		if (time > endTime) return;
		setStartTime(time);
	}

	function setEndTimeHandler(time) {
		if (time < startTime) return;
		setEndTime(time);
	}

	const onSubmit = (data) => {
		const [startHour, startMinute] = data.startTime.split(':');
		const [endtHour, endMinute] = data.endTime.split(':');
		const startDate = new Date(choosenDate);
		startDate.setHours(startHour);
		startDate.setMinutes(startMinute);
		const endDate = new Date(choosenDate);
		endDate.setHours(endtHour);
		endDate.setMinutes(endMinute);
		addShedule({ startTime: startDate, endTime: endDate });
	};

	useEffect(() => {
		if (addingSheduleSuccess === true) refetchShedule();
	}, [addingSheduleSuccess, refetchShedule]);
	useEffect(() => {
		if (isSheduleDeleted === true) refetchShedule();
	}, [isSheduleDeleted, refetchShedule]);

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex justify-center flex-col w-full'
		>
			<div className='flex flex-col items-center justify-around gap-8 '>
				<DateShow date={choosenDate} />
				{!readOnly && (
					<div className='flex flex-col gap-2 mb-6'>
						<label className='flex items-center justify-between gap-2'>
							Czas rozpoczęcia
							<input
								{...register('startTime')}
								type='time'
								value={startTime}
								onChange={(e) => setStartTimeHandler(e.target.value)}
							/>
						</label>
						<label className='flex items-center justify-between gap-2'>
							Czas zakończenia
							<input
								{...register('endTime')}
								type='time'
								value={endTime}
								onChange={(e) => setEndTimeHandler(e.target.value)}
							/>
						</label>
					</div>
				)}
			</div>

			<div className='mt-6 flex flex-row flex-wrap-reverse gap-5 justify-center w-full'>
				<EditFormBtn onClick={() => setChoosenDate(null)} type={'button'}>
					Anuluj
				</EditFormBtn>
				{!readOnly && <EditFormBtn type={'submit'}>Zatwierdź</EditFormBtn>}
			</div>

			<div className='mt-8'>
				<p className='text-center'>
					{currShedule?.length > 0
						? 'Ustalone terminy'
						: 'Brak ustalonych terminów.'}
				</p>
				<div className='flex flex-wrap justify-center gap-2 mx-auto mt-2'>
					{currShedule?.map((item, index) => {
						const start = new Date(item.start_time);
						const end = new Date(item.end_time);
						const formatTime = (time) => String(time).padStart(2, '0');

						return (
							<HoursInterval
								readOnly={readOnly}
								onClick={() => deleteShedule(item.id)}
								key={index}
								start={`${formatTime(start.getHours())}:${formatTime(
									start.getMinutes()
								)}`}
								end={`${formatTime(end.getHours())}:${formatTime(
									end.getMinutes()
								)}`}
							/>
						);
					})}
				</div>
			</div>
		</form>
	);
}

export default TutorDateSettings;
