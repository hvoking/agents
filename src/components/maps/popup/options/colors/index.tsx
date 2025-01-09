// App imports
import { Slider } from './slider'
import './styles.scss';

export const Colors = ({ markerId }: any) => {
	return (
		<div className="colors-slider-wrapper">
			<Slider markerId={markerId}/>
		</div>
	)
}

Colors.displayName="Colors";