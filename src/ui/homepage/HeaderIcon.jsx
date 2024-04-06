import { PiPhoneCallThin } from "react-icons/pi";
import { PiChatsThin } from "react-icons/pi";
import { PiVideoCameraThin } from "react-icons/pi";

function HeaderIcon() {
	return (
		<>
			<div className="flex flex-row absolute w-full ml-60 mt-72 space-x-2 text-base text-mainPurple">
				<div className="rounded z-10  bg-lightPurple ">
					<PiPhoneCallThin />
				</div>
				<div className="rounded z-10 bg-lightPurple">
					<PiChatsThin />
				</div>
				<div className="rounded z-10 bg-lightPurple">
					<PiVideoCameraThin />
				</div>
			</div>
		</>
	);
}

export default HeaderIcon;
