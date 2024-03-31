import toast from 'react-hot-toast';

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

export async function refreshToken(refreshToken) {
	if (!refreshToken) return null;
	const response = await fetch(API_KEY + '/api/token/refresh/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ refresh: refreshToken }),
	});
	if (response.ok) {
		const data = await response.json();
		return data;
	} else {
		const bodyText = await response.text();
		throw new Error(`${bodyText}`);
	}
}

export async function getUserData() {
	const token = sessionStorage.getItem('auth_token');
	if (!token) return null;
	const response = await fetch(API_KEY + '/api/user/profile/', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
	});
	if (response.ok) {
		const data = await response.json();
		return data;
	} else {
		const bodyText = await response.text();
		throw new Error(`${bodyText}`);
	}
}

export async function resetPassword(email) {
	const response = await fetch(API_KEY + '/api/user/password_reset/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email: email }),
	});
	if (response.ok) {
		const data = await response.json();
		return data;
	} else {
		const bodyText = await response.text();
		throw new Error(`${bodyText}`);
	}
}

export async function resetPasswordConfrim({ password, token }) {
	const response = await fetch(API_KEY + '/api/user/password_reset/confirm/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ password: password, token: token }),
	});
	if (response.ok) {
		const data = await response.json();
		return data;
	} else {
		const bodyText = await response.text();
		throw new Error(`${bodyText}`);
	}
}

export async function checkPassword(password) {
	const token = sessionStorage.getItem('auth_token');
	if (!token) {
		return null;
	}
	const response = await fetch(API_KEY + '/api/user/check_password/', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
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

export async function updateUser({ fieldToUpdate, valueToUpdate, password }) {
	if (fieldToUpdate === 'password') {
		const data = await checkPassword(password);
		if (!data.password_matches) {
			toast.error('Invalid Password');
			throw new Error('Invalid password');
		}
	}

	const token = sessionStorage.getItem('auth_token');
	if (!token) {
		return null;
	}

	const response = await fetch(API_KEY + '/api/user/profile/', {
		method: 'PATCH',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			[fieldToUpdate]: valueToUpdate,
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

export async function deleteUser(password) {
	const data = await checkPassword(password);
	if (!data.password_matches) {
		throw new Error('Złe Hasło');
	}

	const token = sessionStorage.getItem('auth_token');
	if (!token) {
		return null;
	}
	const response = await fetch(API_KEY + '/api/user/delete/', {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	if (response.ok) {
		return null;
	} else {
		const bodyText = await response.text();
		throw new Error(`${bodyText}`);
	}
}

export async function updateAvatar(image) {
	const token = sessionStorage.getItem('auth_token');
	if (!token) {
		return null;
	}
	const formData = new FormData();
	formData.append('profile_image', image);

	const response = await fetch(API_KEY + '/api/user/profile_image/', {
		method: 'PATCH',
		headers: {
			Authorization: `Bearer ${token}`,
		},
		body: formData,
	});
	if (response.ok) {
		const data = await response.json();
		return data;
	} else {
		const bodyText = await response.text();
		throw new Error(`${bodyText}`);
	}
}

export async function updateDescription(description) {
	const token = sessionStorage.getItem('auth_token');
	if (!token) {
		return null;
	}
	const response = await fetch(API_KEY + '/api/user/tutor/description/me/', {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({
			description: description,
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

export async function getDescription() {
	const token = sessionStorage.getItem('auth_token');
	if (!token) {
		return null;
	}
	const response = await fetch(API_KEY + '/api/user/tutor/description/me/', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	if (response.ok) {
		const data = await response.json();
		return data;
	} else {
		const bodyText = await response.text();
		throw new Error(`${bodyText}`);
	}
}

export async function getAllAvailableSkills() {
	const token = sessionStorage.getItem('auth_token');
	if (!token) {
		return null;
	}
	const response = await fetch(API_KEY + '/api/user/tutor/skills/', {
		method: 'GET',
	});

	if (response.ok) {
		const data = await response.json();
		return data;
	} else {
		const bodyText = await response.text();
		throw new Error(`${bodyText}`);
	}
}

export async function getTutorSkills() {
	const token = sessionStorage.getItem('auth_token');
	if (!token) {
		return null;
	}
	const response = await fetch(API_KEY + '/api/user/tutor/skills/me/', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	if (response.ok) {
		const data = await response.json();
		return data;
	} else {
		const bodyText = await response.text();
		throw new Error(`${bodyText}`);
	}
}

export async function addTutorSkills(skills) {
	const token = sessionStorage.getItem('auth_token');
	if (!token) {
		return null;
	}
	const response = await fetch(API_KEY + '/api/user/tutor/skills/me/', {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({
			skills: skills,
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

export async function addShedule({ startTime, endTime }) {
	const token = sessionStorage.getItem('auth_token');
	if (!token) {
		return null;
	}
	const response = await fetch(API_KEY + '/api/user/tutor/schedule/me/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({
			start_time: startTime,
			end_time: endTime,
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
