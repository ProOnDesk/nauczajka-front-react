function ShowTutorsContainer({ tutorList }) {
	return (
		<div className='w-full mx-auto py-5 flex flex-col gap-2 '>
			<div className='flex gap-2 flex-col p-2 rounded-md'>
				{tutorList?.map((listEl) => {
					const pricePerHour = 215;
					return (
						<div
							key={listEl.id}
							className='flex flex-col md:flex-row justify-center md:justify-between border-whiteHover border-2 rounded-md p-2 gap-3 md:px-8 sm400:w-3/4 mx-auto md:w-4/5'
						>
							<div className='h-full flex flex-col md:flex-row justify-center items-center gap-2 md:gap-5'>
								<img
									src={`http://localhost:8000/${listEl.profile_image}`}
									alt='dsa'
									className='h-24 w-24 rounded-full border-whiteHover shadow-md shadow-shadowBlack border-2'
								/>
								<div className='flex flex-col'>
									<div className='flex flex-row gap-2 flex-wrap justify-center md:justify-start'>
										<p className='text-2xl'>{listEl.first_name}</p>
										<p className='text-2xl'>{listEl.last_name}</p>
									</div>
									<div className='flex flex-row flex-wrap justify-center gap-1 text-gray'>
										{listEl.skills.map((skill, index) => (
											<p key={skill} className='text-[0.75rem]'>
												{skill}
												{index != listEl.skills.length - 1 && ','}
											</p>
										))}
									</div>
								</div>
							</div>
							<div className='flex flex-col justify-center gap-3'>
								<div className='text-center'>
									<p className='text-2xl'>{pricePerHour}</p>
									<p className='text-sm text-gray'>zł/godz</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ShowTutorsContainer;
