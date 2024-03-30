import AvailableSkillElement from './AvailableSkillElement';
import { useAllAvailableSkills } from './useAllAvailableSkills';
import EditFormBtn from './EditFormBtn';

function AddSkillsContainer({ tutorSkills, setModalVisible }) {
	const { availableSkills } = useAllAvailableSkills();
	const skillsToAdd = availableSkills?.filter(
		(newSkill) => !tutorSkills?.includes(newSkill.skill)
	);

	return (
		<div className='flex justify-center flex-col gap-10'>
			<p className='text-2xl text-center'>Dodaj swoje przedmioty</p>
			<div className='flex flex-wrap gap-2 md:mx-10'>
				{skillsToAdd?.map((skill) => (
					<AvailableSkillElement key={skill.skill} label={skill.skill} />
				))}
			</div>
			<div className='mt-6 flex flex-row flex-wrap-reverse gap-5 justify-center w-full'>
				<EditFormBtn onClick={() => setModalVisible(false)}>Anuluj</EditFormBtn>
				<EditFormBtn>Zatwierdź</EditFormBtn>
			</div>
		</div>
	);
}

export default AddSkillsContainer;
