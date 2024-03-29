import SkillElement from './SkillElement';
import { useAllAvailableSkills } from './useAllAvailableSkills';

function AddSkillsContainer({ tutorSkills, setModalVisible }) {
	const { availableSkills } = useAllAvailableSkills();
	const skillsToAdd = availableSkills?.filter(
		(newSkill) => !tutorSkills?.includes(newSkill.skill)
	);

	return skillsToAdd?.map((skill) => (
		<SkillElement key={skill.skill} skill={skill.skill} />
	));
}

export default AddSkillsContainer;
