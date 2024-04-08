function HeaderText() {
	return (
		<div className="flex flex-col w-full z-10">
			<h3 className=" px-6 text-2xl font-semibold text-mainBlue min-[375px]:px-8 min-[375px]:text-3xl sm:text-4xl sm:px-12 sm:py-3 md:text-4xl md:mt-2 md:px-12 md:py-4 ">
				Zacznij naukę!
			</h3>
			<h1 className=" text-5xl p-5 text-right font-bold  text-mainBlue min-[481px]:text-6xl sm:text-7xl sm:px-10 md:text-5xl md:text-left md:px-12 md:py-0  lg:text-6xl lg:py-3">
				Z naszymi <span className="text-mainSalmon">Ekspertami</span>
			</h1>
			<p className="p-6  text-sm w-full text-left leading-7 backdrop:text-mainBlue min-[-375px]:p-10 min-[375px]:w-w-11/12	 min-[481px]:w-5/6	min-[481px]:text-base min-[481px]:leading-8 sm:text-lg sm:leading-9 sm:p-12 md:text-base md:w-2/3 md:py-8 md:leading-7 lg:text-lg lg:leading-9">
				Buduj swoje umiejętności światowej klasy uniwersytety oraz firmy.Możesz
				uczyć się z dowolnego miejsca
			</p>
		</div>
	);
}

export default HeaderText;
