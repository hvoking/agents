// App imports
import { Slider } from '../utils/slider';
import { Color } from '../utils/color';

export const Fill = ({ id, fillOpacity }: any) => {
	return (
		<>
			<Slider 
				markerId={id}
				minBound={0} 
				maxBound={1} 
				markerProperty={'fillOpacity'}
				title={"Opacity"}
				initialState={fillOpacity}
			/>
			<Color 
				markerId={id}
				markerProperty={'fillColor'}
			/>
		</>
	)
}

Fill.displayName="Fill";