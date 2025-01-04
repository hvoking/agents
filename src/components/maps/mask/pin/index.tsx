// App imports
import './styles.scss';

// Context imports
import { useMarkerEvents } from 'context/events/marker';

// Third-party imports
import { Marker } from 'react-map-gl';

export const Pin = ({ marker }: any) => {
	const { handleMarkerEvent, onDrag } = useMarkerEvents();
	const { id, latitude, longitude, image, provider } = marker;

	return (
		<Marker
			key={id}
			longitude={longitude}
			latitude={latitude}
			anchor="bottom"
			draggable
			onClick={() => handleMarkerEvent(id)}
            onDragStart={() => handleMarkerEvent(id)}
            onDrag={(e: any) => onDrag(e, id)}
		>
			<div className="map-marker">
				<img 
					src={image} 
					alt="agent-avatar" 
					width="100%"
				/>
				<div className="map-marker-provider">
					{provider}
				</div>
			</div>
	    </Marker>
	)
}

Pin.displayName="Pin";