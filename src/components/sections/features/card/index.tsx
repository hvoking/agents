// React imports
import { useState } from 'react';

// App imports
import { Charts } from './charts';
import { Arrow } from './arrow';

import './styles.scss';

// Context imports
import { useMask } from 'context/agents/mask';
import { useMarkers } from 'context/agents/markers';

export const Card = ({ marker }: any) => {
	const [ activeCharts, setActiveCharts ] = useState(true);
	const { sharedGeoJsonDataMap } = useMask();
	const { providers } = useMarkers();

	const onClick = () => setActiveCharts((prev: boolean) => !prev);

	const linesData = sharedGeoJsonDataMap.value[`lines-source-${marker.id}`];
	const polygonsData = sharedGeoJsonDataMap.value[`polygons-source-${marker.id}`];
	const pointsData = sharedGeoJsonDataMap.value[`points-source-${marker.id}`];
	const clusterData = sharedGeoJsonDataMap.value[`cluster-source-${marker.id}`];

	const currentProvider = providers[marker.provider];

	return (
		<>
			{activeCharts && 
				<div className="chart-card">
					{currentProvider.map((item: any, index: number) => {
						const currentData = 
							item.type === "LineString" ? 
							linesData : 
							item.type === 'Point' ? 
							pointsData : 
							item.type === 'Cluster' ? 
							clusterData :
							polygonsData;

						const currentColor = 
							item.type === "LineString" ? 
							'line-color' : 
							item.type === 'Point'?
							'circle-color' :
							'fill-color'

						return (
							<>
								<Charts 
									key={index}
									data={currentData} 
									name={item.columnName} 
									colorLabel={currentColor} 
									title={item.label}
									graphicType={item.graphicType}
									backgroundColor={marker.color}
								/>
								<div className="data-provider">
									  <div>data provider</div>
									  <img src={process.env.PUBLIC_URL + `/static/providers/${item.provider}.svg`} alt="provider" height="20px"/>
								</div>
							</>
						)
					})}
					
					</div>
			}
			<Arrow onClick={onClick}/>
		</>
	)
}

Card.displayName="Card";