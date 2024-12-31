// React imports
import { useState } from 'react';

// App imports
import { Graphic } from './graphic';
import { Arrow } from './arrow';

import './styles.scss';

// Context imports
import { useMask } from 'context/agents/mask';

export const Card = ({ id }: any) => {
	const [ activeCharts, setActiveCharts ] = useState(true);
	const { sharedGeoJsonDataMap } = useMask();

	const getSourceData = (type: string) => sharedGeoJsonDataMap.value[`${type}-source-${id}`];

	const onClick = () => setActiveCharts((prev: boolean) => !prev);

	return (
		<>
			<Arrow onClick={onClick}/>
			{activeCharts && 
				<div className="chart-card">
					<Graphic 
						data={getSourceData('lines')} 
						name={'road_class'} 
						colorLabel={'line-color'} 
						title="roads"
					/>
					<Graphic 
						data={getSourceData('polygons')} 
						name={'subtype'} 
						colorLabel={'fill-color'} 
						title="buildings"
					/>
					{/*<Graphic 
						data={getSourceData('points')} 
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