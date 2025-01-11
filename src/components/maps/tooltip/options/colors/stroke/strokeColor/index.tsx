// React imports
import { useState } from 'react';

// App imports
import { SVGWrapper } from './svg';
import { Wrapper } from './wrapper';

// Context imports
import { useSliderSizes } from 'context/sizes/slider';

// Third-party imports
import * as d3 from 'd3';

export const StrokeColor = ({ markerId }: any) => {
	const { innerWidth, innerHeight } = useSliderSizes();

	const colorPalette = [
	    "rgb(0, 255, 0)",
	    "rgb(0, 0, 255)",
	    "rgb(255, 0, 0)",
	    "rgb(0, 0, 0)",
	    "rgb(126, 126, 132)",
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

StrokeColor.displayName="StrokeColor";