// React imports
import { useState } from 'react';

// App imports
import { Header } from './header';
import { CircleProperties } from './circle';
import { Colors } from './colors';
import { IsoProperties } from './iso';
import './styles.scss';

// Context imports
import { useMask } from 'context/agents/mask';
import { useMarkers } from 'context/agents/markers';

export const Options = () => {
	const { markerGeometryType, setMarkerGeometryType } = useMask();

	const { currentMarkerId } = useMarkers();

	const [ activeColors, setActiveColors ] = useState(false);

	if (!currentMarkerId) return <></>;

	const isIsoActive = markerGeometryType[currentMarkerId] === "iso";

	return (
		<div className="popup-item">
			<div className="map-filters-wrapper">
				<Header 
					markerId={currentMarkerId} 
					setMarkerGeometryType={setMarkerGeometryType}
					setActiveColors={setActiveColors}
					isIsoActive={isIsoActive}
				/>
				<div className="boundary-selector-wrapper">
					{!activeColors && !isIsoActive && <CircleProperties markerId={currentMarkerId}/>}
					{!activeColors && isIsoActive && <IsoProperties markerId={currentMarkerId}/>}
					{activeColors && <Colors markerId={currentMarkerId}/>}

				</div>
			</div>
		</div>
	)
}

Options.displayName="Options";