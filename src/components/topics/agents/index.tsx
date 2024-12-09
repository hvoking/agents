// App imports
import { Character } from './character';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/maps/markers';

export const Agents = () => {
	const { setAddPin } = useMarkers();
	const image1 = process.env.PUBLIC_URL + '/static/thumbnails/thumbnail_1.jpg';
	const image2 = process.env.PUBLIC_URL + '/static/thumbnails/thumbnail_2.jpg';
	const image3 = process.env.PUBLIC_URL + '/static/thumbnails/thumbnail_3.jpg';
	const image4 = process.env.PUBLIC_URL + '/static/thumbnails/thumbnail_4.jpg';
	const image5 = process.env.PUBLIC_URL + '/static/thumbnails/thumbnail_5.jpg';
	const image6 = process.env.PUBLIC_URL + '/static/thumbnails/thumbnail_6.jpg';
	const image10 = process.env.PUBLIC_URL + '/static/thumbnails/thumbnail_10.jpg';
	const image11 = process.env.PUBLIC_URL + '/static/thumbnails/thumbnail_11.jpg';
	const image12 = process.env.PUBLIC_URL + '/static/thumbnails/thumbnail_12.jpg';
	const image13 = process.env.PUBLIC_URL + '/static/thumbnails/thumbnail_13.jpg';
	const image14 = process.env.PUBLIC_URL + '/static/thumbnails/thumbnail_14.jpg';

	const onClick = () => {
		setAddPin((prev: boolean) => !prev);
	}

	return (
		<div className="agent-selector">
			<div className="agent-selector-title">SELECT YOUR AI AGENT</div>
			<div className="agent-selector-wrapper">
				<Character src={image1} alt="thumbnail_1" onClick={onClick}/>
				<Character src={image2} alt="thumbnail_2" onClick={onClick}/>
				<Character src={image3} alt="thumbnail_3" onClick={onClick}/>
				<Character src={image4} alt="thumbnail_4" onClick={onClick}/>
				<Character src={image5} alt="thumbnail_5" onClick={onClick}/>
				<Character src={image6} alt="thumbnail_6" onClick={onClick}/>
				<Character src={image10} alt="thumbnail_10" onClick={onClick}/>
				<Character src={image11} alt="thumbnail_11" onClick={onClick}/>
				<Character src={image12} alt="thumbnail_12" onClick={onClick}/>
				<Character src={image13} alt="thumbnail_13" onClick={onClick}/>
				<Character src={image14} alt="thumbnail_14" onClick={onClick}/>
			</div>
		</div>
	)
}

Agents.displayName="Agents";