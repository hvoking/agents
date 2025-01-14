// App imports
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Header = ({ markerId, activeFeature, setActiveFeature }: any) => {
	const { updateMarkers } = useMarkers();

	const isActiveColor = (name: any) => 
		activeFeature === name ? 
		"rgba(52, 152, 219, 0.3)" : 
		"rgba(255, 255, 255, 0)";

	const onClick = (boundaryType: any) => {
		setActiveFeature(boundaryType)
		if (boundaryType === "circle" || boundaryType === "iso") {
			updateMarkers(markerId, "geometryType", boundaryType);
		}
	}

	const SectionItem = ({ name }: any) => {
		return (
			<div style={{backgroundColor: isActiveColor(name), display: "grid", gridTemplateRows: "auto min-content", justifyItems: "center"}}>
				<img 
					src={process.env.PUBLIC_URL + `/static/icons/${name}.svg`} 
					alt={name}
					className="boundary-icon"
					onClick={() => onClick(name)}
				/>
				<div className="header-title">{name}</div>
			</div>
		)
	}

	return (
		<div className="header-selector">
			<section className="boundary-selectors">
				<SectionItem name={"circle"}/>
				<SectionItem name={"iso"}/>
			</section>
			<section className="section-selectors">
				<SectionItem name={"fill"}/>
				<SectionItem name={"stroke"}/>
			</section>
		</div>
	)
}

Header.displayName="Header";