// App imports
import './styles.scss';

// Context imports
import { useMarkers } from '../../../../context/maps/markers';
import { useSurveyApi } from '../../../../context/api/survey';

export const Save = () => {
	const { saveSurvey } = useSurveyApi();
	const onClick = () => saveSurvey();

	return (
		<div 
			className="save-pin-wrapper" 
			onClick={onClick}
		>
			<div className="save-pin">
				<img
					className="save-pin-image"
					src={`${process.env.PUBLIC_URL}/static/icons/save.svg`} 
					alt="save-icon"
				/>
			</div>
		</div>
	)
}

Save.displayName="Save";