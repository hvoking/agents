// React imports
import { useState } from 'react';

// App imports
import { Slider } from './slider';

export const CircleProperties = ({ markerId }: any) => {
	const [ radiusPosition, setRadiusPosition ] = useState(0.5);
	
	const minBound = 0.1;
	const maxBound = 1;

	return (
		<>
			<div className="boundary-subtitle">Circle radius</div>
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

CircleProperties.displayName="CircleProperties";