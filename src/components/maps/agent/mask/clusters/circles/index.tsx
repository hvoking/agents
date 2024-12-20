// React imports
import { useMemo } from 'react';

// Third party imports
import { Source, Layer } from 'react-map-gl';

// Context imports
import { useMask } from 'context/agents/mask';

export const Circles = ({ boundary,  layer, label, clusterLayer, textLayer, index }: any) => {
	const { getPoints } = useMask();
	const maskProperties = getPoints(boundary, layer);

	if (!maskProperties) return <></>;
    const features = maskProperties.features.filter((item: any) => item.properties.category === label).flatMap((maskProp: any) => {
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

    const geoJsonData = { type: 'FeatureCollection', features };

	return (
			<Source
			  id={`${label}-${index}-clusters`}
			  type="geojson"
			  data={geoJsonData}
			  cluster={true}
			  clusterMaxZoom={14}
			  clusterRadius={100}
			>
				<Layer {...clusterLayer}/>
				<Layer {...textLayer}/>
			</Source>
	)
}

Circles.displayName="Circles";