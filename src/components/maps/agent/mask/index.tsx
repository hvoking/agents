// App imports
import { Points } from './points';
import { Lines } from './lines';
import { Clusters } from './clusters';

export const Mask = ({ markers }: any) => {
  return (
    <>
      <Lines markers={markers}/>
      <Points markers={markers} layer={"points-airbnb"}/>
      <Clusters markers={markers} layer={"points-foursquare"}/>
    </>
  )
}

Mask.displayName="Mask";