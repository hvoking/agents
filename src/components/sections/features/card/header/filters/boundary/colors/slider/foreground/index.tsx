// React imports
import { useEffect } from 'react';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Foreground = ({ marker, xScale, minBound, maxBound, radiusPosition, height, currentFillColor }: any) => {
	const { setMarkers } = useMarkers();

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