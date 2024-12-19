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
      
      {markers.map((marker: any, index: number) => {
        const { longitude, latitude } = marker;
        const center = [longitude, latitude];

        return (
          <div key={index}>
            <Circle marker={marker} index={index}/>
            <Icon marker={marker}/>
            <Lines center={center} layer="rotterdam_roads" index={index}/>
            <Points center={center} layer="points-airbnb" index={index}/>
            <Buildings center={center} layer="buildings-overture" index={index}/>
            <Clusters center={center} layer="points-foursquare" index={index}/>
          </div>

      )})}
      
    </>
  );
};

Agent.displayName="Agent";