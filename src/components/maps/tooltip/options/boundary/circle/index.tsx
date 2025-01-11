// React imports
import { useState } from 'react';

// App imports
import { Slider } from './slider';
import './styles.scss';

export const Circle = ({ markerId }: any) => {
	const [ radiusPosition, setRadiusPosition ] = useState(0.5);
	
	const minBound = 0.1;
	const maxBound = 1;

	return (
		<div className="options-boundary-circle">
			<div className="options-subtitle">Circle Radius</div>
			<Slider 
				radiusPosition={radiusPosition}
				setRadiusPosition={setRadiusPosition}
				minBound={minBound}
				maxBound={maxBound}
				markerId={markerId}
			/>
		</div>
	)
}

Circle.displayName="Circle";