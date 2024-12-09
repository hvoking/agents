// React imports
import { useState, useRef } from 'react';

// App imports
import { Suggestions } from './suggestions';
import { SearchIcon } from './icon';
import { Cross } from './cross';
import './styles.scss';

// Context imports
import { useSearchEvents } from 'context/events/search';
import { useGoogleSearchApi } from 'context/api/google/search';

export const Search = () => {
	const { searchText } = useGoogleSearchApi();
	const { 
		handleChange, 
		handleKeyDown, 
		cleanSuggestions, 
		getCurrentPrediction, 
		handleClick, 
		suggestionIndex, setSuggestionIndex, 
		suggestions,
		suggestionsActive
	} = useSearchEvents();

	const inputRef = useRef<any>(null);

	return (
		<div className="maps-search-wrapper">
			<div className="maps-search">
				<SearchIcon/>
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
				<Cross cleanSuggestions={cleanSuggestions}/>
				{suggestionsActive && suggestions &&
					<Suggestions 
						suggestions={suggestions}
						setSuggestionIndex={setSuggestionIndex}
						suggestionIndex={suggestionIndex}
						handleClick={handleClick}
					/>
				}
			</div>
		</div>
	)
}

Search.displayName="Search";