// App imports
import { Agent } from './agent';
import { Title } from './title';

export const Edit = () => {
	return (
		<div className="agent-selector">
			<Title/>
			<Agent/>
		</div>
	)
}

Edit.displayName="Edit";