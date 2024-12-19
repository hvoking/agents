// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Circle = ({ marker, index }: any) => {
  const sourceId = `circle-source-${index}`;
  const layerId = `circle-layer-${index}`;

  const fillLayer: any = {
    id: layerId,
    type: 'fill',
    source: sourceId,
    paint: {
      "fill-color": "rgb(244, 244, 244)",
      "fill-opacity": 0.1
    }
  };

  return (
    <Source 
      key={sourceId} 
      id={sourceId} 
      type="geojson" 
      data={marker.circle}
    >
        <Layer {...fillLayer}/>
    </Source>
  );
};

Circle.displayName = "Circle";