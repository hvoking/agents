// App imports
import { Points } from './points';
import { Lines } from './lines';

export const Mask = ({ markers }: any) => {
  return (
    <>
      {/*<Points markers={markers}/>*/}
      <Lines markers={markers}/>
    </>
  )
}

Mask.displayName="Mask";