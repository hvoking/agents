// App imports
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Grid = ({ imageUrls }: any) => {
	const { setAddPin, setCurrentImage, setCurrentName, providers } = useMarkers();

	const onClick = (src: any, name: any) => {
		setAddPin((prev: boolean) => !prev);
		setCurrentImage(src);
		setCurrentName(name);
	}

	const baseUrl = process.env.PUBLIC_URL + '/static/agents/';

	return (
		<div className="agent-grid">
		  {providers.map((name: any) => {
		  	const url = baseUrl + name + '.svg';
		  	const processedName = name.replace("_", " ");

		  	return (
			  <div 
			  	key={name}
			  	className="agent-grid-card"
			  	onClick={() => onClick(url, processedName)} 
			  >
			    <img src={url} alt={name}/>
			    <span>{processedName}</span>
			  </div>
		  )})}
		</div>
	)
}

Grid.displayName="Grid";