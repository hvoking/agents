// Context imports
import { useMask } from 'context/agents/mask';

// Third-party imports
import { Source, Layer } from 'react-map-gl';

export const Buildings = ({ marker, layer, index }: any) => {
	const { getBuildings } = useMask();
    const { longitude, latitude } = marker;
    const center = [ longitude, latitude ];

    const maskProperties = getBuildings(center, layer);

    const sourceId = `polygons-source-${index}`;
  	const layerId = `polygons-layer-${index}`;

    if (!maskProperties || maskProperties.length === 0) return <></>;;

	return (
		<Source 
			id={sourceId} 
			type="geojson" 
			data={maskProperties}
		>
	        <Layer
	          id={layerId}
	          type="fill-extrusion"
	          paint={{
	            'fill-extrusion-color': "rgb(222, 122, 222)",
	            'fill-extrusion-height': 20,
	            'fill-extrusion-base': 0,
	            'fill-extrusion-opacity': 1
	          }}
	        />
	    </Source>
	);
};

Buildings.displayName = "Buildings";
