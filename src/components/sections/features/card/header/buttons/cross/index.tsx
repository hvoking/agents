// App imports
import './styles.scss';

// Context imports
import { useMarkerEvents } from 'context/events/marker';

export const CancelCross = ({ marker }: any) => {
	const { rejectMarker } = useMarkerEvents();

	return (
      	<svg
      		viewBox="0 0 20 20" 
      		width="25px" 
      		height="25px" 
      		onClick={(e: any) => rejectMarker(e, marker)}
      	>
      		<g className="cross-lines">
	      		<line
					x1={5}
					x2={15}
					y1={5}
					y2={15}
				/>
				<line
					x1={15}
					x2={5}
					y1={5}
					y2={15}
				/>
			</g>
			<rect
				x={0}
				y={0}
				width={20}
				height={20}
				fill="transparent"
			/>
		</svg>
	)
}

CancelCross.displayName="CancelCross";