// App imports
import { Gauge } from './gauge';
import './styles.scss';

// Context imports
import { useMask } from 'context/agents/mask';

export const Graphics = ({ id }: any) => {
	const { sharedGeoJsonDataMap } = useMask();

	const linesSourceId = `lines-source-${id}`;
	const pointsSourceId = `points-source-${id}`;
	const polygonsSourceId = `polygons-source-${id}`;

	const linesData = sharedGeoJsonDataMap.value[linesSourceId];
	const pointsData = sharedGeoJsonDataMap.value[pointsSourceId];
	const polygonsData = sharedGeoJsonDataMap.value[polygonsSourceId];

	return (
		<div className="gauges-wrapper">
			<Gauge 
				data={linesData} 
				name="road_class" 
				colorLabel='line-color'
			/>
			<Gauge 
				data={pointsData} 
				name="property_type" 
				colorLabel='circle-color'
			/>
			<Gauge 
				data={polygonsData} 
				name="class" 
				colorLabel='fill-color'
			/>
		</div>
	)
}

Graphics.displayName="Graphics";