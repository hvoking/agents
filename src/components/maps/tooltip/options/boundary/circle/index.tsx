// React imports
import { useState, useEffect } from 'react';

// App imports
import { Slider } from './slider';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Circle = ({ markerId }: any) => {
	const { setMarkers } = useMarkers();

	const [ handlerPosition, setHandlerPosition ] = useState(0.5);
	const [ restPosition, setRestPosition ] = useState(0.5);
	
	const minBound = 0.1;
	const maxBound = 1;

	useEffect(() => {
		setMarkers((prev: any) => {
		    if (prev[markerId]?.radius !== restPosition) {
		        return {
		            ...prev,
		            [markerId]: {
		                ...prev[markerId],
		                radius: restPosition,
		            },
		        };
		    }
		    return prev;
		});
	}, [ restPosition ])

	return (
		<div className="options-boundary-circle">
			<div className="options-subtitle">Circle Radius</div>
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

Circle.displayName="Circle";