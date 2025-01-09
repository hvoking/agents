// App imports
import { getPolygonStyle } from '../styles/polygon';

// Context imports
import { useMask } from 'context/agents/mask';

// Third-party imports
import { Source, Layer } from 'react-map-gl';

export const Polygons = ({ boundary, layer, markerId }: any) => {
	const { getGeoJson, sharedGeoJsonDataMap } = useMask();

    const geoJsonData = getGeoJson(boundary, layer, 'Polygon');

    const sourceId = `polygons-source-${markerId}`;
  	const layerId = `polygons-layer-${markerId}`;

    if (!geoJsonData) return <></>;

    sharedGeoJsonDataMap.value = {
		...sharedGeoJsonDataMap.value,
		[sourceId]: geoJsonData.features.map((item: any) => item.properties),
	};

	const layerStyle = getPolygonStyle(layerId, sourceId);

	return (
		<Source 
			id={sourceId} 
			type="geojson" 
			data={geoJsonData}
		>
	        <Layer {...layerStyle}/>
	    </Source>
	);
};

Polygons.displayName = "Polygons";
