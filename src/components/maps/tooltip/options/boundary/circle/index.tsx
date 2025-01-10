// React imports
import { useState } from 'react';

// App imports
import { Slider } from './slider';

export const Circle = ({ markerId }: any) => {
	const [ radiusPosition, setRadiusPosition ] = useState(0.5);
	
	const minBound = 0.1;
	const maxBound = 1;

	return (
		<>
			<h2 className="options-subtitle">Circle radius</h2>
			<Slider 
				radiusPosition={radiusPosition}
				setRadiusPosition={setRadiusPosition}
				minBound={minBound}
				maxBound={maxBound}
				markerId={markerId}
			/>
		</>
	)
}

Circle.displayName="Circle";