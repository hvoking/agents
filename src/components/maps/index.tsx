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
import { useMarkers } from 'context/agents/markers';

// Third-party imports
import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const MapContainer = () => {
	const { markers } = useMarkers();
	const { viewport, mapRef, mapStyle } = useGeo();
	const { addAgent } = useMapEvents();
	const { onContextMenu, optionsCoords, setOptionsCoords, messageCoords, addChatbot } = useBoundaryEvents();
	
	const [ isMapLoaded, setIsMapLoaded ] = useState(false);

	const handleClick = (event: any) => {
		addChatbot(event)
		setOptionsCoords(null);
		addAgent(event);
	}
	
	return (
		<Wrapper> 
		  <Map
				ref={mapRef}
				initialViewState={viewport}
				mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
				mapStyle={mapStyle}
				onClick={handleClick}
				onLoad={() => setIsMapLoaded(true)}
		        onContextMenu={onContextMenu}
			>
				{isMapLoaded && 
					<>
						<Tiles/>
						{Object.entries(markers).map(([ key, value ]: any) => 
							<Mask key={key} marker={value}/>
						)}
						{optionsCoords && <Tooltip optionsCoords={optionsCoords}/>}
						{messageCoords && <Chat coords={messageCoords}/>}
					</>
				}
			</Map>
		</Wrapper>
	)
}