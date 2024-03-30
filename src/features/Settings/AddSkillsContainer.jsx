import AvailableSkillElement from './AvailableSkillElement';
import { useAllAvailableSkills } from './useAllAvailableSkills';
import EditFormBtn from './EditFormBtn';
import { useForm } from 'react-hook-form';

function AddSkillsContainer({ tutorSkills, setModalVisible }) {
	const { availableSkills } = useAllAvailableSkills();
	const skillsToAdd = availableSkills?.filter(
		(newSkill) => !tutorSkills?.includes(newSkill.skill)
	);

	const { register, handleSubmit } = useForm();

	function onSubmit(data) {
		const choosenSkills = [];
		for (const [key, value] of Object.entries(data)) {
			if (value === true) choosenSkills.push(key);
		}
		console.log(choosenSkills.concat(tutorSkills));
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex justify-center flex-col gap-10'
		>
			<p className='text-2xl text-center'>Dodaj swoje przedmioty</p>
			<div className='flex flex-wrap gap-2 md:mx-10'>
				{skillsToAdd?.map((skill) => (
					<AvailableSkillElement
						register={register}
						key={skill.skill}
						label={skill.skill}
					/>
				))}
			</div>
			<div className='mt-6 flex flex-row flex-wrap-reverse gap-5 justify-center w-full'>
				<EditFormBtn onClick={() => setModalVisible(false)} type={'button'}>
					Anuluj
				</EditFormBtn>
				<EditFormBtn type={'submit'}>Zatwierdź</EditFormBtn>
			</div>
		</form>
	);
}

export default AddSkillsContainer;
