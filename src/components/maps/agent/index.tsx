// App imports
import { Mask } from './mask';

// Context imports
import { useMarkers } from 'context/agents/markers';

// Third party imports
import * as turf from '@turf/turf';
import { signal } from '@preact/signals-react';

export const Agent = () => {
  const { markers } = useMarkers();

  if (!(markers.length > 0)) return <></>

  return (
    <>
      {markers.map((marker: any, index: number) => {
        const { longitude, latitude } = marker;
        const center = [ longitude, latitude ];

        const boundaryGeometry = signal<any>(null);
        boundaryGeometry.value = turf.circle(center, 0.5, { steps: 31 });
        
        return (
          <Mask 
            key={`mask-${index}`} 
            id={index} 
            boundary={boundaryGeometry.value}
            marker={marker}
          />
        )
      })}
    </>
  );
};

Agent.displayName="Agent";