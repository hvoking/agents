// Context imports
import { useMask } from 'context/agents/mask';

// Third-party imports
import { Source, Layer } from 'react-map-gl';

export const Polygons = ({ boundary, layer, index }: any) => {
	const { getPolygons, sharedGeoJsonDataMap } = useMask();
    const geoJsonData = getPolygons(boundary, layer);

    const sourceId = `polygons-source-${index}`;
  	const layerId = `polygons-layer-${index}`;

    if (!geoJsonData) return <></>;

    sharedGeoJsonDataMap.value = {
		...sharedGeoJsonDataMap.value,
		[sourceId]: geoJsonData.features.map((item: any) => item.properties),
	};

	const layerStyle: any = {
	    id: layerId,
	    type: "fill-extrusion",
	    source: sourceId,
	    paint: {
	        "fill-extrusion-color": ["get", "fill-color"],
	        'fill-extrusion-height': [
	            'coalesce',
	            ['get', 'height'],
	            10
	        ],
	        'fill-extrusion-base': 0,
	        "fill-extrusion-vertical-gradient": true,
		    "fill-extrusion-opacity": 0.6,
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
	);
};

Polygons.displayName = "Polygons";
