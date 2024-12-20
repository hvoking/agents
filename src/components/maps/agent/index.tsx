// App imports
import { Mask } from './mask';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Agent = () => {
  const { markers } = useMarkers();

  if (!(markers.length > 0)) return <></>

  return (
    <>
      {markers.map((marker: any, index: number) => {
        const { longitude, latitude } = marker;
        const center = [ longitude, latitude ];

        return (
          <Mask id={index} center={center} marker={marker}/>
      )})}
      
    </>
  );
};

Agent.displayName="Agent";