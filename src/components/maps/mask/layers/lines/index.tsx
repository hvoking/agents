// App imports
import { getLinesStyle } from '../../styles/lines';

// Context imports
import { useMask } from 'context/mask';

// Third-party imports
import { Source, Layer } from 'react-map-gl/mapbox';

export const Lines = ({ boundary, layer, markerId }: any) => {
	const { getGeojson, sharedGeoJsonDataMap } = useMask();

	const geoJsonData = getGeojson(boundary, layer, 'LineString');

	if (!geoJsonData) return <></>;

	const sourceId = `lines-source-${markerId}`;
	const layerId = `lines-layer-${markerId}`;

	const geojsonProperties = geoJsonData.features.map((item: any) => item.properties);
	
	sharedGeoJsonDataMap.value = {...sharedGeoJsonDataMap.value, [sourceId]: geojsonProperties };

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