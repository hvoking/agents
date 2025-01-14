// App imports
import './styles.scss';

export const Foreground = ({ innerHeight, activeForeground, xScale, minBound, handlerPosition, circleHeight }: any) => {
	return (
		<rect
			className="slider-foreground"
			x={xScale(minBound)}
			y={innerHeight / 2 - circleHeight / 2}
			rx={circleHeight / 2}
			ry={circleHeight / 2}
			width={xScale(handlerPosition) - xScale(minBound)}
			height={circleHeight}
		/>
	)
}

Foreground.displayName="Foreground";