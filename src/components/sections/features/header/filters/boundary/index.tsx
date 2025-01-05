// App imports
import { Slider } from './slider';
import { routingProfileValues, contoursTypeValues, minutesDict } from './helpers';
import './styles.scss';

// Context imports
import { useMask } from 'context/agents/mask';
import { useIsochroneApi } from 'context/api/isochrone';

export const Boundary = ({ marker }: any) => {
	const { markerGeometryType, setMarkerGeometryType } = useMask();

	const { contoursType, routingProfile, setRoutingProfile } = useIsochroneApi();

	const isIsoActive = markerGeometryType[marker.id] === "iso"

	const circleBackgroundColor = !isIsoActive ? "rgba(52, 152, 219, 0.3)" : "rgba(0, 0, 0, 0)"
	const isoBackgroundColor = isIsoActive ? "rgba(52, 152, 219, 0.3)" : "rgba(0, 0, 0, 0)"

	return (
		<div className="map-filters-wrapper">
			<div className="header-selector">
				<img 
					src={process.env.PUBLIC_URL + "/static/icons/circle.svg"} 
					alt="circle-icon"
					className="settings-icon"
					style={{backgroundColor: circleBackgroundColor}}
					onClick={() => setMarkerGeometryType((prev: any) => ({ ...prev, [ marker.id ]: 'circle' }))}
				/>
				<img 
					src={process.env.PUBLIC_URL + "/static/icons/iso.svg"} 
					alt="iso-icon"
					className="settings-icon"
					style={{backgroundColor: isoBackgroundColor}}
					onClick={() => setMarkerGeometryType((prev: any) => ({ ...prev, [marker.id]: 'iso' }))}
				/>
			</div>
			<div className="boundary-selector-wrapper">
				{!isIsoActive && 
					<>
						<div>Circle radius</div>
						<div style={{width: "100%", height: "60px"}}>
							<Slider marker={marker}/>
						</div>
					</>
				}
				{ isIsoActive &&
					<>
					<div>Routing Profile</div>
					<div className="routing-profile">
						{Object.entries(routingProfileValues).map(([key, value]: any) => {
							return (
								<img src={value} alt={key}/>
							)
						})}
					</div>
					<div>Contours Type</div>
					<div className="contours-type">
						{Object.entries(contoursTypeValues).map(([key, value]: any) => {
							return (
								<img src={value} alt={key} onClick={() => setRoutingProfile(key)}/>
							)
						})}
					</div>
					<div>
						{contoursType}
					</div>
					<div className="iso-slider">
						<Slider marker={marker}/>
					</div>
					</>
				}
			</div>
		</div>
	)
}

Boundary.displayName="Boundary";