// React imports
import { useRef } from 'react';

// Context imports
import { useSearchEvents } from 'context/events/search';
import { useGoogleSearchApi } from 'context/api/google/search';

export const SearchInput = () => {
	const inputRef = useRef<any>(null);
	const { handleChange, handleKeyDown } = useSearchEvents();
	const { searchText } = useGoogleSearchApi();

	return (
		<input 
			ref={inputRef}
			className="maps-input"
			type="text" 
			placeholder="Find a place"
			value={searchText}
			onChange={handleChange}
			onKeyDown={handleKeyDown}
			spellCheck={false}
		/>
	)
}

SearchInput.displayName="SearchInput";