// React imports
import { useState } from 'react';

// App imports
import { Header } from './header';
import { Charts } from './charts';
import { Footer } from './footer';
import './styles.scss';

// Context imports
import { useMask } from 'context/mask';

export const Card = ({ marker }: any) => {
	const [ activeCharts, setActiveCharts ] = useState(true);
	const { sharedGeoJsonDataMap } = useMask();
	const { id, fillColor, fillOpacity, geometryType, columnName, graphicType, provider } = marker;

	const markerColor = fillColor.replace("b", "ba").replace(")", `, ${fillOpacity})`)

	const linesData = sharedGeoJsonDataMap.value[`lines-source-${id}`];
	const polygonsData = sharedGeoJsonDataMap.value[`polygons-source-${id}`];
	const pointsData = sharedGeoJsonDataMap.value[`points-source-${id}`];
	const clusterData = sharedGeoJsonDataMap.value[`cluster-source-${id}`];

	const isLine = geometryType === "LineString";
	const isPoint = geometryType === 'Point';
	const isCluster = geometryType === 'Cluster';

	const currentData = 
		isLine ? linesData : 
		isPoint ? pointsData : 
		isCluster ? clusterData :
		polygonsData;

	const currentColor = 
		isLine ?  'line-color' : 
		isPoint ? 'circle-color' :
		'fill-color';

	return (
		<div key={id} className="agent-card">
		  	<Header marker={marker} activeCharts={activeCharts} setActiveCharts={setActiveCharts}/>
			{activeCharts && 
				<Charts 
					data={currentData} 
					name={columnName} 
					colorLabel={currentColor} 
					graphicType={graphicType}
					backgroundColor={markerColor}
				/>
			}
			{activeCharts && <Footer provider={provider}/>}
		</div>
	)
}

Card.displayName="Card";