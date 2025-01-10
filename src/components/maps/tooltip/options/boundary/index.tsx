// App imports
import { Circle } from './circle';
import { Isochrone } from './isochrone';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Boundary = ({ markerId, activeFeature }: any) => {
	return (
		<>
			{activeFeature === "circle" && <Circle markerId={markerId}/>}
			{activeFeature === "iso" && <Isochrone markerId={markerId}/>}
		</>
	)
}