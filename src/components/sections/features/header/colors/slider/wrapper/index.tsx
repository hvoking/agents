// React imports
import { useCallback } from 'react';

// Third-party imports
import * as d3 from 'd3';

export const Wrapper = ({ 
    xScale, 
    minBound, maxBound,
    innerWidth, innerHeight, 
    radiusPosition, setRadiusPosition
}: any) => {
    const onDragStart = (event: any) => {
        const x = xScale.invert(event.x);

        const boundedX = 
            x < minBound ? minBound : 
            x > maxBound ? maxBound :
            x;
        setRadiusPosition(+boundedX);
    }

    const onDrag = (event: any) => {
        const x = xScale.invert(event.x);
        const boundedX = 
            x < minBound ? minBound : 
            x > maxBound ? maxBound :  
            x;
        setRadiusPosition(+boundedX);
    }

    const sliderRef = useCallback((node: any) => {
        const drag = d3.drag()
            .on('start', onDragStart)
            .on('drag', onDrag)
        d3.select(node).call(drag);
    }, [ radiusPosition ]);

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