// App imports
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Grid = ({ imageUrls }: any) => {
	const { setAddPin, setCurrentImage } = useMarkers();

	const onClick = (src: any) => {
		setAddPin((prev: boolean) => !prev);
		setCurrentImage(src);
	}

	return (
		<div className="agent-grid">
		  {imageUrls.map((url: any, index: any) => (
		  <div onClick={() => onClick(url)} className="agent-grid-card">
		    <img src={url} alt={`Agent ${index}`} />
		    <span>Agent {index + 1}</span>
		  </div>
		  ))}
		</div>
	)
}

Grid.displayName="Grid";