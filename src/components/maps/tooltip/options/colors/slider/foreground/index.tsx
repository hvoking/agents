// React imports
import { useEffect } from 'react';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Foreground = ({ markerId, xScale, minBound, maxBound, radiusPosition, height, currentFillColor }: any) => {
	const { markers, setMarkers } = useMarkers();

    useEffect(() => {
    	const updateColors = () => {
    		setMarkers((prev: any) => ({
    		    ...prev,
    		    [markerId]: {
    		        ...prev[markerId],
    		        color: currentFillColor,
    		    },
    		}));	
    	}
    	Object.keys(markers).length && updateColors();
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