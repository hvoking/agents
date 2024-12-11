// App imports
import { Mask } from './mask';
import { Circle } from './circle';
import { CustomMarker } from './marker';

// Context imports
import { useMarkers } from 'context/maps/markers';

export const Agent = () => {
  const { filteredMarkers } = useMarkers();

  return (
    <>
      {filteredMarkers && filteredMarkers.length > 0 && (
      	<>
	        <Circle markers={filteredMarkers} />
	        <Mask 
	          markers={filteredMarkers}
	          layer="points-rotterdam"
	        />
        </>
      )}
      {filteredMarkers && filteredMarkers.map((marker: any, index: number) => (
        <CustomMarker
          key={marker.id || index}
          marker={marker}
        />
      ))}
    </>
  );
};