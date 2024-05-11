import { Badge, Tooltip } from '@mui/material';
import {
	DayCalendarSkeleton,
	LocalizationProvider,
	PickersDay,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useEffect, useState } from 'react';
import Modal from '../../ui/Modal';
import TutorDateSettings from './TutorDateSettings';
import 'dayjs/locale/pl';
import pl from 'dayjs/locale/pl';

const formatTime = (time) => String(time).padStart(2, '0');

const ServerDay = (props) => {
	const [dayInfo, setDayInfo] = useState(
		<p className='p-1 text-[0.9rem]'>Brak terminów w tym dniu.</p>
	);
	const {
		highlightedDays = [],
		day,
		outsideCurrentMonth,
		tutorShedule,
		...other
	} = props;

	useEffect(() => {
		if (!tutorShedule) return;

		const currShedule = tutorShedule?.filter((curr) => {
			const today = new Date(day.$d);
			const start = new Date(curr.start_time);
			return (
				today.getFullYear() === start.getFullYear() &&
				today.getMonth() === start.getMonth() &&
				today.getDate() === start.getDate()
			);
		});
		currShedule?.sort(
			(a, b) => new Date(a.start_time) - new Date(b.start_time)
		);
		if (currShedule.length > 0) {
			setDayInfo(
				<div className='p-1 text-[0.9rem]'>
					{currShedule.map((el, id) => {
						const startHour = new Date(el.start_time).getHours();
						const startMinutes = new Date(el.start_time).getMinutes();
						const endHour = new Date(el.end_time).getHours();
						const endMinutes = new Date(el.end_time).getMinutes();
						return (
							<p key={id}>
								{formatTime(startHour)}:{formatTime(startMinutes)} -{' '}
								{formatTime(endHour)}:{formatTime(endMinutes)}
							</p>
						);
					})}
				</div>
			);
		}
	}, [tutorShedule, day.$d]);

	const isSelected =
		!props.outsideCurrentMonth &&
		highlightedDays?.indexOf(props.day.date()) >= 0;
	return (
		<Tooltip
			title={dayInfo}
			placement='top'
			className='opacity-100 w-full text-center'
		>
			<div>
				<Badge
					key={props.day.toString()}
					overlap='circular'
					badgeContent={isSelected ? '🎯' : undefined}
					className='hover:bg-whiteHover rounded-full focus:bg-orange-300 ring-0'
				>
					<PickersDay
						{...other}
						outsideCurrentMonth={outsideCurrentMonth}
						day={day}
						sx={{
							'&.Mui-selected': {
								'&:hover': {
									backgroundColor: '#6b56ee',
								},
								backgroundColor: '#7c67ff',
							},
							'&.MuiPickersDay-today': {
								border: '2px solid #7c67ff', // Kolor obramowania dla aktualnego dnia
							},
						}}
					/>
				</Badge>
			</div>
		</Tooltip>
	);
};

function CalendarContainer({ readOnly, tutorShedule, refetchShedule }) {
	const [highlightedDays, setHighlightedDays] = useState();
	const [choosenDate, setChoosenDate] = useState(null);
	const [month, setMonth] = useState(new Date().getMonth());

	useEffect(() => {
		if (!tutorShedule) return;

		const daysInThisMonth = tutorShedule.filter(
			(el) => new Date(el.start_time).getMonth() === month
		);

		const days = daysInThisMonth.map((day) =>
			new Date(day.start_time).getDate()
		);
		setHighlightedDays(days);
	}, [tutorShedule, month]);

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={pl}>
			<div>
				<DateCalendar
					sx={{
						width: '100%',
						'.MuiDayCalendar-header': {
							width: 'full',
							display: 'flex',
							justifyContent: 'space-around',
						},
						'.MuiTypography-root': {
							// color: '#7c67ff',
						},
					}}
					onMonthChange={(newDate) => setMonth(new Date(newDate.$d).getMonth())}
					onChange={(newDate) => {
						setChoosenDate(newDate.$d);
					}}
					renderLoading={() => <DayCalendarSkeleton className='w-full' />}
					slots={{
						day: ServerDay,
					}}
					slotProps={{
						day: {
							highlightedDays,
							tutorShedule,
						},
					}}
					disablePast={true}
					// readOnly={true}
				/>
				{choosenDate && (
					<Modal>
						<TutorDateSettings
							setChoosenDate={setChoosenDate}
							choosenDate={choosenDate}
							refetchShedule={refetchShedule}
							tutorShedule={tutorShedule}
							readOnly={readOnly}
						/>
					</Modal>
				)}
			</div>
		</LocalizationProvider>
	);
}

export default CalendarContainer;
