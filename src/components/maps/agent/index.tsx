// App imports
import { Mask } from './mask';
import { Circle } from './circle';
import { Icon } from './icon';
// import { Isochrone } from './iso';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Agent = () => {
  const { markers } = useMarkers();

  if (!(markers.length > 0)) return <></>

  return (
    <>
      {/*<Isochrone markers={markers}/>*/}
      <Mask markers={markers}/>
      {markers.map((marker: any, index: number) => 
        <>
          <Circle marker={marker} index={index}/>
          <Icon marker={marker}/>
        </>
      )}
      
    </>
  );
};

Agent.displayName="Agent";