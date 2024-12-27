// App imports
import './styles.scss';

// Third-party imports
import * as d3 from "d3";

export const Legend = ({ data, name, colorLabel }: any) => {
	if (!data) return <></>
		
	const distribution = data.reduce((acc: any, curr: any) => {
		const key = curr[name];
		if (key) { acc[key] = (acc[key] || 0) + 1 }
		return acc;
	}, {});

	const colors = data.reduce((acc: any, curr: any) => {
		const key = curr[name];
		if (key) { acc[key] = curr[colorLabel] }
		return acc;
	}, {});

	const sortedDistribution = Object.entries(distribution).sort(([, a]: any, [, b]: any) => b - a);
	const sumOfValues = d3.sum(Object.values(distribution));

	return (
		<div className="chart-legend">
			{sortedDistribution.map((item: any) => {
				const currentPercent = distribution[item[0]] / sumOfValues;
				const currentColor = colors[item[0]];

				return (
					<div key={item} className="chart-legend-item">
						<span 
							className="chart-legend-icon" 
							style={{backgroundColor: currentColor}}
						></span>
						<div>{item[0]}</div>
					</div>
				)
			})}
		</div>
	)
}

Legend.displayName="Legend";