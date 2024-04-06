import HeaderButtonIcon from "./HeaderButtonIcon";

function HeaderFooter() {
	return (
		<>
			<div className="flex justify-center items-center flex-col mt-28 bg-mainPurple ">
				<div className="flex flex-col ">
					<h2 className="font-bold text-center leading-relaxed mt-12 text-2xl text-white">
						Prosty sposób na rozpoczęcie nauki
					</h2>
					<p className="p-6 mt-5  text-center text-xs leading-loose text-white">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
						sint ad, quisquam eius magnam
					</p>
					<HeaderButtonIcon />
				</div>
			</div>
		</>
	);
}

export default HeaderFooter;
