// App imports
import { Trash } from './trash';
import { Path } from './path';

// Third-party imports
import { Marker } from 'react-map-gl';

export const Pin = ({ index, marker, currentMarker, setCurrentMarker, markers, setMarkers, fillColor, setFillColor, activeTrash,setRejectedMarkers }: any) => {
	const { id, color, latitude, longitude } = marker;

	const isCurrentMarker = currentMarker && id === currentMarker.id;
	const currentFill = !currentMarker ? marker.color : isCurrentMarker ? fillColor : color;
	const currentOpacity = !currentMarker || isCurrentMarker ? 1 : 0.6;

	const onDragStart = () => {
		setFillColor(color)
		setCurrentMarker(marker);
	} 
	const onClick = () => {
		setFillColor(color)
		setCurrentMarker(marker);
	}

	const onDrag = (event: any) => {
		const lat = event.lngLat.lat;
		const lng = event.lngLat.lng;

		const updatedMarkers = markers.map((previousMarker: any) => {
			const isCurrentMarker = previousMarker.id === id;
			
			if (isCurrentMarker) {
				const updatedMarker = {...previousMarker, latitude: lat, longitude: lng};
				setCurrentMarker(updatedMarker)
				return updatedMarker
			}
			
			return previousMarker
		});
        setMarkers(updatedMarkers);
    }

    const addRejectedId = (e: any, item: any) => {
    	e.stopPropagation();
    	currentMarker === item && setCurrentMarker(null);
    	setRejectedMarkers((prev: any) => [...prev, marker]);
    }

	return (
			<Marker
				key={index}
				longitude={longitude}
				latitude={latitude}
				anchor="bottom"
				draggable
				onDragStart={onDragStart}
				onDrag={onDrag}
			>
		      <svg 
		      	viewBox="0 0 45.1 63.3"
		      	width="25px" 
		      	fill={currentFill}
		      	opacity={currentOpacity}
		      	onClick={onClick}
		      >
		      	<Path/>
		      </svg>
		      {activeTrash && <Trash 
		      	marker={marker} 
		      	addRejectedId={addRejectedId}
		      />}
		    </Marker>
	)
}

Pin.displayName="Pin";