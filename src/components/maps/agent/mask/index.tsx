// App imports
import { Points } from './points';
import { Lines } from './lines';
import { Clusters } from './clusters';
import { Buildings } from './buildings';

export const Mask = ({ markers }: any) => {
  return (
    <>
      <Lines markers={markers} layer="rotterdam_roads"/>
      <Points markers={markers} layer="points-airbnb"/>
      <Clusters markers={markers} layer="points-foursquare"/>
      <Buildings markers={markers} layer="buildings-overture"/>
    </>
  )
}

Mask.displayName="Mask";