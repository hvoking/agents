// App imports
import { Slider } from './slider';
import { Mobility } from './mobility';
import './styles.scss';

export const Isochrone = ({ markerId }: any) => {
	return (
		<>
			<h2 className="options-subtitle">Mobility Type</h2>
			<Mobility markerId={markerId}/>
			<h2 className="options-subtitle">Minutes</h2>
			<Slider markerId={markerId}/>
		</>
	)
}

Isochrone.displayName="Isochrone";