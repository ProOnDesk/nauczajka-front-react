import AvailableSkillElement from './AvailableSkillElement';
import { useAllAvailableSkills } from './useAllAvailableSkills';
import EditFormBtn from './EditFormBtn';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useAddTutorSkills } from './useAddTutorSkills';
import { useEffect } from 'react';
import Loader from '../../ui/Loader';

function AddSkillsContainer({
	tutorSkills,
	setModalVisible,
	refetchTutorSkills,
}) {
	const { availableSkills } = useAllAvailableSkills();

	const { addSkills, addingSkillsSuccess, isAddingSkillsPending } =
		useAddTutorSkills();
	const skillsToAdd = availableSkills?.filter(
		(newSkill) => !tutorSkills?.includes(newSkill.skill)
	);

	const { register, handleSubmit } = useForm();

	function onSubmit(data) {
		const choosenSkills = [];
		for (const [key, value] of Object.entries(data)) {
			if (value === true) choosenSkills.push(key);
		}
		if (choosenSkills.length === 0) {
			toast.error('Wybierz przynajmniej jeden przedmiot');
			return;
		}
		addSkills(choosenSkills.concat(tutorSkills));
		refetchTutorSkills();
	}

	useEffect(() => {
		console.log(addingSkillsSuccess);
		if (addingSkillsSuccess === true) {
			setModalVisible(false);
		}
	}, [addingSkillsSuccess, setModalVisible]);

	return !isAddingSkillsPending ? (
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
	) : (
		<Loader />
	);
}

export default AddSkillsContainer;
