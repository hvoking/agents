// App imports
import { getLinesStyle } from '../../styles/lines';

// Context imports
import { useMask } from 'context/agents/mask';

// Third-party imports
import { Source, Layer } from 'react-map-gl';

export const Lines = ({ boundary, layer, markerId }: any) => {
	const { getGeoJson, sharedGeoJsonDataMap } = useMask();

	const geoJsonData = getGeoJson(boundary, layer, 'LineString');

	const sourceId = `lines-source-${markerId}`;
	const layerId = `lines-layer-${markerId}`;

	if (!geoJsonData) return <></>;

	sharedGeoJsonDataMap.value = {
		...sharedGeoJsonDataMap.value,
		[sourceId]: geoJsonData.features.map((item: any) => item.properties),
	};

	const layerStyle = getLinesStyle(layerId, sourceId);

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