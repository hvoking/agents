// Context imports
import { useMarkers } from 'context/agents/markers';

// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Circle = ({ markers }: any) => {
  return (
    <>
      {markers.map((marker: any, index: number) => {
        const { circle } = marker;

        const sourceId = `circle-source-${index}`;
        const fillLayerId = `layer-mask-${index}`
        const circleLayerId = `circle-border-${index}`;

        const fillLayer: any = {
          id: fillLayerId,
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
            data={circle}
          >
              <Layer {...fillLayer} />
              <Layer {...borderLayer} />
          </Source>
        )
      })}
    </>
  );
};

Circle.displayName = "Circle";