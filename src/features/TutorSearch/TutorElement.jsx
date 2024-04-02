import { CiCircleChevRight } from 'react-icons/ci';
import { API_KEY } from '../../services/apiAuth';

function TutorElement({ tutorInfo }) {
	const pricePerHour = 215;
	return (
		<div className='flex flex-col md:flex-row justify-center md:justify-between border-whiteHover border-2 rounded-md p-2 gap-3 md:px-8 sm400:w-3/4 w-full mx-auto md:w-4/5 hover:bg-whiteHover group/tutorEl hover:cursor-pointer transition-colors'>
			<div className='h-full flex flex-col md:flex-row justify-center items-center gap-2 md:gap-5'>
				<img
					src={`${API_KEY}${tutorInfo.profile_image}`}
					alt='dsa'
					className='h-24 w-24 rounded-full border-whiteHover group-hover/tutorEl:border-mainPurpleHover shadow-md shadow-shadowBlack border-2 transition-colors duration-300'
				/>
				<div className='flex flex-col'>
					<div className='flex flex-row gap-2 flex-wrap justify-center md:justify-start'>
						<p className='text-2xl'>{tutorInfo.first_name}</p>
						<p className='text-2xl'>{tutorInfo.last_name}</p>
					</div>
					<div className='flex flex-row flex-wrap justify-center md:justify-start gap-1 text-gray'>
						{tutorInfo.skills.map((skill, index) => (
							<p key={skill} className='text-[0.75rem]'>
								{skill}
								{index != tutorInfo.skills.length - 1 && ','}
							</p>
						))}
					</div>
				</div>
			</div>
			<div className='flex flex-row items-center justify-center gap-10'>
				<div className='text-center'>
					<p className='text-2xl'>{pricePerHour}</p>
					<p className='text-sm text-gray'>zł/godz</p>
				</div>
				<div>
					<span className='text-4xl text-gray group-hover/tutorEl:text-mainPurple transition-colors duration-300'>
						<CiCircleChevRight />
					</span>
				</div>
			</div>
		</div>
	);
}

export default TutorElement;
