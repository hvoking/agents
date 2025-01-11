// App imports
import { Circle } from './circle';
import { Isochrone } from './isochrone';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Boundary = ({ markerId, activeFeature }: any) => {
	return (
		<div className="boundary-selector">
			{activeFeature === "circle" && <Circle markerId={markerId}/>}
			{activeFeature === "iso" && <Isochrone markerId={markerId}/>}
		</div>
	)
}