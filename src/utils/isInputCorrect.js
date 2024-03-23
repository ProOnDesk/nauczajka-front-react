export function validatePassword(password) {
	const passwordRegex =
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	if (!passwordRegex.test(password))
		return 'Incorrect password (min. 8 characters, at least 1 uppercase and lowercase letter, 1 number, 1 special character)';
	else return true;
}

export function validateRepeatPassword(password, repeatPassword) {
	if (password !== repeatPassword) return 'Niespójne Hasła';
	else return true;
}

export function validateEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) return 'Niepoprawny E-mail';
	else return true;
}
