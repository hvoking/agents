// React imports
import { useState } from 'react';

// App imports
import { Slider } from './slider';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers'

export const IsoProperties = ({ routingProfileValues, marker }: any) => {
	const [ radiusPosition, setRadiusPosition ] = useState(10);
	const { setMarkers } = useMarkers();
	
	const minBound = 5;
	const maxBound = 15;

	const onClick = (profile: any) => {
		setMarkers((prev: any) =>
		    prev.map((item: any) => 
		        item.id === marker.id ? 
		        { ...item, routingProfile: profile } : 
		        item
		    )
		);
	}

	return (
		<>
			<div className="routing-profile">
				{Object.entries(routingProfileValues).map(([key, value]: any) => {
					return (
						<div
							onClick={() => onClick(key)} 
							className={`routing-image-wrapper ${marker.routingProfile === key ? "active" : ""}`}>
							<img 
								key={key}
								src={value} 
								alt={key}
								
							/>
						</div>
					)
				})}
			</div>
			<div className="boundary-subtitle">Minutes</div>
			<Slider 
				marker={marker}
				radiusPosition={radiusPosition}
				setRadiusPosition={setRadiusPosition}
				minBound={minBound}
				maxBound={maxBound}
			/>
		</>
	)
}

IsoProperties.displayName="IsoProperties";