// App imports
import { Slider } from '../utils/slider';
import { Mobility } from '../utils/mobility';
import { Color } from '../utils/color';

// Context imports
import { useMarkers } from 'context/markers';

export const Stroke = ({ id, strokeWidth, strokeOpacity }: any) => {
	const { colorPalette } = useMarkers();

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
				colorPalette={colorPalette}
				markerProperty={'stroke'}
			/>
		</>
	)
}

Stroke.displayName="Stroke";