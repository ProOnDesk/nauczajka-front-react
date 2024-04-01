import { API_KEY } from './apiAuth';

export async function getAllTutors({
	avgRatingGt,
	avgRatingLt,
	searchByFullName,
	skills,
}) {
	const response = await fetch(API_KEY + '/api/user/tutor/search/', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			avg_rating__gt: avgRatingGt,
			avg_rating__lt: avgRatingLt,
			search_by_full_name: searchByFullName,
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
