function AboutUsImg() {
	return (
		<>
			<div className="flex flex-col justify-center items-center  md960:flex-row md960:justify-start  md960:pl-20 ">
				<img
					className="mx-10 my-16  w-[250px] h-[150px] rounded-md 	bg-cover shadow-xl min-[370px]:mt-8 min-[440px]:w-[320px] min-[440px]:h-[200px] min-[600px]:mt-14 sm:w-[400px] sm:h-[240px] md960:shadow-headerButtonFooter   md960:h-[180px] md960:w-[280px]  "
					src="./aboutus.png"
					alt="zdjęcie gdzie odbywa się zajęcia online "
				/>
			</div>
		</>
	);
}

export default AboutUsImg;
