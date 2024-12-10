// App imports
import { Mask } from './mask';
import { Circle } from './circle';
import { CustomMarker } from './marker';

// Context imports
import { useMarkers } from 'context/maps/markers';

export const Agent = () => {
	const { currentMarker, filteredMarkers } = useMarkers();

	return (
		<>
			{currentMarker && 
				<>
					<Mask 
						currentMarker={currentMarker}
						layer='points-rotterdam'
					/>
					<Circle currentMarker={currentMarker}/>
				</>
			}
			{filteredMarkers && filteredMarkers.map((marker: any, index: number) => (
		        <CustomMarker
		          key={marker.id || index}
		          marker={marker}
		        />
		      ))}
		</>
	)
}