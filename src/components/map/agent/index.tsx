// App imports
import { Mask } from './mask';
import { Circle } from './circle';
import { Pin } from './pin';

// Context imports
import { useMarkers } from 'context/maps/markers';
import { useColors } from 'context/colors';

export const Agent = () => {
	const { markers, setMarkers, currentMarker, setCurrentMarker, activeTrash, setRejectedMarkers, filteredMarkers } = useMarkers();
	const { fillColor, setFillColor, colorPalette } = useColors();

	return (
		<>
			<Mask/>
			<Circle/>
			{filteredMarkers && filteredMarkers.map((marker: any, index: number) => (
		        <Pin
		          key={marker.id || index}
		          marker={marker}
		          currentMarker={currentMarker}
		          setCurrentMarker={setCurrentMarker}
		          fillColor={fillColor}
		          setFillColor={setFillColor}
		          setMarkers={setMarkers}
		          markers={markers}
		          palette={colorPalette}
		          activeTrash={activeTrash}
		          setRejectedMarkers={setRejectedMarkers}
		        />
		      ))}
		</>
	)
}