// App imports
import { Mask } from './mask';
import { Circle } from './circle';
import { Isochrone } from './iso';
import { CustomMarker } from './marker';

// Context imports
import { useMarkers } from 'context/maps/markers';

export const Agent = () => {
  const { markers } = useMarkers();
  console.log(markers)

  return (
    <>
      {markers && markers.length > 0 && (
      	<>
	        <Circle markers={markers} />
	        <Mask 
	          markers={markers}
	          layer="points-rotterdam"
	        />
          <Isochrone markers={markers}/>
        </>
      )}
      {markers && markers.map((marker: any, index: number) => (
        <CustomMarker
          key={marker.id || index}
          marker={marker}
        />
      ))}
    </>
  );
};