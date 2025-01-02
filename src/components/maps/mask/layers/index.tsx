// App imports
import { Lines } from './lines';
import { Points } from './points';
import { Polygons } from './polygons';
import { Clusters } from './clusters';

export const Layers = ({ data, marker }: any) => {
	if (!data) return <></>;
	
	return (
		<>
			<Lines 
				boundary={data} 
				layer="rotterdam_roads" 
				index={marker.id}
			/>
			<Polygons 
				boundary={data} 
				layer="buildings-overture" 
				index={marker.id}
			/>
			{/*<Points 
				boundary={data} 
				layer="points-airbnb" 
				index={marker.id}
			/>
			<Clusters 
				boundary={data} 
				layer="points-foursquare" 
				index={marker.id}
			/>*/}
		</>
	)
}

Layers.displayName="Layers";