// App imports
import { Gauge } from './gauge';
import { Legend } from './legend';
import { Dots } from './dots';
import './styles.scss';

// Context imports
import { useMask } from 'context/agents/mask';

const sourceTypes = [
	{ id: 'lines', name: 'road_class', colorLabel: 'line-color' },
	// { id: 'points', name: 'property_type', colorLabel: 'circle-color' },
	{ id: 'polygons', name: 'subtype', colorLabel: 'fill-color' },
];

export const Graphics = ({ id }: any) => {
	const { sharedGeoJsonDataMap } = useMask();

	const getSourceData = (type: string) => sharedGeoJsonDataMap.value[`${type}-source-${id}`];

	const processData = (data: any, name: any, colorLabel: any) => {
		const distribution: any = {};
		const colors: any = {};

		for (const item of data) {
			const key = item[name];
			if (!key) continue;

			distribution[key] = (distribution[key] || 0) + 1;
			colors[key] = item[colorLabel];
		}

		return Object.entries(distribution)
			.sort(([, a]: any, [, b]: any) => b - a)
			.slice(0, 5)
			.reduce(
				(acc: any, [key, value]: any) => {
				acc.distribution[key] = value;
				acc.colors[key] = colors[key];
				return acc;
			}, { distribution: {}, colors: {} });
	};

	return (
		<div className="chart-card">
			{sourceTypes.map(({ id: typeId, name, colorLabel }) => {
		        const data = getSourceData(typeId);

		        const { distribution, colors } = processData(data, name, colorLabel);

		        // const { distribution, colors } = data.reduce((acc: any, curr: any) => {
		        // 	const key = curr[name];
		        // 	if (key) {
		        // 		acc.distribution[key] = (acc.distribution[key] || 0) + 1;
		        // 		acc.colors[key] = curr[colorLabel];
		        // 	}
		        // 	return acc;
		        // }, { distribution: {}, colors: {} });

		        return (
					<div key={typeId} className="gauge">
						{/*<Gauge distribution={distribution} colors={colors}/>*/}
						<Dots distribution={distribution} colors={colors}/>
						<Legend distribution={distribution} colors={colors}/>
						
					</div>
		        );
		      })}
		</div>
	)
}

Graphics.displayName="Graphics";