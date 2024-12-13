// React imports
import { useMemo } from 'react';

// Context imports
import { useMask } from 'context/maps/mask';

// Third-party imports
import { Source, Layer } from 'react-map-gl';

export const Lines = ({ markers }: any) => {
	const { getLines } = useMask();

	const roadsLayer = "rotterdam_roads";

	const geoJsonData = useMemo(() => {
    const features = markers.flatMap((marker: any) => {
    const { longitude, latitude } = marker;
    const center = [longitude, latitude];

    const maskProperties = getLines(center, roadsLayer);

    if (!maskProperties || maskProperties.length === 0) return [];

    return maskProperties.flatMap((maskProp: any) => {
			const baseGeometries = [];

			baseGeometries.push({
				type: 'Feature',
				geometry: {
				  type: 'LineString',
				  coordinates: maskProp,
				},
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
      'line-color': 'rgba(255, 0, 0, 1)'
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