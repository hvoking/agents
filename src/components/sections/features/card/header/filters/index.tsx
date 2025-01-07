// React imports
import { useState } from 'react';

// App imports
import { Boundary } from './boundary';
import { Button } from './button';

export const Filters = ({ marker }: any) => {
	const [ activateFilters, setActivateFilters ] = useState(false);

	return (
		<div style={{position: "relative"}}>
			<Button 
				setActivateFilters={setActivateFilters}
				activateFilters={activateFilters}
			/>
			{activateFilters && <Boundary marker={marker}/>}
		</div>
	)
}


Filters.displayName="Filters";