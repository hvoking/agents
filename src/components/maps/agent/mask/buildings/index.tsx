// React imports
import { useMemo } from 'react';

// App context
import './styles.scss';

// Context imports
import { useMask } from 'context/agents/mask';

// Third-party imports
import { Source, Layer } from 'react-map-gl';
import * as d3 from 'd3';

export const Buildings = ({ markers, layer }: any) => {
	const { getBuildings } = useMask();

	const geoJsonData = useMemo(() => {
	  const features = markers.flatMap((marker: any) => {
	    const { longitude, latitude } = marker;
	    const center = [ longitude, latitude ];
	    
	    const maskProperties = getBuildings(center, layer);

	    if (!maskProperties || maskProperties.length === 0) return [];

	    return maskProperties.flatMap((maskProp: any) => {
	      const baseGeometries = [];
	      const { geometry, properties } = maskProp;
	      baseGeometries.push({
	        type: 'Feature',
	        geometry: {
	          type: 'Polygon',
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
		<Source id="polygon-data" type="geojson" data={geoJsonData}>
	        <Layer
	          id="extruded-polygons"
	          type="fill-extrusion"
	          paint={{
	            'fill-extrusion-color': "rgb(222, 122, 222)",
	            'fill-extrusion-height': 20,
	            'fill-extrusion-base': 0,
	            'fill-extrusion-opacity': 1
	          }}
	        />
	    </Source>
	);
};

Buildings.displayName = "Buildings";
