import { useState } from 'react';
import SettingsElement from './SettingsElement';
import { useGetDescription } from './useGetDescription';
import Modal from '../../ui/Modal';
import EditFormTutor from './EditFormTutor';
import SkillsContainer from './SkillsContainer';

function TutorInfo() {
	const { data } = useGetDescription();
	const [showModal, setShowModal] = useState(null);
	function handleModal(type) {
		setShowModal(type);
	}
	return (
		<div className='px-2 md:py-0 sm400:w-4/5 md:w-full md:px-5 mx-auto py-4'>
			<SettingsElement
				label={'Opis'}
				onClick={() => handleModal('description')}
			>
				{data?.description ? data?.description : 'Brak'}
			</SettingsElement>
			<SkillsContainer />

			{showModal && (
				<Modal>
					<EditFormTutor showModal={showModal} setShowModal={setShowModal} />
				</Modal>
			)}
		</div>
	);
}

export default TutorInfo;
