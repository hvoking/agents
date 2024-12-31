// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Circle = ({ boundary, index }: any) => {
  const sourceId = `circle-source-${index}`;
  const fillId = `circle-fill-${index}`;
  const circleLayerId = `circle-border-${index}`;
  const eraserId = `circle-eraser-${index}`;

  const fillLayer: any = {
    id: fillId,
    type: 'fill',
    source: sourceId,
    paint: {
      "fill-color": "rgba(0, 123, 255)",
      "fill-opacity": 0.2
    }
  };

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
      'line-color': 'rgba(0, 123, 255, 0.6)',
      'line-opacity': 0.8,
      'line-dasharray': [2, 2],
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
        <Layer {...fillLayer}/>
        <Layer {...borderLayer}/>
        <Layer {...eraserLayer}/>
    </Source>
  );
};

Circle.displayName = "Circle";