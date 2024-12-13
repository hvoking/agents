// Third party imports
import { Source, Layer } from 'react-map-gl';

// Context imports
import { useStylesApi } from 'context/api/styles';

export const Points = ({ tableSchema, tableName }: any) => {
	const { getTilesUrl } = useStylesApi();
	const url = getTilesUrl(tableSchema, tableName);

	const sourceId = `points-${tableName}`

	const layerStyle: any = {
	    id: "point-layer",
	    type: "circle",
	    source: sourceId,
	    'source-layer': "default",
	    paint: {
	      'circle-radius': 3,
	      'circle-color': 'rgba(33, 33, 73, 0.2)'
	    }
	};
	
	return (
		<Source 
			id={sourceId} 
			type="vector" 
			tiles={[ url ]}
		>
			<Layer {...layerStyle} />
		</Source>

	)
}