// React imports
import { useMemo } from 'react';

// Context imports
import { useMask } from 'context/maps/mask';
import { useColors } from 'context/colors';

// Third-party imports
import { Source, Layer } from 'react-map-gl';
import * as d3 from 'd3';

export const Mask = ({ markers, layer }: any) => {
  const { getProperties } = useMask();
  const { propertyTypeColors } = useColors();

  const scaleLinear = d3.scaleLinear()
    .domain([60, 300])
    .range([2.5, 3.5]);

  const geoJsonData = useMemo(() => {
    if (!markers || markers.length === 0) return null;

    const features = markers.flatMap((marker: any) => {
      const { latitude, longitude } = marker;
      const center = [longitude, latitude];
      const maskProperties = getProperties(center, layer);

      if (!maskProperties || maskProperties.length === 0) return [];

      return maskProperties.flatMap((maskProp: any) => {
        const baseGeometries = [];
        let { geometry, properties } = maskProp;
        const { price, property_type } = properties;
        const currentPrice = price ? price.replace("$", "") : null;

        if (currentPrice && propertyTypeColors[property_type]) {
          baseGeometries.push({
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: geometry.coordinates,
            },
            properties: {
              'price': scaleLinear(parseInt(currentPrice)),
              'propertyTypeColors': propertyTypeColors[property_type],
            },
          });
        }

        return baseGeometries;
      });
    });

    return features.length > 0 ? { type: 'FeatureCollection', features } : null;
  }, [markers, layer, getProperties, propertyTypeColors]);

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