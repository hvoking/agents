// React imports
import { useState } from 'react';

// App imports
import { Points } from './points'
import './styles.scss';

// Context imports
import { useMapbox } from 'context/maps/mapbox';

// Third-party imports
import 'mapbox-gl/dist/mapbox-gl.css';
import { Map } from 'react-map-gl';

export const MapContainer = () => {
	const { viewport, mapStyle } = useMapbox();
	const [ isMapLoaded, setIsMapLoaded ] = useState(false);

	return (
		<div className="results-map-container">
			<Map
				initialViewState={{...viewport, zoom: 2}}
				mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
				mapStyle={mapStyle}
				onLoad={() => setIsMapLoaded(true)}
			>	
				{isMapLoaded && <Points/>}
			</Map>
		</div>
	)
}

MapContainer.displayName="MapContainer";