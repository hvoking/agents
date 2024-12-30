// App imports
import { CustomMarker } from '../marker';
import { Circle } from '../circle';
// import { Isochrone } from '../iso';
import { Lines } from './lines';
import { Points } from './points';
import { Polygons } from './polygons';
import { Clusters } from './clusters';

export const Mask = ({ id, boundary, marker }: any) => {
	return (
		<div key={id}>
			{/*<Isochrone marker={marker} index={id}/>*/}
			<Circle 
				boundary={boundary} 
				index={id}
			/>
			<Lines 
				boundary={boundary} 
				layer="rotterdam_roads" 
				index={id}
			/>
			<Polygons 
				boundary={boundary} 
				layer="buildings-overture" 
				index={id}
			/>
			{/*<Points 
				boundary={boundary} 
				layer="points-airbnb" 
				index={id}
			/>*/}
			{/*<Clusters 
				boundary={boundary} 
				layer="points-foursquare" 
				index={id}
			/>*/}
			<CustomMarker marker={marker}/>
		</div>
	)
}

Mask.displayName="Mask";