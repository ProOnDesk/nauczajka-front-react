import { PiNotebookLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { SlEarphonesAlt } from "react-icons/sl";
import Button from "../Inputs/Button";

function HeaderButtonIcon() {
	return (
		<>
			<div className="flex flex-col justify-center items-center  p-6 gap-y-6">
				<Button className="flex flex-col justify-center items-center w-full h-20 m-1  shadow-mainBlue ">
					<div className="rounded-full bg-white flex justify-center items-center border border-mainPurple mb-2 h-8 w-8 ">
						<div className="text-mainPurple text-xl">
							<PiNotebookLight />
						</div>
					</div>
					<p className="text-center text-xs">Wybierz przedmiot</p>
				</Button>

				<Button className="flex flex-col justify-center items-center w-full h-20 m-1   shadow-mainBlue ">
					<div className="rounded-full bg-white flex justify-center items-center border border-mainPurple mb-2 h-8 w-8">
						<div className="text-mainPurple text-xl">
							<CiUser />
						</div>
					</div>
					<p className="text-center text-xs">Wybierz korepetytora</p>
				</Button>

				<Button className="flex flex-col justify-center items-center w-full h-20 mb-20   shadow-mainBlue">
					<div className="rounded-full bg-white flex justify-center items-center border border-mainPurple mb-2 h-8 w-8">
						<div className="text-mainPurple text-xl">
							<SlEarphonesAlt />
						</div>
					</div>
					<p className="text-center text-xs">Skontaktuj się z nim</p>
				</Button>
			</div>
		</>
	);
}

export default HeaderButtonIcon;
