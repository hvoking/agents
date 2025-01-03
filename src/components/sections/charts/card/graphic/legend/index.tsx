// App imports
import './styles.scss';

export const Legend = ({ distribution, colors }: any) => {
	return (
		<div className="chart-legend">
			{Object.entries(distribution).map(([ key, value ]: any) => {
				return (
					<div key={key} className="chart-legend-item">
						<span 
							className="chart-legend-icon" 
							style={{backgroundColor: colors[key]}}
						/>
						<div>{key.toLowerCase()}</div>
					</div>
				)
			})}
		</div>
	)
}

Legend.displayName="Legend";