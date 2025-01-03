// App imports
import { Location } from './location';
import './styles.scss';

// Context imports
import { useMask } from 'context/agents/mask';

export const Header = ({ marker }: any) => {
	const { markerGeometryType, setMarkerGeometryType } = useMask();

	return (
		<div className="agent-header-wrapper">
			<img className="agent-icon" src={marker.image} alt="agent-icon"/>
			<div className="agent-data">
				<div style={{display: "flex", gap: "10px"}}>
					<div>{marker.provider}</div>
					<img 
						src={process.env.PUBLIC_URL + "/static/icons/circle.svg"} 
						alt="circle-icon"
						width="20px"
						height="20px"
						style={{
							cursor: "pointer", 
							padding: "3px",
							backgroundColor: 
								markerGeometryType[marker.id] !== "iso" ? 
								"rgba(52, 152, 219, 0.3)" : 
								"rgba(0, 0, 0, 0)",
							borderRadius: "3px",
							alignSelf: "center"
						}}
						onClick={() => setMarkerGeometryType((prev: any) => ({ ...prev, [ marker.id ]: 'circle' }))}
					/>
					<img 
						src={process.env.PUBLIC_URL + "/static/icons/iso.svg"} 
						alt="iso-icon"
						width="20px"
						height="20px"
						style={{
							cursor: "pointer",
							padding: "3px",
							backgroundColor: 
								markerGeometryType[marker.id] === "iso" ? 
								"rgba(52, 152, 219, 0.3)" : 
								"rgba(0, 0, 0, 0)",
							borderRadius: "3px",
							alignSelf: "center"
						}}
						onClick={() => setMarkerGeometryType((prev: any) => ({ ...prev, [marker.id]: 'iso' }))}
					/>
				</div>
				{/*<div className="agent-location">
					<img src={process.env.PUBLIC_URL + "/static/icons/pin.svg"} alt="pin" width="10px"/>
					<Location marker={marker}/>
				</div>*/}
			</div>
		</div>
	)
}

Header.displayName="Header";