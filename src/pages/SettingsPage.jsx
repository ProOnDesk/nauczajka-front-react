import { useUserData } from '../features/Auth/useUserData';
import TutorInfo from '../features/Settings/TutorInfo';
import UserInfo from '../features/Settings/UserInfo';

function SettingsPage() {
	const { data: user } = useUserData();
	return (
		<div className='max-w-7xl mx-auto flex flex-wrap justify-center w-full flex-row pt-10'>
			{user?.is_tutor === true ? (
				<>
					<div className='min-w-64 sm400:w-4/5 md:w-2/5 md:px-2 xl:: w-full mx-auto'>
						<UserInfo user={user} />
					</div>
					<div className='w-full  md:w-3/5 '>
						<TutorInfo />
					</div>
				</>
			) : (
				<div className='w-full sm400:w-2/3 md:w-96'>
					<UserInfo user={user} />
				</div>
			)}
		</div>
	);
}

export default SettingsPage;
