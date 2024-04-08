import { useUserData } from '../features/Auth/useUserData';
import TutorInfo from '../features/Settings/TutorInfo';
import UserInfo from '../features/Settings/UserInfo';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

function SettingsPage() {
	const { data: user } = useUserData();
	const navigate = useNavigate();

	useEffect(() => {
		if (user === null) {
			navigate('/');
		}
	}, [navigate, user]);

	return (
		<div className='max-w-7xl mx-auto w-full'>
			{user?.is_tutor === true ? (
				<div className='flex flex-wrap justify-center w-full flex-row pt-10'>
					<div className='min-w-64 sm400:w-4/5 md:w-2/5 md:px-2 w-full mx-auto'>
						<UserInfo user={user} />
					</div>
					<div className='w-full  md:w-3/5 '>
						<TutorInfo />
					</div>
				</div>
			) : (
				<div className='w-full sm400:w-2/3 md:w-96'>
					<UserInfo user={user} />
				</div>
			)}
		</div>
	);
}

export default SettingsPage;
