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
	const { currentMarkerId } = useMarkers();
	const { markerGeometryType, setMarkerGeometryType } = useMask();

	const [ activeColors, setActiveColors ] = useState(false);

	if (!currentMarkerId) return <></>;

	const isIsoActive = markerGeometryType[currentMarkerId] === "iso";

	return (
		<div className="popup-item" onClick={(e: any) => e.stopPropagation()}>
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
	)
}

Options.displayName="Options";