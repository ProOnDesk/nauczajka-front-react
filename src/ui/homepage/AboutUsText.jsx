import { WiStars } from "react-icons/wi";
import { CiCircleCheck } from "react-icons/ci";
import { PiStudentThin } from "react-icons/pi";

function AboutUsText() {
	return (
		<div className="flex flex-col justify-center items-center md960:my-6">
			<div className=" md960:w-[550px] lg:mx-12">
				<h2 className="flex flex-col justify-center items-center uppercase md960:flex md960:justify-center md960:items-center   text-mainBlue font-semibold mt-4 text-2xl min-[535px]:text-3xl  min-[600px]:mt-8  md960:text-lg md960:mt-20 lg:text-xl ">
					O nas
				</h2>
				<hr className=" h-[2px] mx-auto w-4/5 m-6  bg-mainPurple border-0 rounded min-[600px]:mb-16 md960:w-[330px]	md960:m-4 md960:mx-auto md960:h-[1px]" />
				<div className="px-6 mt-4 text-sm text-center leading-relaxed text-mainBlue min-[440px]:text-base min-[535px]:text-lg  min-[600px]:leading-loose min-[600px]:px-8 ">
					<p className="w-full min-[535px]:px-5 min-[680px]:px-12 md:px-20 md:text-xl md:leading-loose md960:text-xs md960:leading-relaxed lg:text-sm lg:leading-relaxed">
						Jesteśmy zespołem doświadczonych korepetytorów, {""}
						<span className="text-mainSalmon font-semibold">
							gotowych Ci pomóc
						</span>{" "}
						{""}w osiągnięciu sukcesu edukacyjnego.
					</p>

					<div className="flex flex-row justify-center items-center mt-10 text-4xl gap-10 text-mainPurple min-[535px]:text-5xl min-[535px]:py-5 min-[535px]:gap-14 md960:text-3xl md960:my-2 md960:gap-10 lg:text-4xl">
						<PiStudentThin />
						<CiCircleCheck />
						<WiStars />
					</div>

					<p className=" mt-10 mb-16 w-full text-center min-[535px]:px-5 min-[600px]:px-8  sm:px-8  min-[680px]:px-11 min-[840px]:px-20 md:px-20 md:text-xl md:leading-loose md960:text-xs md960:leading-relaxed md960:mt-4 md960:mb-20 lg:text-sm lg:leading-relaxed">
						Nasi korepetytorzy posiadają{" "}
						<span className="text-mainSalmon font-semibold">
							bogate doświadczenie w nauczaniu
						</span>{" "}
						oraz ukończą edukację na renomowanych uniwersytetach. Ich wiedza i
						umiejętności są atutem, który przekłada się na skuteczność nauki.
					</p>
				</div>
			</div>
		</div>
	);
}

export default AboutUsText;
