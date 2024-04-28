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
import { useGetTutorSessionMethod } from './useGetTutorSessionMethod';
import { useSetTutorIndividualGroup } from './useSetTutorIndividualGroup';
import { useSetTutorSessionMethod } from './useSetTutorSessionMethod';

function InfoContainer() {
	const { tutorPrice, isTutorPricePending } = useGetTutorPrice();
	const { tutorLocation, isTutorLocationPending } = useGetTutorLocation();
	const { tutorIndividualGroup, isTutorIndividualGroupPending } =
		useGetTutorIndividualGroup();
	const { setTutorIndividualGroup, isTutorIndividualGroupSetPending } =
		useSetTutorIndividualGroup();
	const { tutorSessionMethod, isTutorSessionMethodPending } =
		useGetTutorSessionMethod();
	const { setTutorSessionMethod, isTutorSessionMethodSetPending } =
		useSetTutorSessionMethod();

	const [modal, setModal] = useState(null);

	function handleSetIndividualGroup(type, isChecked) {
		if (type === 'individual') {
			setTutorIndividualGroup({ individualSession: !isChecked });
		}
		if (type === 'group') {
			setTutorIndividualGroup({ groupSession: !isChecked });
		}
		if (type === 'stationary') {
			setTutorSessionMethod({ stationarySession: !isChecked });
		}
		if (type === 'online') {
			setTutorSessionMethod({ onlineSession: !isChecked });
		}
	}

	return (
		<>
			{!isTutorPricePending &&
			!isTutorLocationPending &&
			!isTutorIndividualGroupPending &&
			!isTutorSessionMethodPending ? (
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
						onClick={() =>
							handleSetIndividualGroup(
								'individual',
								tutorIndividualGroup?.individual_sessions
							)
						}
						disabled={isTutorIndividualGroupSetPending}
						title={<TitleElement title={'Indywidualne'} logo={<CiUser />} />}
					>
						{tutorIndividualGroup?.individual_sessions
							? trueElement
							: falseElement}
					</InfoElement>
					<InfoElement
						onClick={() =>
							handleSetIndividualGroup(
								'group',
								tutorIndividualGroup?.group_sessions
							)
						}
						disabled={isTutorIndividualGroupSetPending}
						title={<TitleElement title={'Grupowe'} logo={<CiSignpostDuo1 />} />}
					>
						{tutorIndividualGroup?.group_sessions ? trueElement : falseElement}
					</InfoElement>
					<InfoElement
						onClick={() =>
							handleSetIndividualGroup(
								'stationary',
								tutorSessionMethod?.in_person_sessions_available
							)
						}
						disabled={isTutorSessionMethodSetPending}
						title={<TitleElement title={'Stacjonarne'} logo={<CiPen />} />}
					>
						{tutorSessionMethod?.in_person_sessions_available
							? trueElement
							: falseElement}
					</InfoElement>
					<InfoElement
						onClick={() =>
							handleSetIndividualGroup(
								'online',
								tutorSessionMethod?.online_sessions_available
							)
						}
						disabled={isTutorSessionMethodSetPending}
						title={<TitleElement title={'Online'} logo={<CiDesktop />} />}
					>
						{tutorSessionMethod?.online_sessions_available
							? trueElement
							: falseElement}
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
