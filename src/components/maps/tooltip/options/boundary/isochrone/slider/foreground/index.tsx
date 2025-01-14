export const Foreground = ({ xScale, minBound, radiusPosition, circleRadius }: any) => {
	return (
		<rect
			className="slider-foreground"
			x={xScale(minBound)}
			y={circleRadius / 2}
			rx={circleRadius / 2}
			ry={circleRadius / 2}
			width={xScale(radiusPosition) - xScale(minBound)}
			height={circleRadius}
		/>
	)
}

Foreground.displayName="Foreground";