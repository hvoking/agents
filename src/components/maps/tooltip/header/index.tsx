// App imports
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers'

export const Header = ({ markerId, activeFeature, setActiveFeature }: any) => {
	const { setMarkers } = useMarkers();

	const circleBackgroundColor = activeFeature === "circle" ? "rgba(52, 152, 219, 0.3)" : "rgba(255, 255, 255, 0)";
	const isoBackgroundColor = activeFeature === "iso"  ? "rgba(52, 152, 219, 0.3)" : "rgba(255, 255, 255, 0)";
	const colorBackgroundColor = activeFeature === "colors" ? "rgba(52, 152, 219, 0.3)" : "rgba(255, 255, 255, 0)";

	const updateBoundaryType = (boundaryType: any) => {
		setActiveFeature(boundaryType)

		setMarkers((prev: any) => ({
		    ...prev,
		    [markerId]: {
		        ...prev[markerId],
		        geometryType: boundaryType
		    },
		}));
	}

	return (
		<div className="header-selector">
			<section className="boundary-selectors">
				<img 
					src={process.env.PUBLIC_URL + "/static/icons/circle.svg"} 
					alt="circle-icon"
					className="settings-icon"
					style={{backgroundColor: circleBackgroundColor}}
					onClick={() => updateBoundaryType("circle")}
				/>
				<img 
					src={process.env.PUBLIC_URL + "/static/icons/iso.svg"} 
					alt="iso-icon"
					className="settings-icon"
					style={{backgroundColor: isoBackgroundColor}}
					onClick={() => updateBoundaryType("iso")}
				/>
			</section>
			<section>
				<img 
					src={process.env.PUBLIC_URL + "/static/icons/colors.svg"} 
					alt="colors" 
					className="settings-icon"
					style={{backgroundColor: colorBackgroundColor}}
					onClick={() => setActiveFeature("colors")}
				/>
			</section>
		</div>
	)
}

Header.displayName="Header";