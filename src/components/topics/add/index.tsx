// App imports
import { Agent } from './agent';
import { Title } from './title';
import './styles.scss';

export const Add = () => {
	const baseUrl = process.env.PUBLIC_URL + '/static/thumbnails/';
	const imageUrls = Array.from({ length: 6 }, (_, i) => `${baseUrl}${i + 1}.svg`);

	return (
		<div className="agent-selector">
			<Title/>
			<div className="agent-selector-wrapper">
				{imageUrls.map((url, index) => (
					<Agent 
						key={index} 
						src={url} 
						alt={`${index + 1}`} 
					/>
				))}
			</div>
		</div>
	);
};

Add.displayName="Add";