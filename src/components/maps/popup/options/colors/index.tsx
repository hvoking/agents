// App imports
import { Slider } from './slider'
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Colors = ({ marker }: any) => {
	return (
		<div className="colors-slider-wrapper">
			<Slider marker={marker}/>
		</div>
	)
}

Colors.displayName="Colors";