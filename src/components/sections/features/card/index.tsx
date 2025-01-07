// React imports
import { useState } from 'react';

// App imports
import { Charts } from './charts';
import { Header } from './header';

import './styles.scss';

// Context imports
import { useMask } from 'context/agents/mask';
import { useMarkers } from 'context/agents/markers';

export const Card = ({ marker }: any) => {
	const [ activeCharts, setActiveCharts ] = useState(true);	
	const { sharedGeoJsonDataMap } = useMask();
	const { providers } = useMarkers();

	const linesData = sharedGeoJsonDataMap.value[`lines-source-${marker.id}`];
	const polygonsData = sharedGeoJsonDataMap.value[`polygons-source-${marker.id}`];
	const pointsData = sharedGeoJsonDataMap.value[`points-source-${marker.id}`];
	const clusterData = sharedGeoJsonDataMap.value[`cluster-source-${marker.id}`];

	const currentProvider = providers.find((item: any) => item.name === marker.name);

	const { type: currentType, columnName, graphicType, provider } = currentProvider;

	const isLine = currentType === "LineString";
	const isPoint = currentType === 'Point';
	const isCluster = currentType === 'Cluster';

	const currentData = 
		isLine ? linesData : 
		isPoint ? pointsData : 
		isCluster ? clusterData :
		polygonsData;

	const currentColor = 
		isLine ?  'line-color' : 
		isPoint ? 'circle-color' :
		'fill-color';

	const onClick = () => setActiveCharts((prev: boolean) => !prev);

	return (
		<div key={marker.id} className="agent-card">
		  	<Header marker={marker} activeCharts={activeCharts} setActiveCharts={setActiveCharts}/>
			{activeCharts && <div className="chart-card">
				<Charts 
					data={currentData} 
					name={columnName} 
					colorLabel={currentColor} 
					graphicType={graphicType}
					backgroundColor={marker.color}
				/>
				<div className="data-provider">
					<div>data provider</div>
					<img 
						src={process.env.PUBLIC_URL + `/static/providers/${provider}.svg`} 
						alt="provider" 
					/>
				</div>
			</div>}
		</div>
	)
}

Card.displayName="Card";