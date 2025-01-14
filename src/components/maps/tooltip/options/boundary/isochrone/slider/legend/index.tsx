export const Legend = ({ circleRadius, currentPosition, innerWidth, title }: any) => {
	return (
		<>	
			<text 
				x={0} 
				y={circleRadius * 5} 
				className="legend-text"
				style={{textAnchor:"start", alignmentBaseline: "middle"}}
			>
				{title}
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