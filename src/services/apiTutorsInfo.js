import { API_KEY } from './apiAuth';

export async function getAllTutors({
	avgRatingGt,
	avgRatingLt,
	groupSession,
	personSession,
	individualSession,
	onlineSession,
	priceGt,
	priceLt,
	searchByFullName,
	skills,
	avgRating,
	hourlyPrice,
	location,
	signal,
}) {
	let skillsList = '';
	if (skills.length > 0) {
		skillsList = skills.reduce((acc, skill) => {
			return acc.concat('&skills=', skill);
		}, '');
	}
	let additionalFilters = '?';

	if (avgRatingGt) {
		additionalFilters += additionalFilters.concat(
			'&avg_rating__gt=',
			avgRatingGt
		);
	}
	if (avgRatingLt) {
		additionalFilters += additionalFilters.concat(
			'&avg_rating__lt=',
			avgRatingLt
		);
	}
	if (groupSession) {
		additionalFilters += additionalFilters.concat(
			'&group_sessions_available=',
			groupSession
		);
	}
	if (personSession) {
		additionalFilters += additionalFilters.concat(
			'&in_person_sessions_available=',
			personSession
		);
	}
	if (individualSession) {
		additionalFilters += additionalFilters.concat(
			'&individual_sessions_available=',
			individualSession
		);
	}
	if (onlineSession) {
		additionalFilters += additionalFilters.concat(
			'&online_sessions_available=',
			onlineSession
		);
	}
	if (priceGt) {
		additionalFilters += additionalFilters.concat('&price__gt=', priceGt);
	}
	if (priceLt) {
		additionalFilters += additionalFilters.concat('&price__lt=', priceLt);
	}
	if (searchByFullName) {
		additionalFilters += additionalFilters.concat(
			'&search_by_full_name=',
			searchByFullName
		);
	}
	if (avgRating) {
		additionalFilters += additionalFilters.concat(
			'&sorting_by_average_rating=',
			avgRating
		);
	}
	if (hourlyPrice) {
		additionalFilters += additionalFilters.concat(
			'&sorting_by_hourly_rate=',
			hourlyPrice
		);
	}
	if (location) {
		additionalFilters += additionalFilters.concat(
			'&tutoring_location=',
			location
		);
	}

	const response = await fetch(
		API_KEY + `/api/user/tutor/search/${additionalFilters}${skillsList}`,
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

export async function setTutorLocation({ tutorLocation }) {
	const token = sessionStorage.getItem('auth_token');
	if (!token) return null;
	const response = await fetch(API_KEY + `/api/user/tutor/location/me/`, {
		method: 'PATCH',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			tutoring_location: tutorLocation,
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

export async function getTutorIndividualGroup() {
	const token = sessionStorage.getItem('auth_token');
	if (!token) return null;
	const response = await fetch(
		API_KEY + `/api/user/tutor/individual_group/me/`,
		{
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
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

export async function setTutorIndividualGroup({
	individualSession,
	groupSession,
}) {
	const token = sessionStorage.getItem('auth_token');
	if (!token) return null;
	const response = await fetch(
		API_KEY + `/api/user/tutor/individual_group/me/`,
		{
			method: 'PATCH',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				individual_sessions_available: individualSession,
				group_sessions_available: groupSession,
			}),
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

export async function getTutorSessionMethod() {
	const token = sessionStorage.getItem('auth_token');
	if (!token) return null;
	const response = await fetch(
		API_KEY + `/api/user/tutor/method_session_availability/me/`,
		{
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
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

export async function setTutorSessionMethod({
	onlineSession,
	stationarySession,
}) {
	const token = sessionStorage.getItem('auth_token');
	if (!token) return null;
	const response = await fetch(
		API_KEY + `/api/user/tutor/method_session_availability/me/`,
		{
			method: 'PATCH',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				online_sessions_available: onlineSession,
				in_person_sessions_available: stationarySession,
			}),
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
