// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Circle = ({ markers }: any) => {
    const circleGeometry = {
        type: 'FeatureCollection',
        features: markers.map((marker: any) => {
            const { id, longitude, latitude } = marker;

            return {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [ longitude, latitude ]
                },
                properties: {
                    id: id,
                },
            };
        }),
    };

    const circleLayer: any = {
        id: 'layer-mask',
        type: 'circle',
        source: 'circle-source',
        paint: {
          'circle-radius': [
                    'interpolate', ['exponential', 2], ['zoom'],
                    1, 40,
                    15, 30
                ],
          'circle-color': 'rgb(0, 0, 255)',
          'circle-opacity': 0.1,
          'circle-pitch-alignment': 'map',
        }
      };

    return (
        <Source 
            id="circle-source" 
            type="geojson" 
            data={circleGeometry}
        >
            <Layer {...circleLayer}/>
        </Source>
    );
};

Circle.displayName = "Circle";