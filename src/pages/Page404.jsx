import Button404 from "../ui/page404/Button404";
import MainText404 from "../ui/page404/MainText404";
import Img404 from "../ui/page404/Img404";

function Page404() {
	return (
		<div className="flex flex-col w-full  h-full">
			<div className="flex flex-col justify-between items-start h-full w-full max-w-7xl mx-auto ">
				<div className="w-full">
					<MainText404 />
					<Button404 />
				</div>
				<Img404 />
			</div>
		</div>
	);
}

export default Page404;
