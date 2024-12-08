// App imports
import './styles.scss';

// Context imports
import { useMarkers } from 'context/maps/markers';

export const Selector = () => {
	const { setAddPin } = useMarkers();
	const image1 = process.env.PUBLIC_URL + '/static/thumbnails/thumbnail_1.jpg';
	const image2 = process.env.PUBLIC_URL + '/static/thumbnails/thumbnail_2.jpg';
	const image3 = process.env.PUBLIC_URL + '/static/thumbnails/thumbnail_3.jpg';
	const image4 = process.env.PUBLIC_URL + '/static/thumbnails/thumbnail_4.jpg';

	const onClick = () => {
		setAddPin((prev: boolean) => !prev);
	}

	return (
		<div className="agent-selector-wrapper">
			<div className="agent-character" onClick={onClick}>
				<div
	                style={{
	                    width: '64px',
	                    height: '64px',
	                    backgroundImage: `url(${image1})`,
	                    backgroundPosition: "0 0",
	                }}
            	/>
			</div>
			<div className="agent-character">
				<div
	                style={{
	                    width: '64px',
	                    height: '64px',
	                    backgroundImage: `url(${image2})`,
	                    backgroundPosition: "0 0",
	                }}
            	/>
			</div>
			<div className="agent-character">
				<div
	                style={{
	                    width: '64px',
	                    height: '64px',
	                    backgroundImage: `url(${image3})`,
	                    backgroundPosition: "0 0",
	                }}
            	/>
			</div>
			<div className="agent-character">
				<div
	                style={{
	                    width: '64px',
	                    height: '64px',
	                    backgroundImage: `url(${image4})`,
	                    backgroundPosition: "0 0",
	                }}
            	/>
			</div>
		</div>
	)
}

Selector.displayName="Selector";