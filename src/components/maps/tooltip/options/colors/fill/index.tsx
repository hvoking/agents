// App imports
import { Slider } from '../../slider';
import { Color } from './color';

export const Fill = ({ markerId }: any) => {
	return (
		<div>
			<Slider 
				markerId={markerId} 
				minBound={0} 
				maxBound={1} 
				markerProperty={'fillOpacity'}
				title="opacity"
			/>
			<Color markerId={markerId}/>
		</div>
	)
}