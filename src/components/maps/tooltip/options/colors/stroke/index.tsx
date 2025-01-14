// App imports
import { Opacity } from './opacity';
import { Color } from './color';
import { Thickness } from './thickness';

export const Stroke = ({ markerId }: any) => {
	return (
		<div>
			<Thickness markerId={markerId}/>
			<Opacity markerId={markerId}/>
			<Color markerId={markerId}/>
		</div>
	)
}