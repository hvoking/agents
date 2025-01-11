// React imports
import { useState } from 'react';

// App imports
import { SVGWrapper } from './svg';
import { Wrapper } from './wrapper';

// Context imports
import { useSliderSizes } from 'context/sizes/slider';

// Third-party imports
import * as d3 from 'd3';

export const FillColor = ({ markerId }: any) => {
	const [ currentOpacity, setCurrentOpacity ] = useState(0.2);

	const { innerWidth, innerHeight } = useSliderSizes();

	const colorPalette = [
	    "rgb(204, 255, 230)",
	    "rgb(255, 229, 204)",
	    "rgb(223, 246, 255)",
	    "rgb(255, 255, 204)",
	    "rgb(255, 204, 203)",
	];

	const range = 1 / (colorPalette.length - 1);

	const colorScale = d3.scaleLinear<string>()
	  .domain(d3.range(0, 1 + range, range))
	  .range(colorPalette);

	return (
		<div className="options-colors">
		  <SVGWrapper>
		    <Wrapper
		      markerId={markerId}
		      innerWidth={innerWidth}
		      innerHeight={innerHeight}
		      colorScale={colorScale}
		    />
		  </SVGWrapper>
		</div>
	)
}

FillColor.displayName="FillColor";