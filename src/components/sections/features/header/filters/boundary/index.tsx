// App imports
import { Header } from './header';
import { CircleProperties } from './circle';
import { IsoProperties } from './iso';
import { routingProfileValues, contoursTypeValues, minutesDict } from './helpers';
import './styles.scss';

// Context imports
import { useMask } from 'context/agents/mask';

export const Boundary = ({ marker }: any) => {
	const { markerGeometryType, setMarkerGeometryType } = useMask();

	const isIsoActive = markerGeometryType[marker.id] === "iso"

	return (
		<div className="map-filters-wrapper">
			<Header 
				isIsoActive={isIsoActive} 
				marker={marker} 
				setMarkerGeometryType={setMarkerGeometryType}
			/>
			<div className="boundary-selector-wrapper">
				{!isIsoActive && <CircleProperties marker={marker}/>}
				{isIsoActive &&
					<IsoProperties 
						routingProfileValues={routingProfileValues}
						marker={marker}
					/>
				}
			</div>
		</div>
	)
}

Boundary.displayName="Boundary";