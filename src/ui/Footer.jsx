function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className=" flex justify-end items-center flex-col py-4 h-full text-white inset-x-0 bottom-0 bg-mainPurple">
			<p>{currentYear} &copy; Nauczajka</p>
		</footer>
	);
}

export default Footer;
