// React imports
import { useState } from 'react';

// App imports
import { Tiles } from './tiles';
import { Mask } from './mask';
import { Wrapper } from './wrapper';
import { Tooltip } from './tooltip';
import { Chat } from './chat';

// Context imports
import { useGeo } from 'context/geo';
import { useMapEvents } from 'context/events/maps';
import { useBoundaryEvents } from 'context/events/boundary';
import { useMarkers } from 'context/markers';

// Third-party imports
import { Map } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

export const MapContainer = () => {
	const { markers } = useMarkers();
	const { viewport, mapRef, mapStyle } = useGeo();
	const { addAgent } = useMapEvents();
	const { onContextMenu, optionsCoords, setOptionsCoords, messageCoords, addChatbot } = useBoundaryEvents();
	
	const [ isMapLoaded, setIsMapLoaded ] = useState(false);

	const onClick = (event: any) => {
		setOptionsCoords(null);
		addChatbot(event);
		addAgent(event);
	}

	const onLoad = () => setIsMapLoaded(true);
	
	return (
		<Wrapper> 
			<Map
				ref={mapRef}
				initialViewState={viewport}
				mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
				mapStyle={mapStyle}
				onClick={onClick}
				onLoad={onLoad}
				onContextMenu={onContextMenu}
			>
				{isMapLoaded && 
					<>
						<Tiles/>
						{Object.entries(markers).map(([ key, value ]: any) => 
							<Mask key={key} marker={value}/>
						)}
						<Tooltip optionsCoords={optionsCoords}/>
						<Chat coords={messageCoords}/>
					</>
				}
			</Map>
		</Wrapper>
	)
}

MapContainer.displayName="MapContainer";