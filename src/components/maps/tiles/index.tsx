// App imports
import { Points } from './points';
import { Roads } from './roads';

export const Tiles = () => {
	return (
		<>
			<Points 
				tableSchema={"agents"}
				tableName={"rotterdam"}
			/>
			<Roads/>
		</>
	)
}

Tiles.displayName="Tiles"