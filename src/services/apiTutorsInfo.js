import { API_KEY } from './apiAuth';

export async function getAllTutors({
	avgRatingGt,
	avgRatingLt,
	searchByFullName,
	skills,
	signal,
}) {
	let skillsList = '';
	if (skills.length > 0) {
		skillsList = skills.reduce((acc, skill) => {
			return acc.concat('&skills=', skill);
		}, '');
	}

	const response = await fetch(
		API_KEY +
			`/api/user/tutor/search/?avg_rating__gt=${avgRatingGt}&avg_rating__lt=${avgRatingLt}&search_by_full_name=${searchByFullName}${skillsList}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			signal: signal,
		}
	);

	if (response.ok) {
		const data = await response.json();
		return data;
	} else {
		const bodyText = await response.text();
		throw new Error(`${bodyText}`);
	}
}

export async function getTutorInfo({ tutorId }) {
	const response = await fetch(
		API_KEY + `/api/user/tutor/details/${tutorId}/`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);
	if (response.ok) {
		const data = await response.json();
		return data;
	} else {
		const bodyText = await response.text();
		throw new Error(`${bodyText}`);
	}
}

export async function rateTutor({ rating, review, id }) {
	const token = sessionStorage.getItem('auth_token');
	if (!token) return null;
	const response = await fetch(API_KEY + `/api/user/rate_tutor/${id}/`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ rating: rating, review: review }),
	});

	if (response.ok) {
		const data = await response.json();
		return data;
	} else {
		const bodyText = await response.text();
		throw new Error(`${bodyText}`);
	}
}

export async function getTutorPrice() {
	const token = sessionStorage.getItem('auth_token');
	if (!token) return null;
	const response = await fetch(API_KEY + `/api/user/tutor/price/me/`, {
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

export async function setTutorPrice({ price }) {
	const token = sessionStorage.getItem('auth_token');
	if (!token) return null;
	const response = await fetch(API_KEY + `/api/user/tutor/price/me/`, {
		method: 'PATCH',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			price: price,
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

export async function getTutorLocation() {
	const token = sessionStorage.getItem('auth_token');
	if (!token) return null;
	const response = await fetch(API_KEY + `/api/user/tutor/location/me/`, {
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
