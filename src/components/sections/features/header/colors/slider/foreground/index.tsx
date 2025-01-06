// React imports
import { useEffect } from 'react';

// Context imports
import { useMarkers } from 'context/agents/markers';

// Third-party imports
import * as d3 from 'd3';
export const Foreground = ({ marker, xScale, minBound, maxBound, radiusPosition, height, palette }: any) => {
	const { setMarkers } = useMarkers();

	const range = 1 / (palette.length - 1);

	const colorScale = d3.scaleLinear<string>()
        .domain(d3.range(0, 1 + range, range))
        .range(palette);
    
    const currentFillColor = colorScale(radiusPosition / (maxBound - minBound));

    useEffect(() => {
    	setMarkers((prev: any) =>
            prev.map((item: any) =>
                item.id === marker.id
                    ? { ...item, color: currentFillColor }
                    : item
            )
        );
    }, [ currentFillColor ])

	return (
		<rect
			x={xScale(minBound)}
			y={height / 4}
			rx={height / 4}
			ry={height / 4}
			width={xScale(radiusPosition) - xScale(minBound)}
			height={height / 2}
			fill={currentFillColor}
		/>
	)
}

Foreground.displayName="Foreground";