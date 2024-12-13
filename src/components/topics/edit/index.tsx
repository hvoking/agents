// App imports
import { CancelCross } from './cross';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/maps/markers';
import { useMarkerEvents } from 'context/events/marker';

export const Edit = () => {
	const { markers } = useMarkers();
	const { addRejectedId } = useMarkerEvents();

	return (
		<div className="agent-selector">

			<div className="agent-selector-title">EDIT YOUR AGENT</div>
			<div className="edit-selector-wrapper">
				{markers && markers.map((marker: any) => {
					return(
						<div className="edit-selector-item">
							<div style={{position: "absolute", right: "25px"}}>
								<CancelCross marker={marker} addRejectedId={addRejectedId}/>
							</div>
							<img src={marker.image} alt="marker-icon" width="40px"/>
						</div>
					)
				})}
			</div>
		</div>
	)
}

Edit.displayName="Edit";