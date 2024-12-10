// App imports
import { Character } from './character';
import './styles.scss';

export const Agents = () => {
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

	return (
		<div className="agent-selector">
			<div className="agent-selector-title">SELECT YOUR AGENT</div>
			<div className="agent-selector-wrapper">
				<Character src={image1} alt="thumbnail_1"/>
				<Character src={image2} alt="thumbnail_2"/>
				<Character src={image3} alt="thumbnail_3"/>
				<Character src={image4} alt="thumbnail_4"/>
				<Character src={image5} alt="thumbnail_5"/>
				<Character src={image6} alt="thumbnail_6"/>
				<Character src={image10} alt="thumbnail_10"/>
				<Character src={image11} alt="thumbnail_11"/>
				<Character src={image12} alt="thumbnail_12"/>
				<Character src={image13} alt="thumbnail_13"/>
				<Character src={image14} alt="thumbnail_14"/>
			</div>
		</div>
	)
}

Agents.displayName="Agents";