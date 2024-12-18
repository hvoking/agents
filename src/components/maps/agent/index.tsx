// App imports
import { Mask } from './mask';
import { Circle } from './circle';
import { CustomMarker } from './marker';
// import { Isochrone } from './iso';
// import { Path } from './path';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Agent = () => {
  const { markers } = useMarkers();

  return (
    <>
      {markers.length > 0 &&
      	<>
          {/*<Isochrone markers={markers}/>*/}
	        <Mask markers={markers}/>
          <Circle markers={markers} />
          <CustomMarker markers={markers}/>
          {/*<Path markers={markers}/>*/}
        </>
      }
    </>
  );
};

Agent.displayName="Agent";