// App imports
import { Trash } from './trash';
import { Path } from './path';

// Context imports
import { useMarkerEvents } from 'context/marker/events';

// Third-party imports
import { Marker } from 'react-map-gl';

export const Pin = ({ 
	index, 
	marker, 
	currentMarker, 
	setCurrentMarker, 
	markers, 
	setMarkers, 
	fillColor, 
	setFillColor, 
	activeTrash, 
	setRejectedMarkers 
}: any) => {
	const { onDragStart, onClick, onDrag, addRejectedId } = useMarkerEvents()
	const { id, color, latitude, longitude } = marker;

	const isCurrentMarker = currentMarker && id === currentMarker.id;
	const currentFill = !currentMarker ? marker.color : isCurrentMarker ? fillColor : color;
	const currentOpacity = !currentMarker || isCurrentMarker ? 1 : 0.6;

	return (
			<Marker
				key={index}
				longitude={longitude}
				latitude={latitude}
				anchor="bottom"
				draggable
				onDragStart={() => onDragStart(marker)}
				onDrag={(e: any) => onDrag(e, marker)}
			>
		      <svg 
		      	viewBox="0 0 45.1 63.3"
		      	width="25px" 
		      	fill={currentFill}
		      	opacity={currentOpacity}
		      	onClick={() => onClick(marker)}
		      >
		      	<Path/>
		      </svg>
		      {activeTrash && <Trash 
		      	marker={marker} 
		      	addRejectedId={(e: any) => addRejectedId(e, marker)}
		      />}
		    </Marker>
	)
}

Pin.displayName="Pin";