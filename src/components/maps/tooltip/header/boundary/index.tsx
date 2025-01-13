// App imports
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Boundary = ({ activeFeature, setActiveFeature, markerId }: any) => {
	const { setMarkers } = useMarkers();

	const updateBoundary = (boundaryType: any) => {
		setActiveFeature(boundaryType)

		setMarkers((prev: any) => ({
		    ...prev,
		    [markerId]: {
		        ...prev[markerId],
		        geometryType: boundaryType
		    },
		}));
	}

	const circleBackgroundColor = activeFeature === "circle" ? "rgba(52, 152, 219, 0.3)" : "rgba(255, 255, 255, 0)";
	const isoBackgroundColor = activeFeature === "iso"  ? "rgba(52, 152, 219, 0.3)" : "rgba(255, 255, 255, 0)";

	return (
		<section className="boundary-selectors">
			<img 
				src={process.env.PUBLIC_URL + "/static/icons/circle.svg"} 
				alt="circle-icon"
				className="boundary-icon"
				onClick={() => updateBoundary("circle")}
				style={{backgroundColor: circleBackgroundColor}}
			/>
			<img 
				src={process.env.PUBLIC_URL + "/static/icons/iso.svg"} 
				alt="iso-icon"
				className="boundary-icon"
				onClick={() => updateBoundary("iso")}
				style={{backgroundColor: isoBackgroundColor}}
			/>
		</section>
	)
}

Boundary.displayName="Boundary";