function App() {
	return (
		<div className='bg-[#333] h-screen flex justify-between items-center text-white font-roboto-mono'>
			<div className='max-w-5xl flex flex-row justify-between w-1/2 mx-auto items-center'>
				<div className='relative w-4/6'>
					<div className='absolute w-1 h-full bg-orange-300 -left-5'></div>
					<p className='text-xl'>
						aha ja doszedlem do wniosku ze trzeba umiec conajmniej dwie jakies
						technologie takie webowe bo w jednym siedziec to troche cringe
					</p>
				</div>
				<div className='w-1/6'>
					<p>16 March 2024</p>
					<p className='text-orange-300'>Paweł Ochał</p>
				</div>
			</div>
		</div>
	);
}

export default App;
