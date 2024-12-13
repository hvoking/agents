// Third-party imports
import { Source, Layer } from 'react-map-gl';

export const Path = ({ markers }: any) => {
  const coordinates: any = markers.map((marker: any) => [ marker.longitude, marker.latitude ]);

  const lineStringData: any = {
    type: 'Feature',
    geometry: {
      type: 'LineString',
      coordinates: coordinates
    }
  };

  const lineLayer: any = {
    id: 'line-layer',
    type: 'line',
    source: 'line-source',
    layout: {
      'line-join': 'round',
      'line-cap': 'round'
    },
    paint: {
      'line-color': 'rgba(255, 0, 0, 0.6)',
      'line-width': 3
    }
  };

  return (
      <Source 
        id="line-source" 
        type="geojson" 
        data={lineStringData}
      >
        <Layer {...lineLayer} />
      </Source>
  );
};
