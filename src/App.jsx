import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import HomePage from './pages/HomePage';
import InstructorsPage from './pages/InstructorsPage';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{ path: '', element: <HomePage /> },
			{ path: 'instructors', element: <InstructorsPage /> },
			{ path: 'login', element: <LoginPage /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
