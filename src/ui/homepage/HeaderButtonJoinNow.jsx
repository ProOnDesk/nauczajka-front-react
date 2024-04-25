import Button from "../Inputs/Button";

function HeaderButtonJoinNow() {
	return (
		<>
			<div className="flex flex-row p-8 text-sm font-semibold  justify-start items-center  min-[375px]:p-14  min-[535px]:text-base min-[535px]:p-18 sm:text-lg sm:p-20 md:m-8  md:py-12 md:px-16 lg:px-10 lg:py-4 xl:text-xl xl:px-16  ">
				<div className="z-10">
					<Button>Dołącz teraz</Button>
				</div>
			</div>
		</>
	);
}

export default HeaderButtonJoinNow;
// p-8 mt-2.5 z-50
