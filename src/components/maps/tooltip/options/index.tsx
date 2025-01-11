// App imports
import { Boundary } from './boundary';
import { Colors } from './colors';
import './styles.scss';

export const Options = ({ markerId, activeFeature }: any) => {
	if (!activeFeature) return <></>;
	
	return (
		<div className="options-wrapper">
		  {(activeFeature === "circle" || activeFeature === "iso")  && <Boundary markerId={markerId} activeFeature={activeFeature}/>}
		  {(activeFeature === "fill" || activeFeature === "stroke") && <Colors markerId={markerId} activeFeature={activeFeature}/>}
		</div>
	)
}

Options.displayName="Options";