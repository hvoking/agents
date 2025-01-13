// React imports
import { useRef } from 'react';

// App imports
import { Arrow } from './arrow';
import './styles.scss';

// Context imports
import { useMessageEvents } from 'context/events/message';

// Third-party imports
import { Popup } from 'react-map-gl';

export const Message = ({ coords }: any) => {
	const { lng, lat } = coords;
	
	const inputRef = useRef<any>(null);
	const { searchText, handleChange, onKeyDown, cleanSuggestions } = useMessageEvents();

	return (
		<Popup longitude={lng} latitude={lat} closeButton={false}>
			<div className="message-wrapper">
				<div className="message-background">
					<img 
						src={process.env.PUBLIC_URL + "/static/icons/search.svg"}
						alt="search" 
						width="20px"
					/>
					<input 
						ref={inputRef}
						className="search-input"
						type="text" 
						placeholder="Message Agent"
						value={searchText}
						onChange={handleChange}
						spellCheck={false}
						onKeyDown={onKeyDown}
					/>
					<Arrow cleanSuggestions={cleanSuggestions}/>
				</div>
			</div>
		</Popup>
	)
}

Message.displayName="Message";