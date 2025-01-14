// App imports
import './styles.scss';

export const Foreground = ({ activeForeground, xScale, minBound, handlerPosition, circleRadius }: any) => {
	return (
		<rect
			x={xScale(minBound)}
			y={circleRadius / 2}
			rx={circleRadius / 2}
			ry={circleRadius / 2}
			width={xScale(handlerPosition) - xScale(minBound)}
			height={circleRadius}
			className="slider-foreground"
		/>
	)
}

Foreground.displayName="Foreground";