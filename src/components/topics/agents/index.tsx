// App imports
import './styles.scss';

// Context imports
import { useMarkers } from 'context/maps/markers';

export const Agents = () => {
	const { setAddPin } = useMarkers();
	const image1 = process.env.PUBLIC_URL + '/static/thumbnails/thumbnail_1.jpg';
	const image2 = process.env.PUBLIC_URL + '/static/thumbnails/thumbnail_2.jpg';
	const image3 = process.env.PUBLIC_URL + '/static/thumbnails/thumbnail_3.jpg';
	const image4 = process.env.PUBLIC_URL + '/static/thumbnails/thumbnail_4.jpg';

	const onClick = () => {
		setAddPin((prev: boolean) => !prev);
	}

	return (
		<div className="agent-selector">
			<div className="agent-selector-title">SELECT YOUR AGENT</div>
			<div className="agent-selector-wrapper">
				<div className="agent-selector-item">
	        		<img src={image1} alt="thumbnail_1" onClick={onClick} width="100%"/>
	        	</div>
	        	<div className="agent-selector-item">
					<img src={image2} alt="thumbnail_2" onClick={onClick} width="100%"/>
				</div>
				<div className="agent-selector-item">
					<img src={image3} alt="thumbnail_3" onClick={onClick} width="100%"/>
				</div>
				<div className="agent-selector-item">
					<img src={image4} alt="thumbnail_4" onClick={onClick} width="100%"/>
				</div>
			</div>
		</div>
	)
}

Agents.displayName="Agents";