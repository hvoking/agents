// App imports
import { SVGWrapper } from './svg';
import { Wrapper } from './wrapper';
import './styles.scss';

// Context imports
import { useSliderSizes } from 'context/sizes/slider';

// Third-party imports
import * as d3 from 'd3';

export const Color = ({ markerId, markerProperty }: any) => {
	const colorPalette = [
	    "rgba(245, 246, 248, 1)",
	    "rgba(255, 249, 177, 1)",
	    "rgba(244, 208, 62, 1)", 
	    "rgba(230, 127, 34, 1)",
	    "rgba(241, 149, 138, 1)",
	    "rgba(88, 214, 141, 1)",
	    "rgba(166, 204, 245, 1)",
	    "rgba(108, 216, 250, 1)",
	];
	
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