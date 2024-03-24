const API_KEY = 'http://localhost:8000';

export async function registerUser({
	email,
	firstName,
	lastName,
	password,
	isTutor,
}) {
	const response = await fetch(API_KEY + '/api/user/create/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email: email,
			first_name: firstName,
			last_name: lastName,
			password: password,
			is_tutor: isTutor === 'true' ? true : false,
		}),
	});
	if (response.ok) {
		const data = await response.json();
		return data;
	} else {
		const bodyText = await response.text();
		throw new Error(`${bodyText}`);
	}
}

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

export async function loginUser({ email, password }) {
	const response = await fetch(API_KEY + '/api/token/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email: email,
			password: password,
		}),
	});
	if (response.ok) {
		const data = await response.json();
		return data;
	} else {
		const bodyText = await response.text();
		throw new Error(`${bodyText}`);
	}
}
