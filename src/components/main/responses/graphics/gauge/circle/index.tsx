export const Circle = ({
	innerWidth,
	innerHeight,
	innerRadius,
	strokeWidth,
	currentCircunference,
	circumference,
	totalCircunference,
	currentPercent,
}: any) => {
	return (
		<circle
			cx={innerWidth/2}
			cy={innerHeight/2}
			fill="none"
			r={innerRadius}
			stroke={`rgba(233, 12, 131, ${currentPercent})`}
			strokeWidth= {strokeWidth}
			strokeDasharray={`${currentCircunference} ${circumference - currentCircunference}`}
			strokeDashoffset={-(totalCircunference - currentCircunference)}
			style={{cursor: "pointer"}}
		/>
	)
}

Circle.displayName="Circle";