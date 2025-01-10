// React imports
import { useState, useEffect } from 'react';

// App imports
import { CustomMarker } from './marker';
import { Boundary } from './boundary';
import { Layers } from './layers';

// Context imports
import { useIsochroneApi } from 'context/api/isochrone';

// Third party imports
import * as turf from '@turf/turf';

export const Mask = ({ marker }: any) => {
  const { fetchIsochrone } = useIsochroneApi();

  const [ boundary, setBoundary ] = useState<any>(null);

  const { id, latitude, longitude, radius, geometryType } = marker; 

  useEffect(() => {
    const fetchBoundary = async (marker: any) => {

      if (geometryType === 'iso') {
        const data = await fetchIsochrone(marker);
        setBoundary(data.features[0]);
      } else {
        setBoundary(turf.circle([ longitude, latitude ], radius));
      }
    };

    fetchBoundary(marker);
  }, [ marker, fetchIsochrone ]);

  return (
    <div key={id}>
      <Boundary marker={marker} boundary={boundary}/>
      <Layers marker={marker} boundary={boundary}/>
      <CustomMarker marker={marker}/>
    </div>
  )
};

Mask.displayName="Mask";