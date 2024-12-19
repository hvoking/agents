// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Circle = ({ marker, index }: any) => {
  const sourceId = `circle-source-${index}`;
  const layerId = `circle-layer-${index}`;
  const circleLayerId = `circle-border-${index}`;

  const fillLayer: any = {
    id: layerId,
    type: 'fill',
    source: sourceId,
    paint: {
      "fill-color": "rgb(244, 244, 244)",
      "fill-opacity": 0.1
    }
  };

  const borderLayer: any = {
    id: circleLayerId,
    type: 'circle',
    source: sourceId,
    paint: {
      'circle-radius': [
        'interpolate',
        ['exponential', 2],
        ['zoom'],
        11, 0,
        12, 4,
        13, 5,
        14, 10,
        16, 5,
      ],
      'circle-color': 'rgb(0, 0, 255)',
      'circle-opacity': 0.2,
      'circle-pitch-alignment': 'map',
    },
  };

  return (
    <Source 
      key={sourceId} 
      id={sourceId} 
      type="geojson" 
      data={marker.circle}
    >
        <Layer {...fillLayer}/>
        <Layer {...borderLayer}/>
    </Source>
  );
};

Circle.displayName = "Circle";