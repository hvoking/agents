// App imports
import { Gauge } from './gauge';
import { Legend } from './legend';
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
			<div className="gauge">
				<Gauge 
					data={linesData} 
					name="road_class" 
					colorLabel='line-color'
				/>
				<Legend 
					data={linesData} 
					name="road_class"
					colorLabel='line-color'
				/>
			</div>
			<div className="gauge">
				<Gauge 
					data={pointsData} 
					name="property_type" 
					colorLabel='circle-color'
				/>
				<Legend 
					data={pointsData} 
					name="property_type" 
					colorLabel='circle-color'
				/>
			</div>
			<div className="gauge">
				<Gauge 
					data={polygonsData} 
					name="class" 
					colorLabel='fill-color'
				/>
				<Legend 
					data={polygonsData} 
					name="class" 
					colorLabel='fill-color'
				/>
			</div>
		</div>
	)
}

Graphics.displayName="Graphics";