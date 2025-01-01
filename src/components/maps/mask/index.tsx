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
  const { id, longitude, latitude } = marker;
  const center = [ longitude, latitude ];
  const boundary = turf.circle(center, 0.5);

  const { fetchIsochrone } = useIsochroneApi();
  const [ isochroneData, setIsochroneData ] = useState<any>(null);

  useEffect(() => {
      const fetchData = async (marker: any) => {
          const { longitude, latitude } = marker;
          const data = await fetchIsochrone(longitude, latitude);
          setIsochroneData(data);
      };

      fetchData(marker)
  }, [ marker ]);

  return (
    <div key={id}>
      {isochroneData && <Boundary marker={marker} data={isochroneData.features[0]}/>}
      <CustomMarker marker={marker}/>
      {isochroneData && <Layers marker={marker} boundary={isochroneData.features[0]} />}
    </div>
  )
};

Mask.displayName="Mask";