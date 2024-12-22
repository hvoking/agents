// App imports
import { CancelCross } from './cross';
import './styles.scss';

// Context imports

import { useMarkerEvents } from 'context/events/marker';

// Third-party imports
import { Marker } from 'react-map-gl';

export const CustomMarker = ({ marker }: any) => {
	const { onDragStart, onClick, onDrag } = useMarkerEvents();
	const { id, latitude, longitude, image } = marker;

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
					<img 
						src={image} 
						alt="agent-avatar" 
						width="100%"
					/>
					<CancelCross marker={marker}/>
				</div>
			</div>
	    </Marker>
	)
}

CustomMarker.displayName="CustomMarker";