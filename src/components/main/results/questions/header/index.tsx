// App imports
import './styles.scss';

// Context imports
import { useSurveyData } from '../../../../context/api/data/survey';

export const Header = () => {
	const { surveyData } = useSurveyData();
	const responsesLength = surveyData ? surveyData.length : "0";

	return (
		<div className="results-header">
			<div className="results-header-title">{responsesLength} total responses</div>
			<div className="results-header-click">
				Click a question to see the result
			</div>
		</div>
	)
}

Header.displayName="Header";