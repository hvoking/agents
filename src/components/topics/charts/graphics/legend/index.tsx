// App imports
import './styles.scss';

export const Legend = ({ distribution, colors }: any) => {
	const sortedDistribution = Object.entries(distribution).sort(([, a]: any, [, b]: any) => b - a);

	return (
		<div className="chart-legend">
			{sortedDistribution.map((item: any) => {
				return (
					<div key={item} className="chart-legend-item">
						<span 
							className="chart-legend-icon" 
							style={{backgroundColor: colors[item[0]]}}
						/>
						<div>{item[0]}</div>
					</div>
				)
			})}
		</div>
	)
}

Legend.displayName="Legend";