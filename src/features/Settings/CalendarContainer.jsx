import { Badge, Tooltip } from '@mui/material';
import {
	DayCalendarSkeleton,
	LocalizationProvider,
	PickersDay,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useState } from 'react';
import Modal from '../../ui/Modal';
import TutorDateSettings from './TutorDateSettings';

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
	const [highlightedDays, setHighlightedDays] = useState();
	const [choosenDate, setChoosenDate] = useState(null);

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<div className='w-full'>
				<DateCalendar
					// defaultValue={initialValue}
					// loading={isLoading}

					// onMonthChange={handleMonthChange}
					onChange={(newDate) => {
						setChoosenDate(newDate.$d);
					}}
					renderLoading={() => <DayCalendarSkeleton />}
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
