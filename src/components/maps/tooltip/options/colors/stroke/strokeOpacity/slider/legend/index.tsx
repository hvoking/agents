// App imports
import './styles.scss';

export const Legend = ({ xScale, circleRadius, currentPosition }: any) => {
	const legendWidth = 16;
	
	return (
		<>	
			<polygon 
				points={`
					${xScale(currentPosition)} ${circleRadius * 2}, 
					${xScale(currentPosition) - 6} ${circleRadius * 3}, 
					${xScale(currentPosition) + 6} ${circleRadius * 3}
				`}
			/>
			<rect
				className="legend-rect"
				x={xScale(currentPosition) - legendWidth}
				y={circleRadius * 3}
				rx={2}
				ry={2}
				width={legendWidth * 2}
				height={circleRadius * 3}
			>
			</rect>
			<text 
				x={xScale(currentPosition)} 
				y={circleRadius * 5} 
				className="legend-text"
			>
				{Math.round(currentPosition * 10) / 10}
			</text>
		</>
	)
}

Legend.displayName="Legend";