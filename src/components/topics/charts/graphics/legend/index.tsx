// App imports
import { processData } from '../utils';
import './styles.scss';

export const Legend = ({ data, name, colorLabel }: any) => {
	const { distribution, colors } = processData(data, name, colorLabel);
	const sortedDistribution = Object.entries(distribution).sort(([, a]: any, [, b]: any) => b - a);

	return (
		<div className="chart-legend">
			{sortedDistribution.map((item: any) => {
				return (
					<div key={item} className="chart-legend-item">
						<span 
							className="chart-legend-icon" 
							style={{backgroundColor: colors[item[0]]}}
						></span>
						<div>{item[0]}</div>
					</div>
				)
			})}
		</div>
	)
}

Legend.displayName="Legend";