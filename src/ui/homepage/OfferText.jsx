import { PiCalculatorThin } from "react-icons/pi";
import { PiTranslateThin } from "react-icons/pi";
import { PiPencilLineThin } from "react-icons/pi";

function OfferText() {
	return (
		<div className="flex flex-col items-center md960:mr-auto md960:my-6 md 960:mx-8 ">
			<div className="md960:w-[550px] mx-auto">
				<h2 className="flex flex-col justify-center items-center uppercase md960:flex md960:justify-center md960:items-center   text-mainBlue font-semibold mt-4 text-2xl min-[535px]:text-3xl  min-[600px]:mt-8  md960:text-lg lg:text-xl ">
					Oferta
				</h2>
				<hr className="h-[2px] mx-auto w-4/5 m-6  bg-mainPurple border-0 rounded min-[600px]:mb-16 md960:w-[330px]	md960:m-4 md960:mx-auto md960:h-[1px]" />

				<div className="p-6 text-sm text-center leading-relaxed text-mainBlue md960:py-2">
					<p className=" mt-2 w-full text-center min-[440px]:text-base min-[535px]:text-lg min-[535px]:px-5 min-[600px]:px-8  min-[600px]:leading-loose sm:px-8  min-[680px]:px-11  min-[840px]:px-20 md:px-20 md:text-xl md:leading-loose md960:text-xs md960:leading-relaxed md960:px-28 lg:text-sm lg:leading-relaxed">
						Oferujemy wszechstronną pomoc w nauce w zakresie{" "}
						<span className="text-mainSalmon font-semibold">
							różnorodnych przedmiotów
						</span>
						, od matematyki i fizyki po języki obce i literaturę.{" "}
					</p>
					<div className="flex flex-row justify-center items-center mt-10 text-4xl gap-10 text-mainPurple min-[535px]:text-5xl min-[535px]:py-5 min-[535px]:gap-14 md960:text-3xl md960:my-2 md960:gap-10 lg:text-4xl">
						<PiCalculatorThin />
						<PiTranslateThin />
						<PiPencilLineThin />
					</div>
					<p className=" mt-10 w-full text-center min-[440px]:text-base min-[535px]:text-lg min-[535px]:px-5 min-[600px]:px-8  min-[600px]:leading-loose sm:px-8  min-[680px]:px-11 min-[840px]:px-20 md:px-20 md:text-xl md:leading-loose md960:text-xs md960:leading-relaxed md960:px-28 md960:mt-4 lg:text-sm lg:leading-relaxed">
						Dzięki naszym wykwalifikowanym korepetytorom możesz{" "}
						<span className="text-mainSalmon font-semibold">
							szybko zwiększyć swoją wiedzę
						</span>{" "}
						i pewność siebie w każdym temacie.
					</p>
				</div>
			</div>
		</div>
	);
}

export default OfferText;
