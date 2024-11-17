import { Gauge } from './gauge';
import { Bars } from './bars';
import { Legend } from './legend';
import { Location } from './location';
import { Ranking } from './ranking';

// App imports
import './styles.scss';

export const Graphics = ({ surveyData }: any) => {
	return (
		<div className="graphics">
			<Bars data={surveyData} title="Age" name="age" styleName="age-graphics"/>
			<Bars data={surveyData} title="Ability" name="ability" styleName="ability-graphics"/>
			<div className="race-graphics">
				<div className="graphics-title">Race</div>
				<Gauge data={surveyData} name="race"/>
				<Legend data={surveyData} name="race"/>
				<Ranking data={surveyData} name="race"/>
			</div>
			<div className="gender-graphics">
				<div className="graphics-title">Gender</div>
				<Gauge data={surveyData} name="gender"/>
				<Legend data={surveyData} name="gender"/>
				<Ranking data={surveyData} name="gender"/>
			</div>
			<Location/>
		</div>
	)
}

Graphics.displayName="Graphics";