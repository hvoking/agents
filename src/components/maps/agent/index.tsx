// App imports
import { Circle } from './circle';
import { Icon } from './icon';
import { Lines } from './mask/lines';
import { Points } from './mask/points';
import { Buildings } from './mask/buildings';
import { Clusters } from './mask/clusters';
// import { Isochrone } from './iso';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Agent = () => {
  const { markers } = useMarkers();

  if (!(markers.length > 0)) return <></>

  return (
    <>
      {/*<Isochrone markers={markers}/>*/}
      
      {markers.map((marker: any, index: number) => 
        <>
          <Circle marker={marker} index={index}/>
          <Icon marker={marker}/>
          <Lines marker={marker} layer="rotterdam_roads" index={index}/>
          <Points marker={marker} layer="points-airbnb" index={index}/>
          <Buildings marker={marker} layer="buildings-overture" index={index}/>
          <Clusters marker={marker} layer="points-foursquare" index={index}/>
        </>
      )}
      
    </>
  );
};

Agent.displayName="Agent";