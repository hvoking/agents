// React imports
import { useState } from 'react';

// App imports
import { Graphic } from './graphic';
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
			<Arrow onClick={onClick}/>
			{activeCharts && 
				<div className="chart-card" style={{gridTemplateColumns: currentProvider.length > 1 ? "1fr 1fr" : "1f"}}>
					{currentProvider.map((item: any) => {
						return (
							<Graphic 
								data={
									item.type === "LineString" ? 
									linesData : 
									item.type === 'Point' ? 
									pointsData : 
									item.type === 'Cluster' ? 
									clusterData :
									polygonsData
								} 
								name={item.columnName} 
								colorLabel={
									item.type === "LineString" ? 
									'line-color' : 
									item.type === 'Point'?
									'circle-color' :
									'fill-color'
								} 
								title={item.label}
								graphicType={item.graphicType}
							/>
						)
					})}
				</div>
			}
		</>
	)
}

Card.displayName="Card";