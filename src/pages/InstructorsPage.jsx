import { useRefreshToken } from '../features/Auth/useRefreshToken';
import Button from '../ui/Inputs/Button';

function InstructorsPage() {
	const { refreshToken } = useRefreshToken();
	return (
		<div>
			<p>Tutaj beda instruktorzy</p>
			<Button onClick={refreshToken}>Refresh</Button>
		</div>
	);
}

export default InstructorsPage;
