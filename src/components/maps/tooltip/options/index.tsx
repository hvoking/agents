// App imports
import { Boundary } from './boundary';
import { Colors } from './colors';

export const Options = ({ markerId, activeFeature }: any) => {
	return (
		<div className="boundary-selector-wrapper">
		  {activeFeature === "boundary" && <Boundary markerId={markerId}/>}
		  {activeFeature === "colors" && <Colors markerId={markerId}/>}
		</div>
	)
}

Options.displayName="Options";