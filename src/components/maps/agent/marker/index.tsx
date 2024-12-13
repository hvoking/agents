// App imports
import { CancelCross } from './cross';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/maps/markers';
import { useMarkerEvents } from 'context/events/marker';

// Third-party imports
import { Marker } from 'react-map-gl';

export const CustomMarker = ({ markers }: any) => {
	const { activePage } = useMarkers();
	const { onDragStart, onClick, onDrag, addRejectedId } = useMarkerEvents();

	return (
		<>
			{markers.map((marker: any) => {
				const { id, color, latitude, longitude, image } = marker;
				document.documentElement.style.setProperty('--currentFill', color);

				return (
					<Marker
						key={id}
						longitude={longitude}
						latitude={latitude}
						anchor="bottom"
						draggable
						onDragStart={onDragStart(marker)}
						onDrag={(e: any) => onDrag(e, marker)}
						onClick={onClick(marker)}
					>
						<div className="marker-wrapper">
							<div className="marker-active">
								<img 
									src={image} 
									alt="agent-avatar" 
									width="100%"
								/>
								{activePage === "edit" && <CancelCross 
									marker={marker} 
									addRejectedId={addRejectedId}
								/>}
							</div>
						</div>
				    </Marker>
				)
			})}
	    </>
	)
}

CustomMarker.displayName="CustomMarker";