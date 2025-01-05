// React imports
import { useState } from 'react';

// App imports
import { Boundary } from './boundary';
import { Button } from './button';

export const Filters = ({ marker }: any) => {
	const [ activateFilters, setActivateFilters ] = useState(false);
	const [ hoverActivate, setHoverActivate ] = useState(false);

	const linesColor = activateFilters || hoverActivate ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)";
	const circleColor = activateFilters || hoverActivate ? "rgba(91, 138, 244, 1)" : "rgba(255, 255, 255, 1)";

	return (
		<>
			<Button 
				linesColor={linesColor} 
				circleColor={circleColor}
				setActivateFilters={setActivateFilters}
				setHoverActivate={setHoverActivate}
			/>
			{activateFilters && <Boundary marker={marker}/>}
		</>
	)
}


Filters.displayName="Filters";