// React imports
import { useState } from 'react';

// App imports
import { Boundary } from './boundary';
import { Button } from './button';

export const Filter = ({ marker }: any) => {
	const [ activateFilter, setActivateFilter ] = useState(false);

	return (
		<div style={{position: "relative"}}>
			<Button 
				setActivateFilter={setActivateFilter}
				activateFilter={activateFilter}
			/>
			{activateFilter && <Boundary marker={marker}/>}
		</div>
	)
}


Filter.displayName="Filter";