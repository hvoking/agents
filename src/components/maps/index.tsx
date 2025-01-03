// React imports
import { useState } from 'react';

// App imports
import { Tiles } from './tiles';
import { Mask } from './mask';
import { Wrapper } from './wrapper';

// Context imports
import { useGeo } from 'context/geo';
import { useMapEvents } from 'context/events/maps';
import { useMarkers } from 'context/agents/markers';

// Third-party imports
import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const MapContainer = () => {
	const { viewport, mapRef, mapStyle } = useGeo();
	const { addAgent } = useMapEvents();
	const { markers } = useMarkers();
	
	const [ isMapLoaded, setIsMapLoaded ] = useState(false);

	return (
		<Wrapper> 
		  <Map
			  ref={mapRef}
			  initialViewState={viewport}
			  mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
			  mapStyle={mapStyle}
			  onClick={addAgent}
			  onLoad={() => setIsMapLoaded(true)}
			>
				{isMapLoaded && <>
					<Tiles/>
					{markers.length > 0 && 
						markers.map((marker: any) => <Mask key={marker.id} marker={marker}/>)
					}
				</>}
			</Map>
		</Wrapper>
	)
}