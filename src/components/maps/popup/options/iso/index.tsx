// App imports
import { Slider } from './slider';
import { Icons } from './icons';
import './styles.scss';

export const IsoProperties = ({ marker }: any) => {
	return (
		<>
			<Icons marker={marker}/>
			<div>
				<div className="boundary-subtitle">Minutes</div>
				<Slider marker={marker}/>
			</div>
		</>
	)
}

IsoProperties.displayName="IsoProperties";