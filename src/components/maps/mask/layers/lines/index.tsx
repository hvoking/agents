// Context imports
import { useMask } from 'context/agents/mask';

// Third-party imports
import { Source, Layer } from 'react-map-gl';

export const Lines = ({ boundary, layer, index }: any) => {
	const { getGeoJson, sharedGeoJsonDataMap } = useMask();
  const geoJsonData = getGeoJson(boundary, layer, 'LineString');

  const sourceId = `lines-source-${index}`;
  const layerId = `lines-layer-${index}`;

  if (!geoJsonData) return <></>;

	sharedGeoJsonDataMap.value = {
		...sharedGeoJsonDataMap.value,
		[sourceId]: geoJsonData.features.map((item: any) => item.properties),
	};

	const layerStyle: any = {
    id: layerId,
    type: "line",
    source: sourceId,
    paint: {
      'line-width': ['get', 'line-width'],
      'line-color': ['get', 'line-color'],
    },
	};

	return (
		<Source 
		  id={sourceId} 
		  type="geojson" 
		  data={geoJsonData}
		>
		  <Layer {...layerStyle}/>
		</Source>
	)
}

Lines.displayName="Lines";