import { PiCalculatorThin } from "react-icons/pi";
import { PiTranslateThin } from "react-icons/pi";
import { PiPencilLineThin } from "react-icons/pi";

function OfferText() {
	return (
		<div className="flex flex-col justify-center items-center ">
			<h2 className="uppercase text-mainBlue font-semibold mt-4 text-2xl min-[535px]:text-3xl  min-[600px]:mt-8 ">
				Oferta
			</h2>
			<hr className="h-[2px] w-4/5 m-6  bg-lighGray border-0 rounded " />

			<div className="p-6 text-sm text-center leading-relaxed text-mainBlue ">
				<p className=" mt-2 w-full text-center min-[440px]:text-base min-[535px]:text-lg min-[535px]:px-5 min-[600px]:px-8  min-[600px]:leading-loose sm:px-8  min-[680px]:px-11  min-[840px]:px-20 md:px-20 md:text-xl md:leading-loose">
					Oferujemy wszechstronną pomoc w nauce w zakresie{" "}
					<span className="text-mainSalmon font-semibold">
						różnorodnych przedmiotów
					</span>
					, od matematyki i fizyki po języki obce i literaturę.{" "}
				</p>
				<div className="flex flex-row justify-center items-center mt-10 text-4xl gap-10 text-mainPurple min-[535px]:text-5xl min-[535px]:py-5 min-[535px]:gap-14 ">
					<PiCalculatorThin />
					<PiTranslateThin />
					<PiPencilLineThin />
				</div>
				<p className=" mt-10 w-full text-center min-[440px]:text-base min-[535px]:text-lg min-[535px]:px-5 min-[600px]:px-8  min-[600px]:leading-loose sm:px-8  min-[680px]:px-11 min-[840px]:px-20 md:px-20 md:text-xl md:leading-loose">
					Dzięki naszym wykwalifikowanym korepetytorom możesz{" "}
					<span className="text-mainSalmon font-semibold">
						szybko zwiększyć swoją wiedzę
					</span>{" "}
					i pewność siebie w każdym temacie.
				</p>
			</div>
			<hr className="h-[2px] w-4/5 m-6  bg-lighGray border-0 rounded " />
		</div>
	);
}

export default OfferText;
