// React imports
import { useState, useEffect } from 'react';

// App imports
import './styles.scss';

// Context imports
import { useGeo } from 'context/geo';
import { useMarkers } from 'context/markers';
import { useMarkerEvents } from 'context/events/marker';

// Third-party imports
import { Marker } from 'react-map-gl/mapbox';

export const CustomMarker = ({ marker, setBoundary }: any) => {
	const { mapRef } = useGeo();
	const { addPin, rejectMarker } = useMarkers();
	const { onDragStart, onDrag, onDragEnd, getBoundary, activateTrash } = useMarkerEvents();

	const [ dragPosition, setDragPosition ] = useState<any>(null);

	const { id, name, center, image, radius, boundaryType, routingProfile, contoursMinutes, activeTrash } = marker;
	const map = mapRef?.current?.getMap();

	const updateBoundary = () => {
		getBoundary(marker, setBoundary);
	}
	
	useEffect(() => {
		updateBoundary();
	}, [ boundaryType, center, radius, contoursMinutes, routingProfile ]);

	useEffect(() => {
		if (!map) return;
		map.on('zoomend', updateBoundary);
		return () => {
			map.off('zoomend', updateBoundary);
		};
	}, [ map, boundaryType, center, radius, contoursMinutes, routingProfile ]);

	return (
		<Marker
			key={id}
			longitude={center.lng}
			latitude={center.lat}
			anchor="bottom"
			draggable
            onDrag={(e: any) => onDrag(e, id, boundaryType, setDragPosition)}
			onDragStart={(e: any) => onDragStart(e, id)}
			onDragEnd={(e: any) => onDragEnd(e, id, boundaryType, setDragPosition)}
		>
			<div className="custom-marker">
				<img 
					src={image} 
					alt="agent-avatar"
					className="agent-avatar"
				/>
				<div className="marker-provider">
					{name}
				</div>
			</div>
	    </Marker>
	)
}

CustomMarker.displayName="CustomMarker";