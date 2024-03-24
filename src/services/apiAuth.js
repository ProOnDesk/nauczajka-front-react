const API_KEY = 'http://localhost:8000';

export async function verifyUser(verifyToken) {
	const response = await fetch(API_KEY + '/api/user/confirm_user/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ token: verifyToken }),
	});
	if (!response.ok) {
		const bodyText = await response.text();
		throw new Error(`${bodyText}`);
	}
}
