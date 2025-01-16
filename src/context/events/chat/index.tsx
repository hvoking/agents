// React imports
import { useState, useContext, createContext } from 'react';

const ChatEventsContext: React.Context<any> = createContext(null);

export const useChatEvents = () => useContext(ChatEventsContext)

export const ChatEventsProvider = ({children}: any) => {
	const [ searchText, setSearchText ] = useState<any>(null);
	
	const handleChange = (e: any) => {
		const query = e.target.value;
		setSearchText(query);
	};

	const cleanSuggestions = () => {
		setSearchText("");
	}

	const onKeyDown = (e: any) => {
		// scape
		if (e.keyCode === 27) {
			setSearchText("");
		}
	};

	return (
		<ChatEventsContext.Provider value={{
			searchText, handleChange, cleanSuggestions, onKeyDown,
		}}>
			{children}
		</ChatEventsContext.Provider>
	)
}

ChatEventsContext.displayName = "ChatEventsContext";