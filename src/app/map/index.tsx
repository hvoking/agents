// React imports
import { useState } from 'react';

// App imports
import { Tiles } from './tiles';
import { Mask } from './mask';

// Context imports
import { useGeo } from 'context/geo';
import { useMarkers } from 'context/markers';

// Third-party imports
import { Map } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

export const MapView = () => {
	const { markers, addMarker } = useMarkers();
	const { viewport, mapRef, mapStyle } = useGeo();

	const [ isMapLoaded, setIsMapLoaded ] = useState(false);
	
	return (
		<Map
			ref={mapRef}
			initialViewState={viewport}
			mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
			mapStyle={mapStyle}
			onLoad={() => setIsMapLoaded(true)}
			onClick={addMarker}
		>
			{isMapLoaded && 
				<>
					<Tiles/>
					{Object.entries(markers).map(([ key, marker ]: any) => 
						<Mask key={key} marker={marker}/>
					)}
				</>
			}
		</Map>
	)
}

MapView.displayName="MapView";