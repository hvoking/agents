// App imports
import { Character } from './character';
import './styles.scss';

export const Agents = () => {
	const baseUrl = process.env.PUBLIC_URL + '/static/thumbnails/thumbnail_';
	const imageUrls = Array.from({ length: 11 }, (_, i) => `${baseUrl}${i + 1}.jpg`);

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
						alt={`thumbnail_${index + 1}`} 
					/>
				))}
			</div>
		</div>
	);
};

Agents.displayName="Agents";