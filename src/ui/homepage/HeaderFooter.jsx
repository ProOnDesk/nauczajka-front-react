import HeaderButtonIcon from "./HeaderButtonIcon";

function HeaderFooter() {
	return (
		<>
			<div className="flex justify-center items-center flex-col h-full w-full mt-20 bg-mainPurple min-[375px]:mt-36 min-[535px]:mt-52 sm:mt-36 md:mt-24 md:rounded-tl-lg min-[910px]:mt-36 ">
				<div className="flex flex-col md:flex-row justify-center items-center">
					<div className="md:w-8/12	">
						<h2 className="font-bold text-center leading-relaxed mt-12 text-2xl text-white min-[375px]:text-3xl min-[510px]:text-4xl min-[535px]:py-2 min-[610px]:text-5xl sm:text-5xl sm:p-10 md:text-3xl md:text-left md:p-5 ">
							Prosty sposób na rozpoczęcie nauki
						</h2>
						<p className="p-6 mt-5  text-center text-xs leading-loose text-white min-[375px]:text-sm min-[375px]:p-7 min-[535px]:text-base min-[535px]:leading-loose min-[535px]:py-3 sm:text-lg sm:pb-10 sm:leading-loose md:text-xs md:text-left md:px-5 md:py-0 md:leading-loose md:mb-12">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
							sint ad, quisquam eius magnam
						</p>
					</div>
					<HeaderButtonIcon />
				</div>
			</div>
		</>
	);
}

export default HeaderFooter;
