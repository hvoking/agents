// App imports
import './styles.scss';

// Context imports
import { useMarkerEvents } from 'context/events/marker';

export const CancelCross = ({ marker }: any) => {
	const { rejectMarker } = useMarkerEvents();

	return (
		<div style={{position: "absolute", right: "25px", top: "10px"}}>
	      	<svg
	      		className="cancel-cross-map" 
	      		viewBox="0 0 20 20" 
	      		width="20" 
	      		onClick={(e: any) => rejectMarker(e, marker)}
	      	>
	      		<line
					x1={5}
					x2={15}
					y1={5}
					y2={15}
					stroke="rgba(233, 122, 122, 1)"
					strokeWidth="2"
				/>
				<line
					x1={15}
					x2={5}
					y1={5}
					y2={15}
					stroke="rgba(233, 122, 122, 1)"
					strokeWidth="2"
				/>
				<rect
					x={0}
					y={0}
					width={20}
					height={20}
					fill="transparent"
				/>
			</svg>
		</div>
	)
}

CancelCross.displayName="CancelCross";