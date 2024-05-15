import { createContext, useState } from 'react';

export const ChatsContext = createContext({});

export default function ChatsContextProvider({ children }) {
	const [isChatOpen, setIsChatOpen] = useState(false);
	const [choosenUser, setChoosenUser] = useState(null);

	const value = { isChatOpen, setIsChatOpen, choosenUser, setChoosenUser };
	return (
		<ChatsContext.Provider value={value}>{children}</ChatsContext.Provider>
	);
}
