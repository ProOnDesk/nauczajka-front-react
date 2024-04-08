import HeaderButtonIcon from "./HeaderButtonIcon";

function HeaderFooter() {
	return (
		<>
			<div className="flex justify-center items-center flex-col h-full w-full mt-20 bg-mainPurple  md:mt-44 md:rounded-tl-lg">
				<div className="flex flex-col md:flex-row justify-center items-center">
					<div className="md:w-5/12">
						<h2 className="font-bold text-center leading-relaxed mt-12 text-2xl text-white  md:text-3xl md:text-left md:p-5 ">
							Prosty sposób na rozpoczęcie nauki
						</h2>
						<p className="p-6 mt-5  text-center text-xs leading-loose text-white  md:text-ms md:text-left md:px-5 md:py-0 md:leading-relaxed md:mb-12">
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
