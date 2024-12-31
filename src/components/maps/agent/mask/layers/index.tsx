// App imports
import { Lines } from '../lines';
import { Points } from '../points';
import { Polygons } from '../polygons';
import { Clusters } from '../clusters';

export const Layers = ({ boundary, marker }: any) => {
	return (
		<>
			<Lines 
				boundary={boundary} 
				layer="rotterdam_roads" 
				index={marker.id}
			/>
			<Polygons 
				boundary={boundary} 
				layer="buildings-overture" 
				index={marker.id}
			/>
			{/*<Points 
				boundary={boundary} 
				layer="points-airbnb" 
				index={marker.id}
			/>
			<Clusters 
				boundary={boundary} 
				layer="points-foursquare" 
				index={marker.id}
			/>*/}
		</>
	)
}

Layers.displayName="Layers";