// App imports
import { Points } from './points';
import { Lines } from './lines';
import { Buildings } from './buildings';

export const Mask = ({ markers }: any) => {
  return (
    <>
      <Lines markers={markers}/>
      <Points markers={markers}/>
      <Buildings/>
    </>
  )
}

Mask.displayName="Mask";