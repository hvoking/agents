// React imports
import { useState } from 'react';

// App imports
import { Boundary } from './boundary';
import './styles.scss';

// Context imports
import { useMarkerEvents } from 'context/events/marker';

export const Buttons = ({ marker }: any) => {
	const [ activeFilter, setActiveFilter ] = useState(false);
	const { rejectMarker } = useMarkerEvents();
	
	const deleteAgent = (e: any) => rejectMarker(e, marker);

	const openSettings = (e: any) => {
		e.stopPropagation();
		setActiveFilter((prev: boolean) => !prev)
	};
	
	return (
		<div className="header-buttons">
			<div className="card-filter-wrapper">
				<div className="settings-btn" onClick={openSettings}>
					⚙
				</div>
				{activeFilter && <Boundary marker={marker}/>}
			</div>
			<div className="close-btn" onClick={deleteAgent}>✖</div>
		</div>
	)
}

Buttons.displayName="Buttons";