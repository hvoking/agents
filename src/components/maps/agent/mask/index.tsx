// App imports
import { signal } from '@preact/signals-react';

// App imports
import { CustomMarker } from '../marker';
import { Circle } from '../circle';
// import { Isochrone } from './iso';
import { Lines } from './lines';
import { Points } from './points';
import { Polygons } from './polygons';
import { Clusters } from './clusters';

// Third party imports
import * as turf from '@turf/turf';

export const Mask = ({ id, center, marker }: any) => {
	const boundaryGeometry = signal<any>(null);
    boundaryGeometry.value = turf.circle(center, 0.5, { steps: 31 });



	return (
		<div key={id}>
			{/*<Isochrone marker={marker} index={index}/>*/}
			<Circle 
				boundary={boundaryGeometry.value} 
				index={id}
			/>

			<Polygons 
				boundary={boundaryGeometry.value} 
				layer="buildings-overture" 
				index={id}
			/>
			<Lines 
				boundary={boundaryGeometry.value} 
				layer="rotterdam_roads" 
				index={id}
			/>
			<Points 
				boundary={boundaryGeometry.value} 
				layer="points-airbnb" 
				index={id}
			/>

			<Clusters 
				boundary={boundaryGeometry.value} 
				layer="points-foursquare" 
				index={id}
			/>
			<CustomMarker marker={marker}/>
		</div>
	)
}

Mask.displayName="Mask";