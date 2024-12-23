// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Circle = ({ boundary, index }: any) => {

  const sourceId = `circle-source-${index}`;
  const layerId = `circle-layer-${index}`;
  const circleLayerId = `circle-border-${index}`;
  const eraserId = `circle-eraser-${index}`;

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
      'circle-blur': 0.5
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