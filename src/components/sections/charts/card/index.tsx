// React imports
import { useState } from 'react';

// App imports
import { Graphic } from './graphic';
import { Arrow } from './arrow';

import './styles.scss';

// Context imports
import { useMask } from 'context/agents/mask';

export const Card = ({ marker }: any) => {
	const [ activeCharts, setActiveCharts ] = useState(true);
	const { sharedGeoJsonDataMap } = useMask();

	const onClick = () => setActiveCharts((prev: boolean) => !prev);

	const linesData = sharedGeoJsonDataMap.value[`lines-source-${marker.id}`];
	const polygonsData = sharedGeoJsonDataMap.value[`polygons-source-${marker.id}`];
	// const pointsData = sharedGeoJsonDataMap.value[`points-source-${marker.id}`];

	return (
		<>
			<Arrow onClick={onClick}/>
			{activeCharts && 
				<div className="chart-card">
					<Graphic 
						data={linesData} 
						name={'road_class'} 
						colorLabel={'line-color'} 
						title="roads"
					/>
					<Graphic 
						data={polygonsData} 
						name={'subtype'} 
						colorLabel={'fill-color'} 
						title="buildings"
					/>
					{/*<Graphic 
						data={pointsData} 
						name={'property_type'} 
						colorLabel={'circle-color'} 
						title="properties"
					/>*/}
				</div>
			}
		</>
	)
}

Card.displayName="Card";