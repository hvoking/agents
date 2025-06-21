// App imports
import './styles.scss';

// Context imports
import { useMarkers } from 'context/markers';

// Third-party imports
import { Marker } from 'react-map-gl/mapbox';

export const CustomMarker = ({ marker }: any) => {
	const { updateMarkers } = useMarkers();
	const { id, center, image, name } = marker;

	return (
		<Marker
			key={id}
			longitude={center.lng}
			latitude={center.lat}
			anchor="bottom"
			draggable
            onDrag={(e: any) => updateMarkers(id, "center", e.lngLat)}
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