// App imports
import { Opacity } from './opacity';
import { Color } from './color';
import { Thickness } from './thickness';

export const Stroke = ({ markerId }: any) => {
	return (
		<div>
			<Thickness markerId={markerId} minBound={0} maxBound={10} markerProperty={'strokeWidth'}/>
			<Opacity markerId={markerId} minBound={0} maxBound={1} markerProperty={'strokeOpacity'}/>
			<Color markerId={markerId}/>
		</div>
	)
}