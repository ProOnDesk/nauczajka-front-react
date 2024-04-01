import { createPortal } from 'react-dom';

function Modal({ children }) {
	return createPortal(
		<div className='absolute w-full h-full left-0 top-0 bg-gray/40 z-50 flex justify-center items-center'>
			<div className='bg-white shadow-myShadow rounded-md py-10 mx-5 px-5 w-full sm400:w-3/4 sm:w-3/5 md:w-1/2 xl:w-[600px]'>
				{children}
			</div>
		</div>,
		document.body
	);
}

export default Modal;
