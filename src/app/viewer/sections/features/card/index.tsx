// React imports
import { useState } from 'react';

// App imports
import { Header } from './header';
import { Charts } from './charts';
import { Footer } from './footer';
import './styles.scss';

// Context imports
import { useMask } from 'context/mask';
import { useMarkers } from 'context/markers';

export const Card = ({ marker }: any) => {
	const [ activeCharts, setActiveCharts ] = useState(true);
	
	const { sharedGeoJsonDataMap } = useMask();
	const { providers } = useMarkers();

	const { id, name, fillColor, fillOpacity } = marker;

	const markerColor = fillColor.replace("b", "ba").replace(")", `, ${fillOpacity})`)

	const linesData = sharedGeoJsonDataMap.value[`lines-source-${id}`];
	const polygonsData = sharedGeoJsonDataMap.value[`polygons-source-${id}`];
	const pointsData = sharedGeoJsonDataMap.value[`points-source-${id}`];
	const clusterData = sharedGeoJsonDataMap.value[`cluster-source-${id}`];

	const currentProvider = providers.find((item: any) => item.name === name);

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