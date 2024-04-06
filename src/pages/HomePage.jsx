import HeaderButtonJoinNow from "../ui/homepage/HeaderButtonJoinNow";
import HeaderImg from "../ui/homepage/HeaderImg";
import HeaderText from "../ui/homepage/HeaderText";
import HeaderIcon from "../ui/homepage/HeaderIcon";
import HeaderFooter from "../ui/homepage/HeaderFooter";

function HomePage() {
	return (
		<div className="flex flex-col ">
			<HeaderText />
			<HeaderButtonJoinNow />
			<HeaderIcon />
			<HeaderImg />
			<HeaderFooter />
		</div>
	);
}

export default HomePage;
