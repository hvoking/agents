// React imports
import { useMemo } from 'react';

// Context imports
import { useMask } from 'context/agents/mask';
import { propertyTypeColors } from './colors';

// Third-party imports
import { Source, Layer } from 'react-map-gl';
import * as d3 from 'd3';

export const Points = ({ markers }: any) => {
  const { getPoints } = useMask();

  const pointsLayer = "points-rotterdam"

  const scaleLinear = d3.scaleLinear()
    .domain([60, 300])
    .range([3, 3.5]);

  const geoJsonData = useMemo(() => {
    const features = markers.flatMap((marker: any) => {
      const { longitude, latitude } = marker;
      const center = [ longitude, latitude ];
      const maskProperties = getPoints(center, pointsLayer);

      if (!maskProperties || maskProperties.length === 0) return [];

      return maskProperties.flatMap((maskProp: any) => {
        const baseGeometries = [];
        const { geometry, properties } = maskProp;
        const { price, property_type } = properties;

        const currentPrice = price ? price.replace("$", "") : null;
        const currentColor = propertyTypeColors[property_type];

        if (currentPrice && currentColor) {
          baseGeometries.push({
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: geometry.coordinates,
            },
            properties: {
              'price': scaleLinear(parseInt(currentPrice)),
              'color': currentColor,
            },
          });
        }
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
      'circle-radius': ['get', 'price'],
      'circle-color': ['get', 'color']
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