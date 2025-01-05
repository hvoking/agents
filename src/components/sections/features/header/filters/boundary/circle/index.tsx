// React imports
import { useState } from 'react';

// App imports
import { Slider } from './slider';

export const CircleProperties = ({ marker }: any) => {
	const [ radiusPosition, setRadiusPosition ] = useState(0.5);
	
	const minBound = 0.1;
	const maxBound = 1;

	return (
		<>
			<div>Circle radius</div>
			<div style={{width: "100%", height: "60px"}}>
				<Slider 
					marker={marker}
					radiusPosition={radiusPosition}
					setRadiusPosition={setRadiusPosition}
					minBound={minBound}
					maxBound={maxBound}
				/>
			</div>
		</>
	)
}

CircleProperties.displayName="CircleProperties";