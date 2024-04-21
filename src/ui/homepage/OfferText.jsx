import { PiCalculatorThin } from "react-icons/pi";
import { PiTranslateLight } from "react-icons/pi";
import { IoEarthOutline } from "react-icons/io5";

function OfferText() {
	return (
		<div className="flex flex-col justify-center items-center ">
			<h2 className="uppercase text-mainBlue font-semibold mt-4 text-2xl ">
				Oferta
			</h2>
			<hr className="h-[2px] w-4/5 m-6  bg-lighGray border-0 rounded " />

			<div className="p-6 text-sm text-center leading-relaxed text-mainBlue">
				<p className=" mt-2 w-full text-center">
					Oferujemy wszechstronną pomoc w nauce w zakresie{" "}
					<span className="text-mainSalmon font-semibold">
						różnorodnych przedmiotów
					</span>
					, od matematyki i fizyki po języki obce i literaturę.{" "}
				</p>
				<div className="flex flex-row justify-center items-center mt-10 text-4xl gap-10 text-mainPurple ">
					<PiCalculatorThin />
					<PiTranslateLight />
					<IoEarthOutline />
				</div>
				<p className=" mt-10 w-full text-center">
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
