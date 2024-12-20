// App imports
import { CancelCross } from '../cross';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Agent = () => {
	const { markers } = useMarkers();
	if (!(markers.length > 0)) return <></>

	return (
		<div className="edit-selector-wrapper">
			{markers.map((marker: any, index: number) => {
				return(
					<div key={index} className="edit-selector-item">
						<CancelCross marker={marker}/>
						<img 
							src={marker.image} 
							alt="marker-icon" 
							width="40px"
						/>
					</div>
				)
			})}
		</div>
	)
}

Agent.displayName="Agent";