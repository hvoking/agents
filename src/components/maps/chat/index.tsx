// App imports
import { Messages } from './messages';
import './styles.scss';

// Context imports
import { useBoundaryEvents } from 'context/events/boundary';

// Third-party imports
import { Popup } from 'react-map-gl/mapbox';

export const Chat = () => {
	const { messageCoords } = useBoundaryEvents();
	
	if (!messageCoords) return <></>;

	const { lng, lat } = messageCoords;

	return (
		<Popup 
			longitude={lng} 
			latitude={lat} 
			closeButton={false}
			anchor="top"
		>
			<Messages/>
		</Popup>
	)
}

Chat.displayName="Chat";