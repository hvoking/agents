// App imports
import './styles.scss';

// Context imports
import { useMarkers } from 'context/markers';

export const Header = ({ marker, activeFeature, setActiveFeature }: any) => {
	const { id, fillColor, stroke } = marker;
	const { updateMarkers } = useMarkers();

	const isActiveColor = (name: any) => 
		activeFeature === name ? 
		"rgba(52, 152, 219, 0.3)" : 
		"rgba(255, 255, 255, 0)";

	const onClick = (name: any) => {
		setActiveFeature(name)
		if (name === "circle" || name === "iso") {
			updateMarkers(id, "boundaryType", name);
		}
	}

	const SectionItem = ({ name }: any) => {
		return (
			<div className="section-item" style={{backgroundColor: isActiveColor(name)}}>
				<img 
					src={process.env.PUBLIC_URL + `/static/icons/${name}.svg`} 
					alt={name}
					className="boundary-icon"
					onClick={() => onClick(name)}
				/>
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
				<div 
					className="section-item" 
					onClick={() => onClick("fill")}
					style={{backgroundColor: isActiveColor("fill")}}
				>
					<div 
						style={{
							width: "25px", 
							height: "25px", 
							borderRadius: "50%", 
							backgroundColor: fillColor
						}}
						
					/>
					<div className="header-title">fill</div>
				</div>
				<div 
					className="section-item" 
					onClick={() => onClick("stroke")}
					style={{backgroundColor: isActiveColor("stroke")}}
				>
					<div 
						style={{
							width: "20px", 
							height: "20px", 
							borderRadius: "50%", 
							border: `4px solid ${stroke}`
						}}
						
					/>
					<div className="header-title">stroke</div>
				</div>
			</section>
		</div>
	)
}

Header.displayName="Header";