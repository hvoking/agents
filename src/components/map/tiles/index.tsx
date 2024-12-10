// App imports
import { Points } from './points';

// Context imports
import { useStylesApi } from 'context/api/styles';

export const Tiles = () => {
	const tableSchema = "agents";
	const tableName = "rotterdam";

	const { getTilesUrl } = useStylesApi();
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