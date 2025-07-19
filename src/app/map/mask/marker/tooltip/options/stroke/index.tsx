// App imports
import { Slider } from '../utils/slider';
import { Color } from '../utils/color';

export const Stroke = ({ id, strokeWidth, strokeOpacity }: any) => {
	return (
		<>
			<Slider 
				markerId={id}
				minBound={0} 
				maxBound={10} 
				markerProperty={'strokeWidth'} 
				title={"Thickness"}
				initialState={strokeWidth}
			/>
			<Slider 
				markerId={id}
				minBound={0} 
				maxBound={1} 
				markerProperty={'strokeOpacity'} 
				title={"Opacity"}
				initialState={strokeOpacity}
			/>
			<Color 
				markerId={id}
				markerProperty={'strokeColor'}
			/>
		</>
	)
}

Stroke.displayName="Stroke";