export function validatePassword(password) {
	const passwordRegex =
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	if (!passwordRegex.test(password)) return 'Słabe Hasło';
	else return true;
}

export function validateRepeatPassword(password, repeatPassword) {
	if (password !== repeatPassword) return 'Niespójne Hasła';
	else return true;
}

export function validateEmail(email, isTutor) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) return 'Niepoprawny E-mail';
	if (isTutor === 'true') {
		const tutorEmailRegex = /^(.+)@(prz\.edu\.pl|stud\.prz\.edu\.pl)$/;
		if (!tutorEmailRegex.test(email)) return 'Niepoporawny E-mail';
	}
	return true;
}
