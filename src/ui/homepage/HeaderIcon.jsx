import { PiPhoneCallThin } from "react-icons/pi";
import { PiChatsThin } from "react-icons/pi";
import { PiVideoCameraThin } from "react-icons/pi";

function HeaderIcon() {
	return (
		<>
			<div className="container absolute">
				{" "}
				<div className="flex justify-end flex-row w-full p-1 mt-72  space-x-2 text-base  min-[380px]:text-lg min-[430px]:text-xl text-mainPurple md:text-2xl md:justify-center md:ml-20 md:mt-64">
					<div className="rounded z-10  bg-lightPurple flex justify-center items-center mb-2 h-6 w-6">
						<PiPhoneCallThin />
					</div>
					<div className="rounded z-10 bg-lightPurple flex justify-center items-center mb-2 h-6 w-6">
						<PiChatsThin />
					</div>
					<div className="rounded z-10 bg-lightPurple flex justify-center items-center mb-2 h-6 w-6">
						<PiVideoCameraThin />
					</div>
				</div>
			</div>
		</>
	);
}

export default HeaderIcon;
