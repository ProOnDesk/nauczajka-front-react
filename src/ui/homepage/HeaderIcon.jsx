import { PiPhoneCallThin } from "react-icons/pi";
import { PiChatsThin } from "react-icons/pi";
import { PiVideoCameraThin } from "react-icons/pi";

function HeaderIcon() {
	return (
		<>
			<div className="absolute">
				{" "}
				<div className="flex justify-end flex-row w-11/12  mt-80 ml-32 space-x-1.5 text-ms   text-mainPurple min-[340px]:ml-36 min-[375px]:text-xl  min-[375px]:mt-72 min-[375px]:ml-36 md:text-2xl md:justify-center md:ml-20 md:mt-64">
					<div className="rounded z-10  bg-lightPurple flex justify-center items-center mb-2 md:h-6 md:w-6">
						<PiPhoneCallThin />
					</div>
					<div className="rounded z-10 bg-lightPurple flex justify-center items-center mb-2 md:h-6 md:w-6">
						<PiChatsThin />
					</div>
					<div className="rounded z-10 bg-lightPurple flex justify-center items-center mb-2 md:h-6 md:w-6">
						<PiVideoCameraThin />
					</div>
				</div>
			</div>
		</>
	);
}

export default HeaderIcon;
