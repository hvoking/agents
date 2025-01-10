// App imports
import { Boundary } from './boundary';
import { Colors } from './colors';
import './styles.scss';

export const Options = ({ markerId, activeFeature }: any) => {
	if (!activeFeature) return <></>;
	
	return (
		<div className="options-wrapper">
		  {!(activeFeature === "colors")  && <Boundary markerId={markerId} activeFeature={activeFeature}/>}
		  {activeFeature === "colors" && <Colors markerId={markerId}/>}
		</div>
	)
}

Options.displayName="Options";