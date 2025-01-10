// App imports
import { CircleProperties } from './circle';
import { Colors } from './colors';
import { IsoProperties } from './iso';

export const Options = ({ markerId, activeColors, isIsoActive }: any) => {
	return (
		<div className="boundary-selector-wrapper">
		  {!activeColors && !isIsoActive && <CircleProperties markerId={markerId}/>}
		  {!activeColors && isIsoActive && <IsoProperties markerId={markerId}/>}
		  {activeColors && <Colors markerId={markerId}/>}
		</div>
	)
}

Options.displayName="Options";