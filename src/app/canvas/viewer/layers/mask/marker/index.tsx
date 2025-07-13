// App imports
import './styles.scss';

// Context imports
import { useMarkers } from 'context/markers';

// Third-party imports
import { Marker } from 'react-map-gl/mapbox';

export const CustomMarker = ({ marker }: any) => {
	const { updateMarkers } = useMarkers();
	const { id, center, image, name, boundaryType } = marker;

	const onDrag = (e: any) => {
		if (boundaryType !== "iso") {
			updateMarkers(id, "center", e.lngLat);
		}
	}
	const onDragEnd = (e: any) => {
		if (boundaryType === "iso") {
			updateMarkers(id, "center", e.lngLat);
		}
	}

	return (
		<Marker
			key={id}
			longitude={center.lng}
			latitude={center.lat}
			anchor="bottom"
			draggable
            onDrag={onDrag}
            onDragEnd={onDragEnd}
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