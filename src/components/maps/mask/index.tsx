// App imports
import { CustomMarker } from './marker';
import { Boundary } from './boundary';
import { Layers } from './layers';

// Context imports


// Third party imports
import * as turf from '@turf/turf';

export const Mask = ({ marker }: any) => {
  const { id, longitude, latitude } = marker;
  const center = [ longitude, latitude ];
  const boundary = turf.circle(center, 0.5);
  
  return (
    <div key={id}>
      <Boundary marker={marker} boundary={boundary}/>
      <CustomMarker marker={marker}/>
      <Layers marker={marker} boundary={boundary} />
    </div>
  )
};

Mask.displayName="Mask";