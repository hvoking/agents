// React imports
import { useCallback } from 'react';

// App imports
import { Path } from './path';

// Context imports
import { useMapbox } from '../../../../context/maps/mapbox';
import { useMarkers } from '../../../../context/maps/markers';

// Third-party imports
import { Marker } from 'react-map-gl';

export const UserPin = () => {
	const { viewport, setViewport } = useMapbox();
	const { setCurrentMarker } = useMarkers();

	const onMarkerDragEnd = useCallback((event: any) => {
		const lat = event.lngLat.lat;
		const lng = event.lngLat.lng;
	    setViewport({...viewport, longitude: lng, latitude: lat});
	}, []);

	return (
			<Marker
				longitude={viewport.longitude}
				latitude={viewport.latitude}
				anchor="bottom"
				draggable
				onDragEnd={onMarkerDragEnd}
				onClick={() => setCurrentMarker(null)}
			>
		      <svg 
		      	viewBox="0 0 45.1 63.3"
		      	width="30px" 
		      	fill="rgba(33, 33, 43, 1)"
		      >
		        <Path/>
		      </svg>
		    </Marker>
	)
}

UserPin.displayName="UserPin";