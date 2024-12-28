// App imports
import { Preview } from './preview';
import { Grid } from './grid';
import './styles.scss';

export const Add = () => {
	const baseUrl = process.env.PUBLIC_URL + '/static/thumbnails/';
	const imageUrls = Array.from({ length: 6 }, (_, i) => `${baseUrl}${i + 1}.svg`);

	return (
		<div className="agent-selection">
		  <h2>Select Your Agent</h2>
		  <p className="instructions">
		  	Choose an agent from the options below to explore the data they represent.
		  </p>
		  <Grid imageUrls={imageUrls}/>
		  <Preview/>
		</div>
	);
};

Add.displayName="Add";