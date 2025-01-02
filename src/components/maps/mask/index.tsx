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

  const { id, longitude, latitude } = marker;
  const center = [ longitude, latitude ];

  const boundary = turf.circle(center, 0.5);

  
  const [ isoFeatures, setIsoFeatures ] = useState<any>(null);

  useEffect(() => {
      const getFeatures = async (marker: any) => {
          const { longitude, latitude } = marker;
          const data = await fetchIsochrone(longitude, latitude);
          setIsoFeatures(data.features[0]);
      };

      markerGeometryType[marker.id] === 'iso' ?
      getFeatures(marker) :
      setIsoFeatures(null);
      
  }, [ markerGeometryType, marker ]);

  const boundaryGeometry = signal<any>(null);
  
  boundaryGeometry.value = 
    isoFeatures && markerGeometryType[marker.id] === 'iso' ? 
    isoFeatures : 
    turf.circle(center, 0.5);

  return (
    <div key={id}>
      <Boundary marker={marker} data={boundaryGeometry.value}/>
      <Layers marker={marker} data={boundaryGeometry.value}/>
      <CustomMarker marker={marker}/>
    </div>
  )
};

Mask.displayName="Mask";