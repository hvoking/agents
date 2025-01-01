// React imports
// import { useState, useEffect } from 'react';

// App imports
import { CustomMarker } from './marker';
import { Boundary } from './boundary';
import { Layers } from './layers';

// Context imports
// import { useIsochroneApi } from 'context/api/isochrone';

// Third party imports
import * as turf from '@turf/turf';

export const Mask = ({ marker }: any) => {
  const { id, longitude, latitude } = marker;
  const center = [ longitude, latitude ];
  const boundary = turf.circle(center, 0.5);

  // const { fetchIsochrone } = useIsochroneApi();
  // const [ isoFeatures, setIsoFeatures ] = useState<any>(null);

  // useEffect(() => {
  //     const getFeatures = async (marker: any) => {
  //         const { longitude, latitude } = marker;
  //         const data = await fetchIsochrone(longitude, latitude);
  //         setIsoFeatures(data.features[0]);
  //     };

  //     getFeatures(marker)
  // }, [ marker ]);

  return (
    <div key={id}>
      <Boundary marker={marker} data={boundary}/>
      <CustomMarker marker={marker}/>
      <Layers marker={marker} boundary={boundary}/>
    </div>
  )
};

Mask.displayName="Mask";