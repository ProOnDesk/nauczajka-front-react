import {
	CiBadgeDollar,
	CiCircleCheck,
	CiCircleRemove,
	CiDesktop,
	CiLocationOn,
	CiPen,
	CiSignpostDuo1,
	CiUser,
} from 'react-icons/ci';
import InfoElement from './InfoElement';
import TitleElement from './TitleElement';
import { useGetTutorPrice } from './useGetTutorPrice';
import Loader from '../../ui/Loader';
import { useState } from 'react';
import Modal from '../../ui/Modal';
import InfoModalContainer from './InfoModalContainer';
import { useGetTutorLocation } from './useGetTutorLocation';
import { useGetTutorIndividualGroup } from './useGetTutorIndividualGroup';

function InfoContainer() {
	const { tutorPrice, isTutorPricePending } = useGetTutorPrice();
	const { tutorLocation, isTutorLocationPending } = useGetTutorLocation();
	const { tutorIndividualGroup, isTutorIndividualGroupPending } =
		useGetTutorIndividualGroup();
	const [modal, setModal] = useState(null);

	return (
		<>
			{!isTutorPricePending &&
			!isTutorLocationPending &&
			!isTutorIndividualGroupPending ? (
				<div className='flex flex-row flex-wrap gap-4 mt-6'>
					<InfoElement
						onClick={() => setModal('price')}
						title={<TitleElement title={'Cena'} logo={<CiBadgeDollar />} />}
					>
						{tutorPrice?.price} zł/godz
					</InfoElement>
					<InfoElement
						onClick={() => setModal('location')}
						title={
							<TitleElement title={'Lokalizacja'} logo={<CiLocationOn />} />
						}
					>
						{tutorLocation?.tutoring_location}
					</InfoElement>
					<InfoElement
						title={<TitleElement title={'Indywidualne'} logo={<CiUser />} />}
					>
						{tutorIndividualGroup?.individual_sessions
							? trueElement
							: falseElement}
					</InfoElement>
					<InfoElement
						title={<TitleElement title={'Grupowe'} logo={<CiSignpostDuo1 />} />}
					>
						{tutorIndividualGroup?.group_sessions ? trueElement : falseElement}
					</InfoElement>
					<InfoElement
						title={<TitleElement title={'Stacjonarne'} logo={<CiPen />} />}
					>
						{trueElement}
					</InfoElement>
					<InfoElement
						title={<TitleElement title={'Online'} logo={<CiDesktop />} />}
					>
						{trueElement}
					</InfoElement>
				</div>
			) : (
				<div className='h-20 flex justify-center items-center'>
					<Loader />
				</div>
			)}
			{modal && (
				<Modal>
					<InfoModalContainer
						setModal={setModal}
						modal={modal}
						tutorCurrentPrice={tutorPrice?.price}
						tutorCurrentLocation={tutorLocation?.tutoring_location}
					/>
				</Modal>
			)}
		</>
	);
}

export default InfoContainer;

const trueElement = (
	<span className='text-3xl text-teal-500'>
		<CiCircleCheck />
	</span>
);

const falseElement = (
	<span className='text-3xl text-red-500'>
		<CiCircleRemove />
	</span>
);
