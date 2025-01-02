// React imports
import { useState, useEffect } from 'react';

// App imports
import { CustomMarker } from './marker';
import { Boundary } from './boundary';
import { Layers } from './layers';

// Context imports
import { useIsochroneApi } from 'context/api/isochrone';
import { useMask } from 'context/agents/mask';

// Third party imports
import * as turf from '@turf/turf';
import { signal } from '@preact/signals-react';

export const Mask = ({ marker }: any) => {
  const { fetchIsochrone } = useIsochroneApi();
  const { markerGeometryType } = useMask();

  const [ boundary, setBoundary ] = useState<any>(null);

  useEffect(() => {
      if (!marker) return;

      const fetchBoundary = async () => {
        if (markerGeometryType[marker.id] === 'iso') {
          const { longitude, latitude } = marker;
          const data = await fetchIsochrone(longitude, latitude);
          setBoundary(data.features[0]);
        } else {
          setBoundary(turf.circle([marker.longitude, marker.latitude], 0.5));
        }
      };

      fetchBoundary();
    }, [marker, markerGeometryType, fetchIsochrone]);

  return (
    <div key={marker.id}>
      <Boundary marker={marker} boundary={boundary}/>
      <Layers marker={marker} boundary={boundary}/>
      <CustomMarker marker={marker}/>
    </div>
  )
};

Mask.displayName="Mask";