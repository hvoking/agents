// React imports
import { useState } from 'react';

// App imports
import { Slider } from './slider';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers'

const baseUrl = process.env.PUBLIC_URL + "/static/iso/";

const routingProfileValues: any = {
	"walking": baseUrl + "walking.svg",
	"cycling": baseUrl + "cycling.svg",
	"driving": baseUrl + "driving.svg"
}


export const IsoProperties = ({ marker }: any) => {
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
					const isActive = marker.routingProfile === key;

					return (
						<div
							onClick={() => onClick(key)} 
							className={`routing-image-wrapper ${isActive ? "active" : ""}`}
							>
							<img 
								key={key}
								src={isActive ? value.replace(".svg", "-active.svg") : value} 
								alt={key}
								
							/>
						</div>
					)
				})}
			</div>
			<div>
			<div className="boundary-subtitle">Minutes</div>
			<Slider 
				marker={marker}
				radiusPosition={radiusPosition}
				setRadiusPosition={setRadiusPosition}
				minBound={minBound}
				maxBound={maxBound}
			/>
			</div>
		</>
	)
}

IsoProperties.displayName="IsoProperties";