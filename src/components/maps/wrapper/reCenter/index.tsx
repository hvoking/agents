// App imports
import './styles.scss';

// Context imports
import { useMapbox } from '../../../../context/maps/mapbox'

export const ReCenter = () => {
	const { viewport, setViewport } = useMapbox();

	const reCenter = () => {
		setViewport({...viewport})
	}

	return (
		<div className="recenter-wrapper">
			<img 
				className="recenter-image" 
				src={process.env.PUBLIC_URL + "/static/icons/reCenter.svg"} 
				alt="reCenter" 
				onClick={reCenter}
			/>
		</div>
	)
}

ReCenter.displayName="ReCenter";