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
import { useShowShedule } from './useShowShedule';

const ServerDay = (props) => {
	const {
		highlightedDays = [new Date().getDate()],
		day,
		outsideCurrentMonth,

		...other
	} = props;

	const isSelected =
		!props.outsideCurrentMonth &&
		highlightedDays?.indexOf(props.day.date()) >= 0;
	return (
		<Tooltip
			title={`${isSelected ? 'TU SIE WYSWIETLA INFO' : ''}`}
			placement='top'
		>
			<div>
				<Badge
					onSelect={() => console.log('pawle')}
					key={props.day.toString()}
					overlap='circular'
					badgeContent={isSelected ? '🎯' : undefined}
				>
					<PickersDay
						{...other}
						outsideCurrentMonth={outsideCurrentMonth}
						day={day}
					/>
				</Badge>
			</div>
		</Tooltip>
	);
};

function CalendarContainer() {
	const { tutorShedule } = useShowShedule();
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
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<div>
				<DateCalendar
					sx={{ width: '100%' }}
					onMonthChange={(newDate) => setMonth(new Date(newDate.$d).getMonth())}
					onChange={(newDate) => {
						setChoosenDate(newDate.$d);
					}}
					renderLoading={() => <DayCalendarSkeleton sx={{ width: 500 }} />}
					slots={{
						day: ServerDay,
					}}
					slotProps={{
						day: {
							highlightedDays,
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
						/>
					</Modal>
				)}
			</div>
		</LocalizationProvider>
	);
}

export default CalendarContainer;
