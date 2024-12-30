// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Circle = ({ boundary, index }: any) => {

  const sourceId = `circle-source-${index}`;
  const circleLayerId = `circle-border-${index}`;
  const eraserId = `circle-eraser-${index}`;

  const borderLayer: any = {
    id: circleLayerId,
    type: 'line',
    source: sourceId,
    paint: {
      'line-width': [
        'interpolate',
        ['exponential', 2],
        ['zoom'],
        11, 1,
        14, 3,
        16, 6,
      ],
      'line-color': 'rgba(128, 0, 128, 0.6)',
      'line-opacity': 0.8,
      'line-dasharray': [4, 2],
      'line-blur': 1.5,
    },
  };

  const eraserLayer: any = {
    id: eraserId,
    type: 'clip',
    source: sourceId,
    layout: {
      'clip-layer': ['building-extrusion']
    },
    minzoom: 14
  };

  return (
    <Source 
      key={sourceId} 
      id={sourceId} 
      type="geojson" 
      data={boundary}
    >
        <Layer {...borderLayer}/>
        <Layer {...eraserLayer}/>
    </Source>
  );
};

Circle.displayName = "Circle";