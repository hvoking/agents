// App imports
import { SVGWrapper } from './svg';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Catchment = ({ markerId, radiusPosition, xScale, innerWidth, innerHeight }: any) => {
	const { markers } = useMarkers();
	const color = markers[markerId].color;

	return (
		<SVGWrapper>
			<circle
				cx={innerWidth / 2}
				cy={ innerHeight / 2}
				r={xScale(radiusPosition * 1000)}
				fill={color}
			/>
		</SVGWrapper>
	)
}

Catchment.displayName="Catchment";