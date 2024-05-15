import HeaderButtonJoinNow from "../ui/homepage/HeaderButtonJoinNow";
import HeaderImg from "../ui/homepage/HeaderImg";
import HeaderText from "../ui/homepage/HeaderText";
import HeaderIcon from "../ui/homepage/HeaderIcon";
import HeaderFooter from "../ui/homepage/HeaderFooter";
import { useContext, useEffect } from "react";
import { FooterContext } from "../context/FooterContext";
import AboutUsText from "../ui/homepage/AboutUsText";
import AboutUsImg from "../ui/homepage/AboutUsImg";
import AboutUsButton from "../ui/homepage/AboutUsButton";
import OfferImg from "../ui/homepage/OfferImg";
import OfferText from "../ui/homepage/OfferText";
import HowItWorksList from "../ui/homepage/HowItWorksList";
// import Carousel from "../ui/homepage/Carousel";
import Contact from "../ui/homepage/Contact";

function HomePage() {
	const { changeColor } = useContext(FooterContext);

	useEffect(() => {
		changeColor("text-white bg-mainPurple");
	}, [changeColor]);

	return (
		<div className="flex flex-col ">
			<div className="max-w-7xl mx-auto relative">
				<HeaderText />
				<HeaderButtonJoinNow />
				<HeaderIcon />
				<HeaderImg />
				<HeaderFooter />
				<div className="md960:flex md960:flex-row gap-10">
					<AboutUsImg />
					<AboutUsText />
				</div>
				<HowItWorksList />
				<AboutUsButton />
				<div className="md960:flex md960:flex-row gap-10 ">
					<OfferImg />
					<OfferText />
				</div>
				{/* <Carousel /> */}
				<Contact />
			</div>
		</div>
	);
}

export default HomePage;
