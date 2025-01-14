// App imports
import { Boundary } from './boundary';
import { Colors } from './colors';
import './styles.scss';

export const Options = ({ markerId, activeFeature }: any) => {
	if (!activeFeature) return <></>;
	
	return (
		<div className="options-wrapper">
		  <Boundary markerId={markerId} activeFeature={activeFeature}/>
		  <Colors markerId={markerId} activeFeature={activeFeature}/>
		</div>
	)
}

Options.displayName="Options";