// App imports
import './styles.scss';

import { providers } from 'context/data/providers';

// Context imports
import { useMarkers } from 'context/markers';

export const Agents = ({ imageUrls }: any) => {
	const { activateMarker } = useMarkers();
	const baseUrl = process.env.PUBLIC_URL + '/static/agents/';

	return (
		<div className="agent-grid">
		  {providers.map((item: any) => {
		  	const name = item.name;
		  	
		  	const url = baseUrl + name + '.svg';
		  	const processedName = name.replace("_", " ");

		  	return (
			  <div 
			  	key={name}
			  	className="agent-grid-card"
			  	onClick={() => activateMarker(url, item)} 
			  >
			    <img src={url} alt={name}/>
			    <span>{processedName}</span>
			  </div>
		  )})}
		</div>
	)
}

Agents.displayName="Agents";