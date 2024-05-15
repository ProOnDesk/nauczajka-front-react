function OfferImg() {
	return (
		<>
			<div className="flex flex-col justify-center items-center my-10  md960:flex-row md960:justify-end  md960:pl-36  lg1150:m-20">
				<img
					className="w-[250px] h-[300px] rounded-md bg-center	bg-cover shadow-xl min-[600px]:w-[280px] min-[600px]:h-[350px]  md960:shadow-headerButtonFooter md960:h-[300px] md960:w-[240px] lg:w-[280px] lg:h-[330px]

					"
					src="./oferta.png"
					alt="zdjęcie gdzie odbywa się zajęcia online "
				/>
			</div>
		</>
	);
}

export default OfferImg;
