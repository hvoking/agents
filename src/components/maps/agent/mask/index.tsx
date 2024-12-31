// App imports
import { CustomMarker } from '../marker';
import { Circle } from '../circle';
// import { Isochrone } from '../iso';
import { Layers } from './layers';

export const Mask = ({ boundary, marker }: any) => {
	return (
		<div key={marker.id}>
			{/*<Isochrone marker={marker} index={id}/>*/}
			<Circle boundary={boundary} index={marker.id}/>
			<CustomMarker marker={marker}/>
			<Layers boundary={boundary} marker={marker}/>
		</div>
	)
}

Mask.displayName="Mask";