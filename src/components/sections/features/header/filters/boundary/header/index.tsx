// App imports
import './styles.scss';

export const Header = ({ isIsoActive, marker, setMarkerGeometryType }: any) => {
	const circleBackgroundColor = !isIsoActive ? "rgba(52, 152, 219, 0.3)" : "rgba(255, 255, 255, 0)"
	const isoBackgroundColor = isIsoActive ? "rgba(52, 152, 219, 0.3)" : "rgba(255, 255, 255, 0)"

	return (
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
	)
}

Header.displayName="Header";