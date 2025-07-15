// React imports
import { useState } from 'react';

// App imports
import { Tiles } from './tiles';
import { Tooltip } from './tooltip';
import { Chat } from './chat';
import { Layers } from './layers';

// Context imports
import { useGeo } from 'context/geo';
import { useBoundary } from 'context/events/boundary';
import { useMarkers } from 'context/markers';

// Third-party imports
import { Map } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

export const MapView = () => {
	const { markers } = useMarkers();
	const { viewport, mapRef, mapStyle } = useGeo();
	const { onContextMenu, onClick } = useBoundary();

	const [ isMapLoaded, setIsMapLoaded ] = useState(false);
	
	return (
		<Map
			ref={mapRef}
			initialViewState={viewport}
			mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
			mapStyle={mapStyle}
			onLoad={() => setIsMapLoaded(true)}
			onClick={onClick}
			onContextMenu={onContextMenu}
		>
			{isMapLoaded && 
				<>
					<Tiles/>
					{Object.entries(markers).map(([ key, marker ]: any) => 
						<Layers key={key} marker={marker}/>
					)}
					<Tooltip/>
					<Chat/>
				</>
			}
		</Map>
	)
}

MapView.displayName="MapView";