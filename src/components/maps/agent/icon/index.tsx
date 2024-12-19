// App imports
import { CancelCross } from './cross';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers';
import { useMarkerEvents } from 'context/events/marker';

// Third-party imports
import { Marker } from 'react-map-gl';

export const Icon = ({ marker }: any) => {
	const { onDragStart, onClick, onDrag } = useMarkerEvents();
	const { activePage } = useMarkers();
	const { id, latitude, longitude, color, image } = marker;
	document.documentElement.style.setProperty('--currentFill', color);

	return (
		<Marker
			key={id}
			longitude={longitude}
			latitude={latitude}
			anchor="bottom"
			draggable
			onDragStart={() => onDragStart(marker)}
			onDrag={(e: any) => onDrag(e, marker)}
			onClick={() => onClick(marker)}
		>
			<div className="marker-wrapper">
				<div className="marker-active">
					<img src={image} alt="agent-avatar" width="100%"/>
					{activePage === "edit" && <CancelCross marker={marker}/>}
				</div>
			</div>
	    </Marker>
	)
}

Icon.displayName="Icon";