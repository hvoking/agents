// App imports
import { Slider } from './slider';
import { Icons } from './icons';
import './styles.scss';

export const IsoProperties = ({ markerId }: any) => {
	return (
		<>
			<Icons markerId={markerId}/>
			<div>
				<div className="boundary-subtitle">Minutes</div>
				<Slider markerId={markerId}/>
			</div>
		</>
	)
}

IsoProperties.displayName="IsoProperties";