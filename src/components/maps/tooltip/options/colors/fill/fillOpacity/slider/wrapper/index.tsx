// React imports
import { useCallback } from 'react';

import { useMarkers } from 'context/agents/markers';

// Third-party imports
import * as d3 from 'd3';

export const Wrapper = ({ 
    xScale, 
    minBound, maxBound,
    innerWidth, innerHeight, 
    handlerPosition, setHandlerPosition,
    setRestPosition,
    markerId,
    setActiveForeground
}: any) => {
    const { setMarkers } = useMarkers();

    const onDrag = (event: any) => {
        const x = xScale.invert(event.x);
        const boundedX = 
            x < minBound ? minBound : 
            x > maxBound ? maxBound :  
            x;

        setHandlerPosition(boundedX);
    };

    const onDragEnd = (event: any) => {
        const x = xScale.invert(event.x);
        const boundedX = 
            x < minBound ? minBound : 
            x > maxBound ? maxBound :  
            x;

        const roundedX = Math.round(boundedX * 10) / 10;
        setRestPosition(roundedX);
        
    };

    const sliderRef = useCallback((node: any) => {
        const drag = d3.drag()
            .on('start', onDrag)
            .on('drag', onDrag)
            .on('end', onDragEnd);
        d3.select(node).call(drag);
    }, [ handlerPosition ]);

    const onMouseOver = () => {
        setActiveForeground(true);
    }
    const onMouseLeave = () => {
        setActiveForeground(false);
    }

	return (
        <rect
            ref={sliderRef}
            width={innerWidth}
            height={innerHeight}
            fill="transparent"
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
        />
	)
}

Wrapper.displayName="Wrapper"