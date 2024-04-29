import {
	CiBadgeDollar,
	CiDesktop,
	CiLocationOn,
	CiPen,
	CiSignpostDuo1,
	CiUser,
} from 'react-icons/ci';
import InfoElement from '../Settings/InfoElement';
import TitleElement from '../Settings/TitleElement';
import TrueElement from '../../ui/TrueElement';
import FalseElement from '../../ui/FalseElement';

function TutorInfoAboutSession({ tutorInfo }) {
	function TrueOrFalseElement(boolean) {
		if (boolean) return <TrueElement />;
		else return <FalseElement />;
	}

	return (
		<div className='flex flex-row flex-wrap gap-4 mt-6'>
			<InfoElement
				title={<TitleElement title={'Cena'} logo={<CiBadgeDollar />} />}
			>
				{tutorInfo?.price} zł/godz
			</InfoElement>
			<InfoElement
				title={<TitleElement title={'Lokalizacja'} logo={<CiLocationOn />} />}
			>
				{tutorInfo?.tutoring_location}
			</InfoElement>
			<InfoElement
				title={<TitleElement title={'Indywidualne'} logo={<CiUser />} />}
			>
				{TrueOrFalseElement(tutorInfo?.individual_sessions_available)}
			</InfoElement>
			<InfoElement
				title={<TitleElement title={'Grupowe'} logo={<CiSignpostDuo1 />} />}
			>
				{TrueOrFalseElement(tutorInfo?.group_sessions_available)}
			</InfoElement>
			<InfoElement
				title={<TitleElement title={'Stacjonarne'} logo={<CiPen />} />}
			>
				{TrueOrFalseElement(tutorInfo?.in_person_sessions_available)}
			</InfoElement>
			<InfoElement
				title={<TitleElement title={'Online'} logo={<CiDesktop />} />}
			>
				{TrueOrFalseElement(tutorInfo?.online_sessions_available)}
			</InfoElement>
		</div>
	);
}

export default TutorInfoAboutSession;
