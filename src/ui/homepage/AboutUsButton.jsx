import Button from "../Inputs/Button";

function AboutUsButton() {
	return (
		<div>
			<div className="flex flex-col justify-center items-center m-14 min-[440px]:text-lg min-[535px]:text-xl min-[535px]:m-16 min-[600px]:text-2xl min-[600px]:m-20">
				<Button>Odkrywaj więcej</Button>
			</div>
			<hr className="h-[2px] w-4/5 m-6  bg-lighGray border-0 rounded min-[600px]:mb-16" />
		</div>
	);
}

export default AboutUsButton;
