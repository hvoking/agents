// React imports
import { useState, useEffect } from 'react';

// App imports
import { Slider } from './slider';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const StrokeOpacity = ({ markerId }: any) => {
	const { setMarkers } = useMarkers();

	const [ handlerPosition, setHandlerPosition ] = useState(0.9);
	const [ restPosition, setRestPosition ] = useState(0.9);
	
	const minBound = 0;
	const maxBound = 1;

	useEffect(() => {
		setMarkers((prev: any) => {
		    if (prev[markerId]?.strokeOpacity !== restPosition) {
		        return {
		            ...prev,
		            [markerId]: {
		                ...prev[markerId],
		                strokeOpacity: restPosition,
		            },
		        };
		    }
		    return prev;
		});
	}, [ restPosition ])

	return (
		<div>
			<div className="options-subtitle">Stroke Opacity</div>
			<Slider 
				handlerPosition={handlerPosition}
				setHandlerPosition={setHandlerPosition}
				setRestPosition={setRestPosition}
				minBound={minBound}
				maxBound={maxBound}
				markerId={markerId}
			/>
		</div>
	)
}

StrokeOpacity.displayName="StrokeOpacity";