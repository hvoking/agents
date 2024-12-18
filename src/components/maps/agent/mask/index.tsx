// App imports
import { Points } from './points';
import { Lines } from './lines';

export const Mask = ({ markers }: any) => {
  return (
    <>
      <Lines markers={markers}/>
      <Points markers={markers}/>
    </>
  )
}

Mask.displayName="Mask";