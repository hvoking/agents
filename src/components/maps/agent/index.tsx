// App imports
import { Mask } from './mask';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Agent = () => {
  const { markers } = useMarkers();

  return (
    <>
      {markers.length > 0 && markers.map((marker: any, index: number) => {
        return (
          <Mask 
            key={`mask-${index}`} 
            id={index} 
            center={[ marker.longitude, marker.latitude ]} 
            marker={marker}
          />
        )
      })}
    </>
  );
};

Agent.displayName="Agent";