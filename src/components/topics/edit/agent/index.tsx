// App imports
import { CancelCross } from './cross';
import { Graphics } from './graphics';
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
					<div key={index} className="agent-stats-wrapper">
						<CancelCross marker={marker}/>
						<img 
							className="agent-icon"
							src={marker.image} 
							alt="agent-icon" 
						/>
						<Graphics id={index}/>
					</div>
				)
			})}
		</div>
	)
}

Agent.displayName="Agent";