// App imports
import './styles.scss';

export const Colors = ({ activeFeature, setActiveFeature }: any) => {
	const strokeBackgroundColor = activeFeature === "stroke" ? "rgba(52, 152, 219, 0.3)" : "rgba(255, 255, 255, 0)";
	const fillBackgroundColor = activeFeature === "fill" ? "rgba(52, 152, 219, 0.3)" : "rgba(255, 255, 255, 0)";

	return (
		<section className="colors-selectors">
			<img 
				src={process.env.PUBLIC_URL + "/static/icons/fill.svg"} 
				alt="fill" 
				className="settings-icon"
				onClick={() => setActiveFeature("fill")}
				style={{backgroundColor: fillBackgroundColor}}
			/>
			<img 
				src={process.env.PUBLIC_URL + "/static/icons/stroke.svg"} 
				alt="stroke" 
				className="settings-icon"
				onClick={() => setActiveFeature("stroke")}
				style={{backgroundColor: strokeBackgroundColor}}
			/>
		</section>
	)
}