// React imports
import { useState } from 'react';

// App imports
import { Tiles } from './tiles';
import { Mask } from './mask';
import { Wrapper } from './wrapper';
import { CustomPopup } from './popup';

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
	const { onMouseDown, onMouseMove, onMouseUp, isDragging, handleRightClick, optionsCoords } = useBoundaryEvents();
	
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
		        onMouseDown={onMouseDown}
		        onMouseMove={onMouseMove}
		        onMouseUp={onMouseUp}
		        dragPan={!isDragging}
		        onContextMenu={handleRightClick}
			>
				{isMapLoaded && 
					<>
						<Tiles/>
						{markers.length > 0 && 
							markers.map((marker: any) => 
								<Mask key={marker.id} marker={marker}/>
							)
						}
						{optionsCoords && <CustomPopup coords={optionsCoords}/>}
					</>
				}
			</Map>
		</Wrapper>
	)
}