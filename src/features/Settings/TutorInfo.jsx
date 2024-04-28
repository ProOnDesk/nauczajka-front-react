import { useState } from 'react';
import SettingsElement from './SettingsElement';
import { useGetDescription } from './useGetDescription';
import Modal from '../../ui/Modal';
import EditFormTutor from './EditFormTutor';
import SkillsContainer from './SkillsContainer';
import { CiBullhorn, CiCalendar, CiCircleInfo, CiMedal } from 'react-icons/ci';
import TutorInfoHeader from './TutorInfoHeader';
import CalendarContainer from './CalendarContainer';
import { useShowShedule } from './useShowShedule';
import InfoContainer from './InfoContainer';
import { useGetTutorPrice } from './useGetTutorPrice';

function TutorInfo() {
	const { data } = useGetDescription();
	const { tutorShedule, refetchShedule } = useShowShedule();
	const [showModal, setShowModal] = useState(null);
	function handleModal(type) {
		setShowModal(type);
	}
	return (
		<div className='px-2 md:py-0 sm400:w-4/5 md:w-full md:px-5 mx-auto py-4'>
			<div className='mb-10'>
				<TutorInfoHeader icon={<CiCircleInfo />} label={'Opis'} />
				<SettingsElement onClick={() => handleModal('description')}>
					{data?.description ? data?.description : 'Brak'}
				</SettingsElement>
			</div>
			<div className='mb-10'>
				<TutorInfoHeader icon={<CiMedal />} label={'Umiejętności'} />
				<SkillsContainer />
			</div>
			<div className='mb-10'>
				<TutorInfoHeader icon={<CiBullhorn />} label={'Informacje'} />
				<InfoContainer />
			</div>
			<div>
				<TutorInfoHeader icon={<CiCalendar />} label={'Wolne terminy'} />
				<CalendarContainer
					refetchShedule={refetchShedule}
					tutorShedule={tutorShedule}
				/>
			</div>

			{showModal && (
				<Modal>
					<EditFormTutor
						showModal={showModal}
						setShowModal={setShowModal}
						description={data?.description}
					/>
				</Modal>
			)}
		</div>
	);
}

export default TutorInfo;
