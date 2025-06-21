// App imports
import { getPolygonsStyle } from '../../styles/polygons';

// Context imports
import { useMask } from 'context/mask';

// Third-party imports
import { Source, Layer } from 'react-map-gl/mapbox';

export const Polygons = ({ boundary, layer, markerId }: any) => {
	const { getGeojson, sharedGeoJsonDataMap } = useMask();

    const geoJsonData = getGeojson(boundary, layer, 'Polygon');

    const sourceId = `polygons-source-${markerId}`;
  	const layerId = `polygons-layer-${markerId}`;

    if (!geoJsonData) return <></>;

    sharedGeoJsonDataMap.value = {
		...sharedGeoJsonDataMap.value,
		[sourceId]: geoJsonData.features.map((item: any) => item.properties),
	};

	const layerStyle = getPolygonsStyle(layerId, sourceId);

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
