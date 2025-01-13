// React imports
import { useState, useContext, createContext } from 'react';

const MessageEventsContext: React.Context<any> = createContext(null);

export const useMessageEvents = () => useContext(MessageEventsContext)

export const MessageEventsProvider = ({children}: any) => {
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
		<MessageEventsContext.Provider value={{
			searchText, handleChange, cleanSuggestions, onKeyDown,
		}}>
			{children}
		</MessageEventsContext.Provider>
	)
}

MessageEventsContext.displayName = "MessageEventsContext";