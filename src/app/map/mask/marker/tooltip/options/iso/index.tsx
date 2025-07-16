// App imports
import { Slider } from '../utils/slider';
import { Mobility } from '../utils/mobility';

export const Iso = ({ id, contoursMinutes}: any) => {
	return (
		<>
			<Mobility markerId={id}/>
			<Slider 
				markerId={id}
				minBound={5} 
				maxBound={15} 
				markerProperty={"contoursMinutes"} 
				title={"Minutes"}
				initialState={contoursMinutes}
			/>
		</>
	)
}

Iso.displayName="Iso";