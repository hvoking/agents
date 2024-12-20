// App imports
import { Agent } from './agent';

export const Edit = () => {
	return (
		<div className="agent-selector">
			<div className="agent-selector-title">
				EDIT YOUR AGENT
			</div>
			<Agent/>
		</div>
	)
}

Edit.displayName="Edit";