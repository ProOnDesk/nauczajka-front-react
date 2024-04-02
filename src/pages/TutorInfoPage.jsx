import { useParams } from 'react-router';

function TutorInfoPage() {
	const { id } = useParams();
	return <div>{id}</div>;
}

export default TutorInfoPage;
