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

	const currentProvider = providers.find((item: any) => item.name === marker.provider);

	const currentData = 
		currentProvider.type === "LineString" ? 
		linesData : 
		currentProvider.type === 'Point' ? 
		pointsData : 
		currentProvider.type === 'Cluster' ? 
		clusterData :
		polygonsData;

	const currentColor = 
		currentProvider.type === "LineString" ? 
		'line-color' : 
		currentProvider.type === 'Point'?
		'circle-color' :
		'fill-color'

	return (
		<>
			{activeCharts && 
				<div className="chart-card">
					<>
						<Charts 
							data={currentData} 
							name={currentProvider.columnName} 
							colorLabel={currentColor} 
							title={currentProvider.label}
							graphicType={currentProvider.graphicType}
							backgroundColor={marker.color}
						/>
						<div className="data-provider">
							  <div>data provider</div>
							  <img src={process.env.PUBLIC_URL + `/static/providers/${currentProvider.provider}.svg`} alt="provider" height="20px"/>
						</div>
					</>
				</div>
			}
			<Arrow onClick={onClick}/>
		</>
	)
}

Card.displayName="Card";