import { IoTrashBinOutline } from 'react-icons/io5';
import { useAddTutorSkills } from './useAddTutorSkills';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

function SkillElement({ skill, tutorSkills, refetchTutorSkills }) {
	const { addSkills, addingSkillsSuccess, isAddingSkillsPending } =
		useAddTutorSkills();
	function handleDeleteSkill() {
		const restSkills = tutorSkills.filter((currSkill) => currSkill !== skill);
		addSkills(restSkills);
	}

	useEffect(() => {
		if (addingSkillsSuccess === true) {
			toast.success("Usunieto przedmiot.")
			refetchTutorSkills();
		}
	}, [refetchTutorSkills, addingSkillsSuccess]);

	return (
		<button
			onClick={handleDeleteSkill}
			className='relative bg-white p-2 shadow-sm shadow-black/25 rounded-md overflow-hidden'
			disabled={isAddingSkillsPending}
		>
			<p>{skill}</p>
			<div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center hover:bg-mainBlue/90 opacity-0 hover:opacity-100 transition-all hover: cursor-pointer'>
				<span className='text-2xl text-white'>
					<IoTrashBinOutline />
				</span>
			</div>
		</button>
	);
}

export default SkillElement;
