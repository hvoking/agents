export const Foreground = ({ xScale, minBound, radiusPosition, circleRadius }: any) => {
	return (
		<rect
			x={xScale(minBound)}
			y={circleRadius / 2}
			rx={circleRadius / 2}
			ry={circleRadius / 2}
			width={xScale(radiusPosition) - xScale(minBound)}
			height={circleRadius}
			fill={"rgba(52, 152, 219, 1)"}
		/>
	)
}

Foreground.displayName="Foreground";