import HeaderButtonIcon from './HeaderButtonIcon';

function HeaderFooter() {
	return (
		<>
			<div className='flex justify-center items-center flex-col h-[800px] w-full mt-20 shadow-headerButtonFooter  min-[375px]:mt-36 min-[523px]:mt-40 min-[531px]:mt-52 min-[535px]:h-[600px] min-[570px]:mt-60  sm:mt-36 sm:h-[650px] md:mt-24 md:h-[420px] md:rounded-xl min-[910px]:mt-36 min-[1070px]:mt-56 bg-mainPurple md960:w-10/12 md960:ml-auto  '>
				<div className='flex flex-col md:flex-row justify-center items-center max-w-7xl mx-auto'>
					<div className='md:w-8/12 p-7'>
						<h2 className='font-bold text-center leading-relaxed  mt-12 text-2xl opacity-95 text-white min-[375px]:text-3xl min-[510px]:text-4xl min-[535px]:py-2 min-[610px]:text-5xl sm:text-5xl sm:p-10 md:text-3xl md:text-left md:p-5 lg:text-4xl '>
							Prosty sposób na rozpoczęcie nauki
						</h2>
						<p className='p-6 mt-5 opacity-70 text-center text-xs leading-loose text-white min-[375px]:text-sm min-[375px]:p-7 min-[535px]:text-base min-[535px]:leading-loose min-[535px]:py-3 sm:text-lg sm:pb-10 sm:leading-loose md:text-xs md:text-left md:px-5 md:py-0 md:leading-loose md:mb-12 lg:text-base lg:leading-7'>
							Wszystko co musisz zrobić jest bardzo proste. Zarejestruj się,
							wybierz korepetytora według swoich preferencji i skontaktuj się z
							nim poprzez wiadomość prywatną.
						</p>
					</div>
					<HeaderButtonIcon />
				</div>
			</div>
		</>
	);
}

export default HeaderFooter;

{
	/* <div className="flex justify-center items-center flex-col h-[700px] w-full mt-20   min-[375px]:mt-36 min-[523px]:mt-40 min-[531px]:mt-52 min-[570px]:mt-60 sm:mt-36 md:mt-24 md:rounded-tl-lg min-[910px]:mt-36 min-[1070px]:mt-56 bg-mainPurple ">
				<div className="flex flex-col md:flex-row justify-center items-center max-w-7xl mx-auto">
					<div className="md:w-8/12 p-8">
						<h2 className="font-bold text-center leading-relaxed  mt-12 text-2xl opacity-95 text-white min-[375px]:text-3xl min-[510px]:text-4xl min-[535px]:py-2 min-[610px]:text-5xl sm:text-5xl sm:p-10 md:text-3xl md:text-left md:p-5 lg:text-4xl ">
							Prosty sposób na rozpoczęcie nauki
						</h2>
						<p className="p-6 mt-5 opacity-70 text-center text-xs leading-loose text-white min-[375px]:text-sm min-[375px]:p-7 min-[535px]:text-base min-[535px]:leading-loose min-[535px]:py-3 sm:text-lg sm:pb-10 sm:leading-loose md:text-xs md:text-left md:px-5 md:py-0 md:leading-loose md:mb-12 lg:text-base lg:leading-7">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
							sint ad, quisquam eius magnam
						</p>
					</div>
					<HeaderButtonIcon />
				</div>
			</div> */
}
