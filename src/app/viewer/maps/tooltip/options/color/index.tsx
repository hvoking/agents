// App imports
import { SVGWrapper } from './svg';
import { Wrapper } from './wrapper';
import './styles.scss';

// Context imports
import { useSliderSizes } from 'context/sizes/slider';

// Third-party imports
import * as d3 from 'd3';

export const Color = ({ markerId, colorPalette, markerProperty }: any) => {
	const { innerWidth, innerHeight } = useSliderSizes();

	const range = 1 / (colorPalette.length - 1);

	const colorScale = d3.scaleLinear<string>()
	  .domain(d3.range(0, 1 + range, range))
	  .range(colorPalette);

	return (
		<div className="colors-wrapper">
			<SVGWrapper>
				<Wrapper
					markerId={markerId}
					innerWidth={innerWidth}
					innerHeight={innerHeight}
					colorScale={colorScale}
					markerProperty={markerProperty}
				/>
			</SVGWrapper>
		</div>
	)
}

Color.displayName="Color";