// App imports
import { Points } from './points';
import { Lines } from './lines';

export const Tiles = () => {
	return (
		<>
			<Points tableSchema={"agents"} tableName={"rotterdam"} sourceId={"points-airbnb"}/>
			<Points tableSchema={"agents"} tableName={"rotterdam_foursquare"} sourceId={"points-foursquare"}/>
			<Lines/>
		</>
	)
}

Tiles.displayName="Tiles"