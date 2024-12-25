// App imports
import { Agent } from './agent';
import { Title } from './title';
import './styles.scss';

export const Edit = () => {
	return (
		<div className="agent-edit-selector">
			<Title/>
			<Agent/>
		</div>
	)
}

Edit.displayName="Edit";