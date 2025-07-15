// App imports
import { Points } from './points';
import { Polygons } from './polygons';

export const Tiles = () => {
	return (
		<>
			<Points 
				tableSchema={"agents"} 
				tableName={"rotterdam"} 
				styleName={"points-airbnb"}
			/>
			<Points 
				tableSchema={"agents"} 
				tableName={"rotterdam_foursquare"} 
				styleName={"points-foursquare"}
			/>
			<Polygons 
				tableSchema={"agents"} 
				tableName={"rotterdam_buildings"} 
				styleName={"buildings-overture"}
			/>
		</>
	)
}

Tiles.displayName="Tiles"