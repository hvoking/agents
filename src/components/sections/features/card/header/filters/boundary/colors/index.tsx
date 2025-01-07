// App imports
import { Slider } from './slider'
import './styles.scss';

export const Colors = ({ marker }: any) => {
	return (
		<div className="colors-slider-wrapper">
			<Slider marker={marker}/>
		</div>
	)
}

Colors.displayName="Colors";