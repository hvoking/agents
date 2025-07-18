// App imports
import './styles.scss';

// Context imports
import { useMarkers } from 'context/markers';

export const Header = ({ marker, activeFeature, setActiveFeature }: any) => {
	const { id, fillColor, strokeColor } = marker;
	const { updateMarkers } = useMarkers();

	document.documentElement.style.setProperty('--fillColor', fillColor);
	document.documentElement.style.setProperty('--strokeColor', strokeColor);

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
					className="boundary-icon"
					src={process.env.PUBLIC_URL + `/static/icons/${name}.svg`} 
					alt={name}
					onClick={() => onClick(name)}
				/>
			</div>
		)
	}

	return (
		<div className="header-selector">
			<section className="section-selectors">
				<div className="section-item" style={{backgroundColor: isActiveColor("chat")}}>
					<div onClick={() => onClick("chat")} style={{width: "20px", height: "20px"}}>
						<svg viewBox="0 0 30 30" fill="none">
						  <path
						    d="M27 6C27 4.9 26.1 4 25 4H5C3.9 4 3 4.9 3 6V21C3 22.1 3.9 23 5 23H20L24 27V23H25C26.1 23 27 22.1 27 21V6Z"
						    stroke="rgba(52, 152, 219, 1)"
						    stroke-width="2"
						    stroke-linejoin="round"
						    fill="none"
						  />
						  <line x1="7" x2="23" y1="10" y2="10" stroke="rgba(52, 152, 219, 1)" stroke-width="1.5" stroke-linecap="round"/>
						  <line x1="7" x2="23" y1="14" y2="14" stroke="rgba(52, 152, 219, 1)" stroke-width="1.5" stroke-linecap="round"/>
						  <line x1="7" x2="18" y1="18" y2="18" stroke="rgba(52, 152, 219, 1)" stroke-width="1.5" stroke-linecap="round"/>
						</svg>
					</div>
				</div>
			</section>
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
					<div className="fill-color-icon"/>
					<div className="header-title">fill</div>
				</div>
				<div 
					className="section-item" 
					onClick={() => onClick("stroke")}
					style={{backgroundColor: isActiveColor("stroke")}}
				>
					<div className="stroke-color-icon"/>
					<div className="header-title">stroke</div>
				</div>
			</section>
		</div>
	)
}

Header.displayName="Header";