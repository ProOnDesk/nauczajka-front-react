import { PiPhoneCallThin } from "react-icons/pi";
import { PiChatsThin } from "react-icons/pi";
import { PiVideoCameraThin } from "react-icons/pi";

function HeaderIcon() {
	return (
		<>
			<div className="absolute top-[310px] right-6  flex gap-2  text-mainPurple min-[420px]:text-xl min-[535px]:text-2xl min-[535px]:right-12 min-[535px]:top-[320px] sm:top-[380px] sm:text-2xl sm:right-[120px] md:right-[100px] md:top-[183px] lg:right-[130px] lg:text-4xl	xl:text-3xl">
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
		</>
	);
}

export default HeaderIcon;
