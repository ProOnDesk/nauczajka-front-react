import { useUserData } from '../features/Auth/useUserData';
import UserInfo from '../features/Settings/UserInfo';

function SettingsPage() {
	const { data: user } = useUserData();
	return (
		<div className='max-w-96 mx-auto w-full flex flex-col pt-10 md:pt-20'>
			<UserInfo user={user} />
		</div>
	);
}

export default SettingsPage;
