// App imports
import { Slider } from './slider';
import { Mobility } from './mobility';
import './styles.scss';

export const Isochrone = ({ markerId }: any) => {
	return (
		<>
			<h2 className="options-subtitle">Mobility Type</h2>
			<Mobility markerId={markerId}/>
			<Slider markerId={markerId}/>
		</>
	)
}

Isochrone.displayName="Isochrone";