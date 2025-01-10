// App imports
import { CircleProperties } from './circle';
import { IsoProperties } from './iso';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Boundary = ({ markerId, activeFeature }: any) => {
	return (
		<>
			{activeFeature === "circle" && <CircleProperties markerId={markerId}/>}
			{activeFeature === "iso" && <IsoProperties markerId={markerId}/>}
		</>
	)
}