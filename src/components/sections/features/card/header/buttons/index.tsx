// App imports
import { Arrow } from './arrow';
import './styles.scss';

// Context imports
import { useMarkerEvents } from 'context/events/marker';

export const Buttons = ({ marker, activeCharts, setActiveCharts }: any) => {
	const { rejectMarker } = useMarkerEvents();
	
	const deleteAgent = (e: any) => rejectMarker(e, marker);
	
	return (
		<div className="header-buttons">
			<Arrow activeCharts={activeCharts} setActiveCharts={setActiveCharts}/>
			<div className="close-btn" onClick={deleteAgent}>✖</div>
		</div>
	)
}

Buttons.displayName="Buttons";