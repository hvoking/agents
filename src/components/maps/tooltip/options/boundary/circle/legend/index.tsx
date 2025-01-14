// App imports
import './styles.scss';

export const Legend = ({ circleRadius, currentPosition, innerWidth }: any) => {
	return (
		<>	
			<text 
				x={0} 
				y={circleRadius * 5} 
				className="legend-text"
				style={{textAnchor:"start", alignmentBaseline: "middle"}}
			>
				Minutes
			</text>
			<text 
				x={innerWidth} 
				y={circleRadius * 5} 
				className="legend-text"
				style={{textAnchor:"end", alignmentBaseline: "middle"}}
			>
				{Math.round(currentPosition * 10) / 10}
			</text>
		</>
	)
}

Legend.displayName="Legend";