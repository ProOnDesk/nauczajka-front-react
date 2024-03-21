function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='py-4 flex justify-center text-[#495057]'>
			<p>{currentYear} &copy; Nauczajka</p>
		</footer>
	);
}

export default Footer;
