// App imports
import { Agent } from './agent';
import { Title } from './title';
import './styles.scss';

export const Charts = () => {
	return (
		<div className="charts-wrapper">
			<Title/>
			<Agent/>
		</div>
	)
}

Charts.displayName="Charts";