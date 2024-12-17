// React imports
import { useMemo } from 'react';

// Context imports
import { useMask } from 'context/agents/mask';

// Third-party imports
import { Source, Layer } from 'react-map-gl';

export const Points = ({ markers }: any) => {
  const { getPoints } = useMask();

  const pointsLayer = "points-rotterdam"

  const geoJsonData = useMemo(() => {
    const features = markers.flatMap((marker: any) => {
      const { longitude, latitude } = marker;
      const center = [ longitude, latitude ];
      
      const maskProperties = getPoints(center, pointsLayer);

      if (!maskProperties || maskProperties.length === 0) return [];

      return maskProperties.flatMap((maskProp: any) => {
        const baseGeometries = [];
        const { geometry, properties } = maskProp;
        baseGeometries.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: geometry.coordinates,
          },
          properties: properties,
        });
        return baseGeometries;
      });
    });

    return features.length > 0 ? { type: 'FeatureCollection', features } : null;
  }, [ markers ]);

  const layerStyle: any = {
    id: "point-mask",
    type: "circle",
    source: "mask-points",
    paint: {
      'circle-radius': ['get', 'circle_size'],
      'circle-color': ['get', 'circle-color']
    }
  };

  if (!geoJsonData) return null;

  return (
    <Source 
      id="mask-points" 
      type="geojson" 
      data={geoJsonData}
    >
      <Layer {...layerStyle} />
    </Source>
  );
};

Points.displayName = 'Points';