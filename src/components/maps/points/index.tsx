// Context imports
import { useStyles } from 'context/maps/styles';

// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Points = () => {
	const tableSchema = "agents";
	const tableName = "rotterdam";

	const sourceId = `points-${tableName}`

	const { getTilesUrl } = useStyles();

	const url = getTilesUrl(tableSchema, tableName)

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

Points.displayName="Points"