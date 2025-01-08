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

export const Boundary = ({ marker }: any) => {
	const { markerGeometryType, setMarkerGeometryType } = useMask();
	const [ activeColors, setActiveColors ] = useState(false);

	const isIsoActive = markerGeometryType[marker.id] === "iso"

	return (
		<div className="map-filters-wrapper">
			<Header 
				marker={marker} 
				setMarkerGeometryType={setMarkerGeometryType}
				setActiveColors={setActiveColors}
				isIsoActive={isIsoActive}
			/>
			<div className="boundary-selector-wrapper">
				{!activeColors && !isIsoActive && <CircleProperties marker={marker}/>}
				{!activeColors && isIsoActive && <IsoProperties marker={marker}/>}
				{activeColors && <Colors marker={marker}/>}

			</div>
		</div>
	)
}

Boundary.displayName="Boundary";