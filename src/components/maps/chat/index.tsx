// App imports
import { Messages } from './messages';
import './styles.scss';

// Third-party imports
import { Popup } from 'react-map-gl/mapbox';

export const Chat = ({ coords }: any) => {
	if (!coords) return <></>;

	const { lng, lat } = coords;

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