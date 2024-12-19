// Context imports
import { useMask } from 'context/agents/mask';

// Third-party imports
import { Source, Layer } from 'react-map-gl';

export const Lines = ({ marker, layer, index }: any) => {
	const { getLines } = useMask();

  const { longitude, latitude } = marker;
  const center = [longitude, latitude];
  const maskProperties = getLines(center, layer);

  const sourceId = `lines-source-${index}`;
  const layerId = `lines-layer-${index}`;

  if (!maskProperties || maskProperties.length === 0) return <></>;

	const features = maskProperties.flatMap((maskProp: any) => {
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

	const geoJsonData = features.length > 0 ? { type: 'FeatureCollection', features } : null;

	const layerStyle: any = {
    id: layerId,
    type: "line",
    source: sourceId,
    paint: {
      'line-width': 2,
      'line-color': ['get', 'line-color'],
    },
	};

	return (
		<Source 
		  id={sourceId} 
		  type="geojson" 
		  data={geoJsonData}
		>
		  <Layer {...layerStyle} />
		</Source>
	)
}

Lines.displayName="Lines";