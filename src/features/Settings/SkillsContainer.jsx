import { GoPlus } from 'react-icons/go';
import SkillElement from './SkillElement';
import Modal from '../../ui/Modal';
import { useState } from 'react';
import AddSkillsContainer from './AddSkillsContainer';
import { useTutorSkills } from './useTuttorSkills';

function SkillsContainer() {
	const [modalVisible, setModalVisible] = useState(false);
	const { tutorSkills, refetchTutorSkills } = useTutorSkills();

	return (
		<div className='flex flex-row flex-wrap gap-2 mt-6'>
			{tutorSkills?.skills?.map((skill) => (
				<SkillElement key={skill} skill={skill} tutorSkills={tutorSkills.skills} refetchTutorSkills={refetchTutorSkills}/>
			))}
			{modalVisible && (
				<Modal>
					<AddSkillsContainer
						tutorSkills={tutorSkills?.skills}
						setModalVisible={setModalVisible}
						refetchTutorSkills={refetchTutorSkills}
					/>
				</Modal>
			)}
			<button
				onClick={() => setModalVisible(true)}
				className='bg-white p-2 shadow-sm shadow-black/25 rounded-md flex justify-center items-center hover:bg-whiteHover hover:cursor-pointer'
			>
				<span className='text-2xl'>
					<GoPlus />
				</span>
			</button>
		</div>
	);
}

export default SkillsContainer;
