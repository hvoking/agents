// App imports
import { Points } from './points';

// Context imports
import { useStyles } from 'context/maps/styles';

export const Tiles = () => {
	const tableSchema = "agents";
	const tableName = "rotterdam";

	const { getTilesUrl } = useStyles();
	const url = getTilesUrl(tableSchema, tableName);

	return (
		<Points 
			tableSchema={tableSchema}
			tableName={tableName}
			url={url}
		/>
	)
}

Tiles.displayName="Tiles"