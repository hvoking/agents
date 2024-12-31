// React imports
import { useState } from 'react';

// App imports
import { Gauge } from './gauge';
import { Legend } from './legend';
import { Dots } from './dots';
import { Lines } from './lines';
import { Arrow } from './arrow';
import './styles.scss';

// Context imports
import { useMask } from 'context/agents/mask';

// Third-party imports
import * as d3 from 'd3';

const sourceTypes = [
	{ id: 'lines', title: "roads", name: 'road_class', colorLabel: 'line-color' },
	{ id: 'polygons', title: "buildings", name: 'subtype', colorLabel: 'fill-color' },
	// { id: 'points', title: "properties", name: 'property_type', colorLabel: 'circle-color' },
];

export const Graphics = ({ id }: any) => {
	const [ activeCharts, setActiveCharts ] = useState(true);

	const { sharedGeoJsonDataMap } = useMask();

	const getSourceData = (type: string) => sharedGeoJsonDataMap.value[`${type}-source-${id}`];

	const processData = (data: any, name: any, colorLabel: any) => {
		const { distribution, colors } = data.reduce((acc: any, curr: any) => {
			const key = curr[name];
			if (key) {
				acc.distribution[key] = (acc.distribution[key] || 0) + 1;
				acc.colors[key] = curr[colorLabel];
			}
			return acc;
		}, { distribution: {}, colors: {} });

		const sortedEntries = Object.entries(distribution)
		    .sort(([, a]: any, [, b]: any) => b - a)
		    .slice(0, 3);

		return sortedEntries.reduce((acc: any, [key, value]: any) => {
			acc.distribution[key] = value;
			acc.colors[key] = colors[key];
			return acc;
		}, { distribution: {}, colors: {} });
	};

	const onClick = () => setActiveCharts((prev: boolean) => !prev);

	return (
		<>
			<Arrow onClick={onClick}/>
			{activeCharts && <div className="chart-card">
				{sourceTypes.map(({ id, title, name, colorLabel }) => {
			        const data = getSourceData(id);
			        const { distribution, colors } = processData(data, name, colorLabel);
			        const sumOfValues = d3.sum(Object.values(distribution));

			        return (
						<div key={id} className="chart-wrapper">
							<div className="chart-title">{title}</div>
							{/*<Gauge distribution={distribution} colors={colors} sumOfValues={sumOfValues}/>*/}
							<Dots distribution={distribution} colors={colors} sumOfValues={sumOfValues}/>
							{/*<Lines distribution={distribution} colors={colors} sumOfValues={sumOfValues}/>*/}
							<Legend distribution={distribution} colors={colors}/>
						</div>
			        );
			      })}
			</div>}
		</>
	)
}

Graphics.displayName="Graphics";