// App imports
import { Trash } from './trash';
import './styles.scss';

// Context imports
import { useMarkerEvents } from 'context/marker/events';

// Third-party imports
import { Marker } from 'react-map-gl';

export const CustomMarker = ({ 
	index, 
	marker, 
	currentMarker, setCurrentMarker, 
	markers, setMarkers, 
	fillColor, setFillColor, 
	activeTrash, 
	setRejectedMarkers
}: any) => {
	const { onDragStart, onClick, onDrag, addRejectedId } = useMarkerEvents()
	const { id, color, latitude, longitude } = marker;

	const isCurrentMarker = currentMarker && id === currentMarker.id;
	const currentFill = !currentMarker ? marker.color : isCurrentMarker ? fillColor : color;

	document.documentElement.style.setProperty('--currentFill', currentFill);
	
	const currentOpacity = !currentMarker || isCurrentMarker ? 1 : 0.6;
	const currentImage = process.env.PUBLIC_URL + "/static/thumbnails/thumbnail_1.jpg";

	return (
		<Marker
			key={index}
			longitude={longitude}
			latitude={latitude}
			anchor="bottom"
			draggable
			onDragStart={() => onDragStart(marker)}
			onDrag={(e: any) => onDrag(e, marker)}
			onClick={() => onClick(marker)}
		>
			{activeTrash && <Trash 
				marker={marker} 
				addRejectedId={(e: any) => addRejectedId(e, marker)}
			/>}
			<div className="marker-content-wrapper">
				<div className="marker-content-active">
					<img 
						src={currentImage} 
						alt="agent-avatar" 
						className="zoomed-image"
						width="100%"
					/>
				</div>
			</div>
	    </Marker>
	)
}

CustomMarker.displayName="CustomMarker";