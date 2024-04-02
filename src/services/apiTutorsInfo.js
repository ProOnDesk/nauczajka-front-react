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
