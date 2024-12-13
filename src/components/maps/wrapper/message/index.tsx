// App imports
import './styles.scss';

// Context imports
import { useMarkers } from 'context/maps/markers';

export const Message = () => {
	const { addPin } = useMarkers();

	return (
		<>
			{addPin && 
				<div className="add-pin-message">
					Tap anywhere on the <br/>
					map to add the Agent
				</div>
			}
		</>
	)
}

Message.displayName="Message";