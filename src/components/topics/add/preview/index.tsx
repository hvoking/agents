// App imports
import './styles.scss';

export const Preview = () => {
	return (
		<div className="agent-preview">
		  <h3>Selected Agent</h3>
		  <div className="preview-details">
		    <p>Select an agent to preview their details here.</p>
		  </div>
		</div>
	)
}

Preview.displayName="Preview";