// App imports
import { Slider } from '../../slider';
import { Color } from './color';

export const Stroke = ({ markerId }: any) => {
	return (
		<div>
			<Slider 
				markerId={markerId} 
				minBound={0} 
				maxBound={10} 
				markerProperty={'strokeWidth'} 
				title="thickness"
			/>
			<Slider 
				markerId={markerId} 
				minBound={0} 
				maxBound={1} 
				markerProperty={'strokeOpacity'} 
				title="opacity"
			/>
			<Color markerId={markerId}/>
		</div>
	)
}