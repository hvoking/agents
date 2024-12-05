// React imports
import { useMemo } from 'react';

// Context imports
import { useMask } from 'context/maps/mask';
import { useColors } from 'context/colors';

// Third-party imports
import { Source, Layer } from 'react-map-gl';
import * as d3 from 'd3';

export const Mask = () => {
  const { maskProperties } = useMask();
  const { propertyTypeColors } = useColors();

  const scaleLinear = d3.scaleLinear()
    .domain([100, 400])
    .range([0.1, 0.3])

  const geoJsonData = useMemo(() => {
    if (!maskProperties || maskProperties.length === 0) return null;

    const features = maskProperties.flatMap((maskProp: any) => {
      const baseGeometries = [];
      let { geometry, properties } = maskProp;
      const { price, property_type } = properties;

      baseGeometries.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: geometry.coordinates,
        },
        properties: {
          'price': scaleLinear(price),
          'propertyTypeColors': propertyTypeColors[property_type],
        },
      });

      return baseGeometries;
    });

    return features.length > 0 ? { type: 'FeatureCollection', features } : null;
  }, [ maskProperties ]);

  if (!geoJsonData) return null;

  const layerStyle: any = {
      id: "point-mask",
      type: "circle",
      source: "mask-points",
      paint: {
        'circle-radius': ['get', 'price'],
        'circle-color': ['get', 'propertyTypeColors']
      }
  };

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

Mask.displayName = 'Mask';