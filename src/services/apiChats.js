import { API_KEY } from './apiAuth';

export async function getCurrentMessages(id) {
	const token = sessionStorage.getItem('auth_token');
	if (!token) return null;

	const response = await fetch(
		API_KEY + `/api/chat/conversation_detail/${id}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
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

export async function getAllConversations() {
	const token = sessionStorage.getItem('auth_token');
	if (!token) return null;
	const response = await fetch(API_KEY + `/api/chat/conversations/`, {
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
