// App imports
import { Boundary } from './boundary';
import { Colors } from './colors';

export const Options = ({ markerId, activeFeature }: any) => {
	return (
		<div className="boundary-selector-wrapper">
		  {!(activeFeature === "colors")  && <Boundary markerId={markerId} activeFeature={activeFeature}/>}
		  {activeFeature === "colors" && <Colors markerId={markerId}/>}
		</div>
	)
}

Options.displayName="Options";