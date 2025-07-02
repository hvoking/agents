// React imports
import { useState } from 'react';

// App imports
import { Tiles } from './tiles';
import { Layers } from './layers';
import { Tooltip } from './tooltip';
import { Chat } from './chat';

// Context imports
import { useGeo } from 'context/geo';
import { useBoundary } from 'context/boundary';

// Third-party imports
import { Map } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

export const Maps = () => {
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
					<Layers/>
					<Tooltip/>
					<Chat/>
				</>
			}
		</Map>
	)
}

Maps.displayName="Maps";