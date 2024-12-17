// Context imports
import { useMarkers } from 'context/agents/markers';

// Third party imports
import { Source, Layer } from 'react-map-gl';
import * as turf from '@turf/turf';

export const Circle = ({ markers }: any) => {
    const { radius } = useMarkers();
    const expandedRadius = radius + 0.0001;

  const circleGeometry = {
    type: 'FeatureCollection',
    features: markers.map((marker: any) => {
      const { id, longitude, latitude } = marker;

      // Create a circle with 0.5 km radius (500 meters)
      const circle = turf.circle([longitude, latitude], expandedRadius, { steps: 31 });

      return {
        type: 'Feature',
        geometry: circle.geometry,
        properties: {
          id: id,
        },
      };
    }),
  };

  const circleLayer: any = {
    id: 'circle-border',
    type: 'circle',
    source: 'circle-source',
    paint: {
      'circle-radius': [
        'interpolate',
        ['exponential', 2], // Exponential interpolation for smooth transition
        ['zoom'],            // Respond to zoom level
        11, 0,
        12, 4,
        13, 6,
        14, 11,
        16, 6,
      ],
      'circle-color': 'rgb(0, 0, 255)',
      'circle-opacity': 0.2,
      'circle-pitch-alignment': 'map',
    },
  };

  const fillLayer: any = {
    id: 'layer-mask',
    type: 'fill',
    source: 'circle-source',
    paint: {
            "fill-color": "rgb(244, 244, 244)",
            "fill-opacity": 0.1
        }
  };

  return (
    <Source
      id="circle-source"
      type="geojson"
      data={circleGeometry}
    >
        <Layer {...fillLayer} />
        <Layer {...circleLayer} />
    </Source>
  );
};

Circle.displayName = "Circle";
