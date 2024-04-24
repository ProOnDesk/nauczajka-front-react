import { Outlet } from 'react-router';
import Nav from './navigation/Nav';
import Footer from './Footer';
import { useRef } from 'react';
import ChatsComponent from '../features/Chats/ChatsComponent';

function AppLayout() {
	const appLayoutRef = useRef();
	return (
		<>
			<div
				ref={appLayoutRef}
				id='appLayout'
				className='grid grid-rows-[auto_1fr_auto] h-screen overflow-x-hidden font-roboto-mono'
			>
				<Nav appLayoutRef={appLayoutRef} />
				<Outlet />
				<Footer />
			</div>
			<ChatsComponent />
		</>
	);
}

export default AppLayout;
