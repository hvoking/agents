// App imports
import { CancelCross } from './cross';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers';


export const Edit = () => {
	const { markers } = useMarkers();

	return (
		<div className="agent-selector">

			<div className="agent-selector-title">EDIT YOUR AGENT</div>
			{markers.length > 0 && <div className="edit-selector-wrapper">
				{markers.map((marker: any, index: number) => {
					return(
						<div key={index} className="edit-selector-item">
							<CancelCross marker={marker}/>
							<img src={marker.image} alt="marker-icon" width="40px"/>
						</div>
					)
				})}
			</div>}
		</div>
	)
}

Edit.displayName="Edit";