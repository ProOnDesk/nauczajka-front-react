import Button from "../Inputs/Button";

function HeaderButtonJoinNow() {
	return (
		<>
			<div className="flex flex-row p-12  justify-start items-center  min-[375px]:p-16 min-[375px]:text-lg min-[535px]:text-xl min-[535px]:p-18 sm:text-2xl sm:p-20 md:m-8 md:text-2xl md:py-8 md:px-16 lg:px-10 lg:py-4 xl:text-3xl xl:px-16 ">
				<div className="z-50">
					<Button>Join Now</Button>
				</div>
			</div>
		</>
	);
}

export default HeaderButtonJoinNow;
// p-8 mt-2.5 z-50
