// App imports
import { CircleProperties } from './circle';
import { IsoProperties } from './iso';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Boundary = ({ markerId }: any) => {
	const { markers } = useMarkers();
	const { geometryType } = markers[markerId]

	return (
		<>
			{geometryType === "circle" && <CircleProperties markerId={markerId}/>}
			{geometryType === "iso" && <IsoProperties markerId={markerId}/>}
		</>
	)
}