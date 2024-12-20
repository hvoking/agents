// App imports
import { Character } from './character';
import './styles.scss';

export const Add = () => {
	const baseUrl = process.env.PUBLIC_URL + '/static/thumbnails/';
	const imageUrls = Array.from({ length: 6 }, (_, i) => `${baseUrl}${i + 1}.svg`);

	return (
		<div className="agent-selector">
			<div className="agent-selector-title">
				SELECT YOUR AGENT
			</div>
			<div className="agent-selector-wrapper">
				{imageUrls.map((url, index) => (
					<Character 
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