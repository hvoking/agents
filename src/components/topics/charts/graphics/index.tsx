// App imports
import { Gauge } from './gauge';
import { Legend } from './legend';
import './styles.scss';

// Context imports
import { useMask } from 'context/agents/mask';

const sourceTypes = [
	{ id: 'lines', name: 'road_class', colorLabel: 'line-color' },
	{ id: 'points', name: 'property_type', colorLabel: 'circle-color' },
	{ id: 'polygons', name: 'class', colorLabel: 'fill-color' },
];

export const Graphics = ({ id }: any) => {
	const { sharedGeoJsonDataMap } = useMask();

	const getSourceData = (type: string) => sharedGeoJsonDataMap.value[`${type}-source-${id}`];

	return (
		<div className="chart-card">
			{sourceTypes.map(({ id: typeId, name, colorLabel }) => {
		        const data = getSourceData(typeId);

		        const { distribution, colors } = data.reduce((acc: any, curr: any) => {
		        	const key = curr[name];
		        	if (key) {
		        		acc.distribution[key] = (acc.distribution[key] || 0) + 1;
		        		acc.colors[key] = curr[colorLabel];
		        	}
		        	return acc;
		        }, { distribution: {}, colors: {} });

		        return (
					<div key={typeId} className="gauge">
						<Gauge distribution={distribution} colors={colors}/>
						<Legend distribution={distribution} colors={colors}/>
					</div>
		        );
		      })}
		</div>
	)
}

Graphics.displayName="Graphics";