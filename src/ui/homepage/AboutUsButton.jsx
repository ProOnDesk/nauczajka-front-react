import Button from "../Inputs/Button";

function AboutUsButton() {
	return (
		<div>
			<div className="flex flex-col justify-center items-center m-14 ">
				<Button>Odkrywaj więcej</Button>
			</div>
			<hr className="h-[2px] w-4/5 m-6  bg-lighGray border-0 rounded " />
		</div>
	);
}

export default AboutUsButton;
