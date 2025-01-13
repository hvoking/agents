// App imports
import './styles.scss';

// Context imports
import { useSearchEvents } from 'context/events/search';

export const Suggestions = () => {
	const { handleClick, suggestionIndex, setSuggestionIndex, suggestions, suggestionsActive } = useSearchEvents();

	if (!(suggestionsActive && suggestions)) return <></>

	return (
		<ul className="search-suggestions">
			{
				suggestions.slice(0, 5).map((suggestion: any, index: number) => {
					return (
						<li 
							key={index} 
							className="suggestions-item"
							onClick={(e: any) => handleClick(e, suggestion)} 
							onMouseEnter={() => setSuggestionIndex(index)}
							onMouseLeave={() => setSuggestionIndex(null)}
							style={{
								borderRadius: "5px",
								backgroundColor: index === suggestionIndex ? 
								"rgba(235, 235, 235, 1)" : 
								"rgba(255, 255, 255, 1)"
							}}
						>
							<div className="current-suggestion">
								<img 
									src={process.env.PUBLIC_URL + '/static/icons/pin.svg'} 
									alt="pin" 
									width="15px" 
									style={{alignSelf: "center"}}
								/>
								<div>{suggestion}</div>
							</div>
						</li>
					)
				})
			}
		</ul>
	)
};

Suggestions.displayName="Suggestions";