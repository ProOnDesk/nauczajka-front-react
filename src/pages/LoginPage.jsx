import toast from 'react-hot-toast';

function LoginPage() {
	const notify = () => toast.success('Here is your toast.');
	return (
		<div>
			<p>Tutaj bedzie logowanie</p>
			<button onClick={notify}>Make me a toast</button>
		</div>
	);
}

export default LoginPage;
