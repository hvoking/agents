// App imports
import { Trash } from './trash';
import './styles.scss';

// Context imports
import { useColors } from 'context/colors';
import { useMarkers } from 'context/maps/markers';
import { useMarkerEvents } from 'context/events/marker';

// Third-party imports
import { Marker } from 'react-map-gl';

export const CustomMarker = ({ markers }: any) => {
	const { fillColor } = useColors();
	const { currentMarker, activePage } = useMarkers();
	const { onDragStart, onClick, onDrag, addRejectedId } = useMarkerEvents();

	return (
		<>
			{markers.map((marker: any, index: number) => {
				const { id, color, latitude, longitude } = marker;

				const isCurrentMarker = currentMarker && id === currentMarker.id;
				const currentFill = !currentMarker ? marker.color : isCurrentMarker ? fillColor : color;
				const currentOpacity = !currentMarker || isCurrentMarker ? 1 : 0.6;

				document.documentElement.style.setProperty('--currentFill', currentFill);
				return (
					<Marker
						key={marker.id || index}
						longitude={longitude}
						latitude={latitude}
						anchor="bottom"
						draggable
						onDragStart={() => onDragStart(marker)}
						onDrag={(e: any) => onDrag(e, marker)}
						onClick={() => onClick(marker)}
					>
						{activePage === "edit" && <Trash 
							marker={marker} 
							addRejectedId={(e: any) => addRejectedId(e, marker)}
						/>}
						<div className="marker-content-wrapper">
							<div className="marker-content-active">
								<img 
									src={marker.image} 
									alt="agent-avatar" 
									className="zoomed-image"
									width="100%"
								/>
							</div>
						</div>
				    </Marker>
				)
			})}
	    </>
	)
}

CustomMarker.displayName="CustomMarker";