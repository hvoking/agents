// React imports
import { useState } from 'react';

// App imports
import { Slider } from './slider';
import { Catchment } from './catchment';

// Context imports
import { useCircleSizes } from 'context/sizes/circle';

// Third-party imports
import * as d3 from 'd3';

export const Circle = ({ markerId }: any) => {
	const [ radiusPosition, setRadiusPosition ] = useState(0.5);
	const { innerWidth, innerHeight } = useCircleSizes();
	
	const minBound = 0.1;
	const maxBound = 1;

	const r: any = d3.min([innerWidth / 2, innerHeight / 2])

	const xScale = d3.scaleLinear()
		.domain([1, (maxBound * 2) * 1000])
		.range([1, r * 2])

	return (
		<div style={{ display: "grid", gridTemplateRows: "min-content 115px auto"}}>
			<h2 className="options-subtitle">Set Circle Radius</h2>
			<Catchment 
				markerId={markerId}
				radiusPosition={radiusPosition} 
				xScale={xScale} 
				innerWidth={innerWidth} 
				innerHeight={innerHeight}
			/>
			<Slider 
				radiusPosition={radiusPosition}
				setRadiusPosition={setRadiusPosition}
				minBound={minBound}
				maxBound={maxBound}
				markerId={markerId}
			/>
		</div>
	)
}

Circle.displayName="Circle";