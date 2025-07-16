// App imports
import { Slider } from '../utils/slider';
import { Color } from '../utils/color';

// Context imports
import { useMarkers } from 'context/markers';

export const Fill = ({ id, fillOpacity }: any) => {
	const { colorPalette } = useMarkers();

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
				colorPalette={colorPalette}
				markerProperty={'fillColor'}
			/>
		</>
	)
}

Fill.displayName="Fill";