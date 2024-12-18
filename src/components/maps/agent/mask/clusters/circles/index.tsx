// React imports
import { useMemo } from 'react';

// Third party imports
import { Source, Layer } from 'react-map-gl';

// Context imports
import { useMask } from 'context/agents/mask';

export const Circles = ({ markers,  layer, label, clusterLayer, textLayer }: any) => {
	const { getPoints } = useMask();

	const geoJsonData = useMemo(() => {
	    const features = markers.flatMap((marker: any) => {
	      const { longitude, latitude } = marker;
	      const center = [ longitude, latitude ];
	      
	      const maskProperties = getPoints(center, layer);

	      if (!maskProperties || maskProperties.length === 0) return [];

	      return maskProperties.filter((item: any) => item.properties.category === label).flatMap((maskProp: any) => {
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

	return (
			<Source
			  id={`${label}-clusters`}
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