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
	const { markers, currentMarker } = useMarkers();

	const [ activeColors, setActiveColors ] = useState(false);

	if (!currentMarker) return <></>;

	const isIsoActive = markerGeometryType[currentMarker.id] === "iso";
	
	return (
		<div className="map-filters-wrapper">
			<Header 
				marker={currentMarker} 
				setMarkerGeometryType={setMarkerGeometryType}
				setActiveColors={setActiveColors}
				isIsoActive={isIsoActive}
			/>
			<div className="boundary-selector-wrapper">
				{!activeColors && !isIsoActive && <CircleProperties marker={currentMarker}/>}
				{!activeColors && isIsoActive && <IsoProperties marker={currentMarker}/>}
				{activeColors && <Colors marker={currentMarker}/>}

			</div>
		</div>
	)
}

Options.displayName="Options";