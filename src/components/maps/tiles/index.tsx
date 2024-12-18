// App imports
import { Points } from './points';
import { Lines } from './lines';
import { Buildings } from './buildings';

export const Tiles = () => {
	return (
		<>
			<Points tableSchema={"agents"} tableName={"rotterdam"} sourceId={"points-airbnb"}/>
			<Points tableSchema={"agents"} tableName={"rotterdam_foursquare"} sourceId={"points-foursquare"}/>
			<Lines/>
			<Buildings tableSchema={"agents"} tableName={"rotterdam_buildings"} sourceId={"buildings-overture"}/>
		</>
	)
}

Tiles.displayName="Tiles"