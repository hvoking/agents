// App imports
import { Fill } from './fill';
import { Stroke } from './stroke';
import { Eraser } from './eraser';

export const Boundary = ({ marker, boundary }: any) => {
  if (!boundary) return <></>
    
    return (
      <>
        <Stroke marker={marker} boundary={boundary}/>
        <Fill marker={marker} boundary={boundary}/>
        <Eraser id={marker.id} boundary={boundary}/>
      </>
    )
}

Boundary.displayName="Boundary";