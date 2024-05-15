import { PiRocketLaunchThin } from "react-icons/pi";
import { PiSmileyWinkThin } from "react-icons/pi";
import { CiMedal } from "react-icons/ci";

function HowItWorksList() {
	return (
		<div>
			<div className="flex flex-col  h-full w-full ">
				<div className="flex flex-row justify-start items-center  md960:flex md960:w-full  md960:gap-6 md960:justify-center md960:items-center">
					<hr className="h-[2px] w-1/4 mr-auto my-auto bg-lighGray border-0 rounded min-[360px]:w-2/6 sm400:w-1/3 sm500:w-5/12 sm700:w-6/12	sm840:w-3/5 md960:mr-auto md960:my-auto md960:w-7/12" />
					<h3 className="py-2 pl-12 px-4 text-center uppercase rounded-l-lg bg-mainPurple text-white font-semibold mt-4 text-xl min-[535px]:text-2xl  min-[600px]:pl-14 min-[600px]:px-6 md960:text-3xl md960:pl-20 ">
						Jak to działa?
					</h3>
				</div>
			</div>
			<div className="text-mainBlue text-sm mt-12 p-4 min-[400px]:text-base min-[535px]:text-lg ">
				<ol className="list-outside list-decimal pl-9 marker:font-bold min-[535px]:pl-11 min-[600px]:pl-14  min-[680px]:pl-16 min-[840px]:pl-20 min-[840px]:p-4  md:pl-20 md:p-8 md960:pl-24 md960:pr-[280px] md960:text-2xl ">
					<li className="pb-4">
						<h5 className="font-bold tracking-tight text-base min-[400px]:text-lg min-[535px]:text-xl md960:text-2xl ">
							Znajdź swojego korepetytora.
						</h5>
						<p className="text-xs leading-relaxed mt-4 min-[400px]:text-sm min-[400px]:mt-6 min-[535px]:text-base min-[600px]:my-8 md960:text-sm">
							{" "}
							Przeglądaj profile{" "}
							<span className="text-mainSalmon font-semibold">
								naszych korepetytorów{" "}
							</span>{" "}
							i <span className="text-mainSalmon font-semibold">wybierz</span>{" "}
							tego, który najlepiej odpowiada Twoim potrzebom i preferencjom.
						</p>
					</li>
					<li className="pb-4">
						<h5 className="font-bold tracking-tight text-base min-[400px]:text-lg min-[535px]:text-xl md960:text-2xl">
							Zaplanuj lekcje.
						</h5>
						<p className="text-xs leading-relaxed mt-4 min-[400px]:text-sm min-[400px]:mt-6 min-[535px]:text-base min-[600px]:my-8 md960:text-sm">
							Umów się na lekcje z wybranym korepetytorem{" "}
							<span className="text-mainSalmon font-semibold">
								w dogodnym dla Ciebie terminie
							</span>
							. Możesz nawet korzystać z lekcji online, co daje Ci elastyczność
							i wygodę.
						</p>
					</li>
					<li>
						<h5 className="font-bold tracking-tight text-base min-[400px]:text-lg min-[535px]:text-xl md960:text-2xl">
							Komunikacja przez chat
						</h5>
						<p className="text-xs leading-relaxed mt-4 mb-4 min-[400px]:text-sm min-[400px]:mt-6 min-[535px]:text-base min-[600px]:my-8 md960:text-sm">
							Nasza platforma umożliwia łatwą komunikację z korepetytorem {""}
							<span className="text-mainSalmon font-semibold">
								poprzez chat
							</span>
							. Możesz zadawać pytania, uzgadniać szczegóły lekcji oraz dzielić
							się swoimi postępami w nauce.
						</p>
					</li>
				</ol>
			</div>

			<div className="flex flex-col  h-full w-full  ">
				<div className="flex flex-row justify-end items-center gap-6 md960:flex md960:w-full md960:gap-6 md960:justify-center md960:items-center">
					{" "}
					<h3 className="py-2 pr-10 px-4  text-center uppercase rounded-r-lg bg-mainPurple text-white font-semibold my-12 text-xl sm400:pr-16 sm400:px-6 sm500:pr-20 min-[535px]:text-2xl  min-[600px]:pr-14 min-[600px]:px-6 sm700:pr-24 md960:pr-[100px] md960:text-3xl md960:mr-auto">
						Nasza misja
					</h3>
					<hr className="h-[2px] w-2/6 ml-auto my-auto bg-lighGray border-0 rounded min-[360px]:w-1/5 sm400:w-2/5 sm500:w-5/12 sm700:w-6/12 sm840:w-3/5 md960:mr-auto md960:my-auto md960:w-7/12" />
				</div>
			</div>
			<div className="p-6  text-sm text-center leading-relaxed text-mainBlue md960:p-10 ">
				<p className="w-full text-center min-[440px]:text-base min-[535px]:text-lg  min-[600px]:leading-loose sm:px-8 min-[600px]:px-8  min-[680px]:px-11  min-[840px]:px-20 md:px-20 md:text-xl md:leading-loose md:mt-10 md960:text-lg md960:leading-relaxed md960:px-40 lg1150:px-36">
					Dążymy do tego, aby{" "}
					<span className="text-mainSalmon font-semibold">każdy uczeń</span>{" "}
					miał możliwość osiągnięcia swoich celów edukacyjnych.
				</p>

				<div className="flex flex-row justify-center items-center mt-10 text-4xl gap-10 text-mainPurple min-[535px]:text-5xl min-[535px]:py-5 min-[535px]:gap-14  ">
					<PiRocketLaunchThin />
					<CiMedal />
					<PiSmileyWinkThin />
				</div>

				<p className=" mt-8  w-full text-center min-[440px]:text-base min-[535px]:text-lg min-[600px]:leading-loose min-[600px]:px-8  sm:px-8  min-[680px]:px-11  min-[840px]:px-20 md:px-20 md:text-xl md:leading-loose md960:text-lg md960:leading-relaxed md960:px-40 lg1150:px-36">
					Poprzez indywidualne podejście, wysokiej jakości nauczanie i wygodne
					narzędzia komunikacyjne{" "}
					<span className="text-mainSalmon font-semibold">
						staramy się zapewnić optymalne warunki
					</span>{" "}
					do nauki dla każdego ucznia.
				</p>
			</div>
		</div>
	);
}

export default HowItWorksList;
