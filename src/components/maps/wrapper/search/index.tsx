// React imports
import { useRef } from 'react';

// App imports
import { Suggestions } from './suggestions';
import { SearchIcon } from './icon';
import { Cross } from './cross';
import './styles.scss';

// Context imports
import { useGoogleSearchApi } from 'context/api/google/search';
import { useSearchEvents } from 'context/events/search';

export const Search = () => {
	const inputRef = useRef<any>(null);

	const { searchText } = useGoogleSearchApi();
	const { handleClick, handleChange, handleKeyDown, 
		cleanSuggestions,
		suggestionIndex,
		setSuggestionIndex,
		suggestions,
		suggestionsActive 
	} = useSearchEvents();

	return (
		<div className="search-wrapper">
			<div className="search-background">
				<SearchIcon/>
				<input 
					ref={inputRef}
					className="search-input"
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
						suggestionIndex={suggestionIndex} 
						setSuggestionIndex={setSuggestionIndex} 
						handleClick={handleClick}
					/>
				}
			</div>
		</div>
	)
}

Search.displayName="Search";