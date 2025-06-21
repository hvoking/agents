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

	return (
		<ChatEventsContext.Provider value={{
			searchText, 
			setSearchText,
			handleChange, 
			cleanSuggestions,
		}}>
			{children}
		</ChatEventsContext.Provider>
	)
}

ChatEventsContext.displayName = "ChatEventsContext";