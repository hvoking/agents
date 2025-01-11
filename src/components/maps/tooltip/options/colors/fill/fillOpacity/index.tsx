// React imports
import { useState, useEffect } from 'react';

// App imports
import { Slider } from './slider';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const FillOpacity = ({ markerId }: any) => {
	const { setMarkers } = useMarkers();

	const [ handlerPosition, setHandlerPosition ] = useState(0.5);
	const [ restPosition, setRestPosition ] = useState(0.5);
	
	const minBound = 0;
	const maxBound = 1;

	useEffect(() => {
		setMarkers((prev: any) => {
		    if (prev[markerId]?.fillOpacity !== restPosition) {
		        return {
		            ...prev,
		            [markerId]: {
		                ...prev[markerId],
		                fillOpacity: restPosition,
		            },
		        };
		    }
		    return prev;
		});
	}, [ restPosition ])

	return (
		<div className="options-boundary-circle">
			<div className="options-subtitle">Fill Opacity</div>
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

FillOpacity.displayName="FillOpacity";