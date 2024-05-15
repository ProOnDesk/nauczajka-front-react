// import { CiMail } from "react-icons/ci";
// import { PiPhoneCallThin } from "react-icons/pi";

function Contact() {
	return (
		<div className=" bg-mainPurple rounded-t-xl	">
			<div className="flex flex-col justify-center items-center mt-20 sm840:items-start">
				<h3 className="flex flex-col justify-center  mt-6 pl-8 text-white font-semibold	uppercase tracking-widest sm500:text-lg sm700:mb-4 sm700:text-xl sm840:mr-auto	sm840:text-2xl sm840:ml-6 sm840:mt-12 sm840:mb-1 ">
					Nauczajka
				</h3>

				<hr className="h-[.5px] w-4/5 m-3  bg-white border-0 rounded sm500:h-[1px]  sm840:mr-auto sm840:ml-14   sm840:w-3/12	sm840:h-[1.5px] sm840:mt-1	" />
				<p className="flex flex-col justify-center items-center mx-8 my-4 text-center   text-white text-xs mb-8 sm400:mx-14 sm400:mb-10 sm500:text-sm sm500:mx-16 sm700:mx-20 sm700:my-6 sm840:text-base sm840:text-left sm840:ml-14 sm840:mr-36 sm840:my-3 sm840:mb-20">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
					nobis sit expedita, ex dicta dolores culpa. Similique aliquid dolor
					repudiandae aut quod! Aliquam ratione voluptate, exercitationem
					excepturi commodi maxime quasi.
				</p>
				{/* <div className="flex flex-col justify-center items-start gap-4 sm840:mt-6 ">
					<p className=" flex flex-row justify-center items-center text-white text-sm gap-4 font-light sm500:text-base sm600:text-lg sm840:ml-20 sm840:text-xl 	">
						<CiMail />
						nauczajka@gmail.com
					</p>
					<p className=" flex flex-row  justify-center items-center text-white text-sm gap-4 font-light mb-6 sm400:mt-3 sm500:base   sm600:text-lg  sm840:ml-20 sm840:text-xl ">
						{" "}
						<PiPhoneCallThin />
						+480000000
					</p>
				</div> */}
			</div>
		</div>
	);
}

export default Contact;
