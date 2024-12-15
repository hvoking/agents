// App imports
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Message = () => {
	const { addPin } = useMarkers();

	return (
		<>
			{addPin && 
				<div className="add-pin-message">
					Tap anywhere to<br/>
					add the Agent
				</div>
			}
		</>
	)
}

Message.displayName="Message";