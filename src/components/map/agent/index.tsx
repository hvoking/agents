// App imports
import { Mask } from './mask';
import { Circle } from './circle';
import { CustomMarker } from './marker';

// Context imports
import { useMarkers } from 'context/maps/markers';
import { useColors } from 'context/colors';

export const Agent = () => {
	const { markers, setMarkers, currentMarker, setCurrentMarker, activeTrash, setRejectedMarkers, filteredMarkers, activePage } = useMarkers();
	const { fillColor, setFillColor, colorPalette } = useColors();

	return (
		<>
			{currentMarker && 
				<Mask 
					currentMarker={currentMarker}
					layer='points-rotterdam'
				/>
			}
			{currentMarker && <Circle currentMarker={currentMarker}/>}
			{filteredMarkers && filteredMarkers.map((marker: any, index: number) => (
		        <CustomMarker
		          key={marker.id || index}
		          marker={marker}
		          currentMarker={currentMarker}
		          setCurrentMarker={setCurrentMarker}
		          fillColor={fillColor}
		          setFillColor={setFillColor}
		          setMarkers={setMarkers}
		          markers={markers}
		          palette={colorPalette}
		          activeTrash={activePage === "edit"}
		          setRejectedMarkers={setRejectedMarkers}
		        />
		      ))}
		</>
	)
}