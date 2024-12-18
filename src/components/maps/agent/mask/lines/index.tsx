// React imports
import { useMemo } from 'react';

// Context imports
import { useMask } from 'context/agents/mask';

// Third-party imports
import { Source, Layer } from 'react-map-gl';

export const Lines = ({ markers, layer }: any) => {
	const { getLines } = useMask();

	const geoJsonData = useMemo(() => {
    const features = markers.flatMap((marker: any) => {
	    const { longitude, latitude } = marker;
	    const center = [longitude, latitude];
	    const maskProperties = getLines(center, layer);

  	  if (!maskProperties || maskProperties.length === 0) return [];

    	return maskProperties.flatMap((maskProp: any) => {
    		const { geometry, properties } = maskProp;
				const baseGeometries = [];

				baseGeometries.push({
					type: 'Feature',
					geometry: {
					  type: 'LineString',
					  coordinates: geometry.coordinates,
					},
					properties: properties
				});
				return baseGeometries;
      });
    });

    return features.length > 0 ? { type: 'FeatureCollection', features } : null;
  }, [markers]);

	const layerStyle: any = {
    id: "line-mask",
    type: "line",
    source: "mask-lines",
    paint: {
      'line-width': 2,
      'line-color': ['get', 'line-color'],
    },
	};

	return (
		<Source 
		  id="mask-lines" 
		  type="geojson" 
		  data={geoJsonData}
		>
		  <Layer {...layerStyle} />
		</Source>
	)
}

Lines.displayName="Lines";