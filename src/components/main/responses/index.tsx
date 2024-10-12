// App imports
import { Logo } from './logo';
import { Graphics } from './graphics';
import { CTA } from './cta';
import { Title } from './title';
import './styles.scss';

// Context imports
import { useSurveyData } from '../../context/api/data/survey';

export const Responses = () => {
	const { surveyData } = useSurveyData();

	return (
		<div className="responses-wrapper">
			<Logo/>
			<div className="responses-header">
				<div className="responses-header-title">
					<span className="responses-number">
						{surveyData && surveyData.length}
					</span> 
					responses and you are one of them!
				</div>
				<Title/>
			</div>
			<Graphics surveyData={surveyData}/>
			<CTA/>
		</div>
	)
}

Responses.displayName="Responses";