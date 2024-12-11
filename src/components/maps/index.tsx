// React imports
import { useState } from 'react';

// App imports
import { Tiles } from './tiles';
import { Agent } from './agent';
import { Path } from './path';
import { UserPin } from './userPin';
import { Isochrone } from './iso';
import { Wrapper } from './wrapper';

// Context imports
import { useMapEvents } from 'context/events/maps';
import { useMarkers } from 'context/maps/markers';
import { useMapbox } from 'context/maps/mapbox';

// Third-party imports
import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const MapContainer = () => {
	const { isDragging, onDragStart, onMouseMove, onDragEnd, onClick } = useMapEvents();
	const { viewport, mapRef, mapStyle } = useMapbox();
	const { currentMarker, markers, rejectedMarkers } = useMarkers();
	const [ isMapLoaded, setIsMapLoaded ] = useState(false);

	return (
		<Wrapper> 
		  <Map
			  ref={mapRef}
			  initialViewState={viewport}
			  mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
			  mapStyle={mapStyle}
			  onClick={onClick}
			  onMouseDown={onDragStart}
			  onMouseMove={onMouseMove}
			  onMouseUp={onDragEnd}
			  onTouchStart={onDragStart}
			  onTouchMove={onMouseMove}
			  onTouchEnd={onDragEnd}
			  dragPan={!isDragging}
			  onLoad={() => setIsMapLoaded(true)}
			>
			  <UserPin/>
			  {currentMarker && <Isochrone currentMarker={currentMarker}/>}
			  {isMapLoaded && <Agent/>}
			  {isMapLoaded && markers && <Path markers={markers} rejectedMarkers={rejectedMarkers}/>}
			  {isMapLoaded && <Tiles/>}
			</Map>
		</Wrapper>
	)
}