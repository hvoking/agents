// App imports
import './styles.scss';

export const Background = ({ xScale, minBound, maxBound, circleHeight }: any) => {
	return (
		<rect
			className="slider-background"
			x={xScale(minBound)}
			y={circleHeight / 2}
			rx={circleHeight / 2}
			ry={circleHeight / 2}
			width={xScale(maxBound) - xScale(minBound)}
			height={circleHeight}
		/>
	)
}

Background.displayName="Background";