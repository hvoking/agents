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
			<Circle boundary={boundary} index={marker.id}/>
			<CustomMarker marker={marker}/>

			{/*Layers*/}
			<Lines boundary={boundary} layer="rotterdam_roads" index={marker.id}/>
			<Polygons boundary={boundary} layer="buildings-overture" index={marker.id}/>
			<Points boundary={boundary} layer="points-airbnb" index={marker.id}/>
			{/*<Clusters boundary={boundary} layer="points-foursquare" index={id}/>*/}
		</div>
	)
}

Mask.displayName="Mask";