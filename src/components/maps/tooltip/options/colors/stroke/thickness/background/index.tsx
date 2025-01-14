export const Background = ({ xScale, minBound, maxBound, circleRadius }: any) => {
	return (
		<rect
			className="slider-background"
			x={xScale(minBound)}
			y={circleRadius / 2}
			rx={circleRadius / 2}
			ry={circleRadius / 2}
			width={xScale(maxBound) - xScale(minBound)}
			height={circleRadius}
		/>
	)
}

Background.displayName="Background";