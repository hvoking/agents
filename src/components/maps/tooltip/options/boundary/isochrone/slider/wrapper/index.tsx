// React imports
import { useCallback } from 'react';

// Context imports
import { useMarkers } from 'context/agents/markers';

// Third-party imports
import * as d3 from 'd3';

export const Wrapper = ({ 
    xScale, 
    minBound, maxBound,
    innerWidth, innerHeight, 
    radiusPosition, setRadiusPosition,
    markerId,
}: any) => {
    const { setMarkers } = useMarkers();

    const onDrag = (event: any) => {
        const x = xScale.invert(event.x);
        const boundedX = 
            x < minBound ? minBound : 
            x > maxBound ? maxBound :  
            x;

        const roundedX = Math.round(boundedX);
        setRadiusPosition(roundedX);
    };

    const onDragEnd = (event: any) => {
        const x = xScale.invert(event.x);
        const boundedX = 
            x < minBound ? minBound : 
            x > maxBound ? maxBound :  
            x;

        const roundedX = Math.round(boundedX);

        setMarkers((prev: any) => ({
            ...prev,
            [markerId]: {
                ...prev[markerId],
                contoursMinutes: roundedX,
            },
        }));
    };

    const sliderRef = useCallback((node: any) => {
        const drag = d3.drag()
            .on('start', onDrag)
            .on('drag', onDrag)
            .on('end', onDragEnd);
        d3.select(node).call(drag);
    }, [ radiusPosition, onDrag, onDragEnd ]);

	return (
        <rect
            ref={sliderRef}
            width={innerWidth}
            height={innerHeight}
            fill="transparent"
        />
	)
}

Wrapper.displayName="Wrapper"