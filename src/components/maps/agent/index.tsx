// App imports
import { CustomMarker } from './marker';
import { Circle } from './circle';
// import { Isochrone } from './iso';
import { Layers } from './layers';

// Context imports
import { useMarkers } from 'context/agents/markers';

// Third party imports
import * as turf from '@turf/turf';

export const Agent = () => {
  const { markers } = useMarkers();

  if (!(markers.length > 0)) return <></>

  return (
    <>
      {markers.map((marker: any) => {
        const { id, longitude, latitude } = marker;
        const center = [ longitude, latitude ];
        const boundary = turf.circle(center, 0.5);

        return (
          <div key={id}>
            {/*<Isochrone marker={marker} index={id}/>*/}
            <Circle boundary={boundary} index={id}/>
            <CustomMarker marker={marker}/>
            <Layers boundary={boundary} marker={marker}/>
          </div>
        )
      })}
    </>
  );
};

Agent.displayName="Agent";