import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import HomePage from './pages/HomePage';
import InstructorsPage from './pages/InstructorsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import toast, { Toaster, useToasterStore } from 'react-hot-toast';
import ConfirmEmailPage from './pages/ConfirmEmailPage';
import SettingsPage from './pages/SettingsPage';
import PasswordReset from './pages/PasswordResetPage';
import PasswordResetConfirmPage from './pages/PasswordResetConfirmPage';
import TutorInfoPage from './pages/TutorInfoPage';
import Page404 from './pages/Page404';
import ChatsContextProvider from './context/ChatsContext';
import { useEffect } from 'react';
import ColorProvider from './context/FooterContext';


const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
		},
	},
});

const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{ path: '', element: <HomePage /> },
			{ path: 'instructors', element: <InstructorsPage /> },
			{ path: 'instructors/:id', element: <TutorInfoPage /> },
			{ path: 'login', element: <LoginPage /> },
			{ path: 'register', element: <RegisterPage /> },
			{ path: 'settings', element: <SettingsPage /> },
			{ path: 'account/confirm-email', element: <ConfirmEmailPage /> },
			{ path: 'account/reset', element: <PasswordReset /> },
			{ path: 'account/reset-password', element: <PasswordResetConfirmPage /> },
			{ path: '*', element: <Page404 /> },
		],
	},
]);

function App() {
	const { toasts } = useToasterStore();

	const TOAST_LIMIT = 3;

	useEffect(() => {
		toasts
			.filter((t) => t.visible)
			.filter((_, i) => i >= TOAST_LIMIT)
			.forEach((t) => toast.dismiss(t.id));
	}, [toasts]);
	return (
		<QueryClientProvider client={queryClient}>
			<ChatsContextProvider>
			<ColorProvider>
				<RouterProvider router={router} />
			</ColorProvider>
				<ReactQueryDevtools initialIsOpen={false} />
				<Toaster
					position='top-center'
					gutter={12}
					containerStyle={{ margin: '8px' }}
					toastOptions={{
						success: {
							duration: 3000,
						},
						error: {
							duration: 3000,
						},
						style: {
							zIndex: 1000,
							fontSize: '16px',
							maxWidth: '500px',
							padding: '16px 20px',
						},
					}}
				/>
			</ChatsContextProvider>

		</QueryClientProvider>
	);
}

export default App;
