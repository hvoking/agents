// App imports
import { Points } from './points';
import { Lines } from './lines';

export const Tiles = () => {
	return (
		<>
			<Points 
				tableSchema={"agents"}
				tableName={"rotterdam"}
			/>
			<Lines/>
		</>
	)
}

Tiles.displayName="Tiles"