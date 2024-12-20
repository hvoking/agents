// Context imports
import { useMask } from 'context/agents/mask';

// Third-party imports
import { Source, Layer } from 'react-map-gl';

export const Buildings = ({ boundary, layer, index }: any) => {
	const { getBuildings } = useMask();
    const geoJsonData = getBuildings(boundary, layer);

    const sourceId = `polygons-source-${index}`;
  	const layerId = `polygons-layer-${index}`;

    if (!geoJsonData) return <></>;

	const layerStyle: any = {
	    id: layerId,
	    type: "fill-extrusion",
	    source: sourceId,
	    paint: {
			'fill-extrusion-color': "rgb(222, 122, 222)",
			'fill-extrusion-height': 20,
			'fill-extrusion-base': 0,
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

Buildings.displayName = "Buildings";
